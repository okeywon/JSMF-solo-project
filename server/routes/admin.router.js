const express = require('express');
const pool = require('../modules/pool');
const adminRouter = express.Router();
const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './public/uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() 
        + path.extname(file.originalname))
    }
});

const videoStorage = multer.diskStorage({
  destination: 'videos', // Destination to store video 
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() 
       + path.extname(file.originalname))
  }
});

const upload = multer({ storage, videoStorage });

// GET request for all data to display to Admin Page table(list view).
 adminRouter.get('/', (req, res) => {
  // GET route code here
  const sqlQuery = `
    SELECT
      application.*,
      coalesce(sum(vote.vote), 0) as "voteCount"
    FROM application
      LEFT JOIN vote ON vote.application_id = application.id
    GROUP BY application.id
    ORDER BY application.id;`
  pool.query(sqlQuery)
    .then((results) => {
        // console.log("router side >>>>>>>>>>", results);
        res.send(results.rows)
    })
    .catch((err) => {
        console.log('GET failed in admin router', err);
    });
});

// POST route for user to input an application
 adminRouter.post ('/', upload.any(), (req, res) => {
    console.log('in POST', req.body, "FILE:", req.files);
    console.log("look here >>>>>>>>>>", req.body);
  const sqlQuery = `
    INSERT INTO application (name, email, phone, address, address2, about, "whyYou", file, video)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
  const sqlParams = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.address,
    req.body.address2,
    req.body.about,
    req.body.whyYou,
    req.body.file,
    req.body.video
 ];
  pool.query(sqlQuery, sqlParams)
  .then((results) => {
    console.log('POST is sending', results.rows);
    cloudinary.uploader.upload(req.file.path, {
      folder: "shareMe",
      resource_type: "auto"
    })
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log('error in post router', err);
    res.sendStatus(500);
  })
});

// POST FOR CLOUDINARY
// adminRouter.post('/upload', async (req, res)=>{
//   try{
//     const fileStr = req.body.formData.file;
//     fileStr.append(req.body.formData.video);
//     const uploadedResponse = await cloudinary.uploader
//     upload(fileStr, {
//       upload_preset: 'dev_setups'
//     });
//     console.log('this is the uploadResponse for the file upload POST in adminRouter:', uploadedResponse);
//     res.json({msg: 'YAY'})
//   }catch(err){
//     console.log(err, 'error in Cloudinary post');
//     res.sendStatus(500);
//   }
// })

// PUT route to update the status on the Admin Page list view
adminRouter.put('/:applicationID', (req, res) => {
  // console.log('in PUT', req.body.status, req.params.applicationID);
  const sqlQuery = `
    UPDATE application
    SET status = $1
    WHERE id = $2`;
  const sqlParams = [
    req.body.status,
    req.params.applicationID
  ];
  pool.query(sqlQuery, sqlParams)
  .then((results) => {
    console.log('PUT is updating', results.rows);
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log('error in PUT router', err);
    res.sendStatus(500);
  })
});

// Delete route to remove an application from the Admin Page
adminRouter.delete('/:id', (req, res) => {
  const applicationID = req.params.id

  // Construct the SQL Query that will delete the selected item
  // if the user has proper permissions
  const sqlQuery = `
    DELETE FROM application
    WHERE application.id = $1;`

  const sqlParams = [
    applicationID,
  ]

  pool.query(sqlQuery, sqlParams)
  .then(response => {
    console.log(response.rows, "This was the response")
      // Send a 200 response indicating a row was deleted
      res.sendStatus(200)
  })
  .catch(err => {
    console.log(`Error in the server DELETE route with ${err}`);
    res.sendStatus(500);
  })
});

module.exports = adminRouter;