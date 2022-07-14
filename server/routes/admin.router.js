const express = require('express');
const pool = require('../modules/pool');
const adminRouter = express.Router();
const multer  = require('multer');

const storage = multer.diskStorage({});
const upload = multer({ storage });

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
 adminRouter.post ('/', upload.single("file"), (req, res) => {
    console.log('in POST', req.body, "FILE:", req.file);

  const sqlQuery = `
    INSERT INTO application (name, email, phone, address, address2, about, "whyYou", file, video)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
  const sqlParams = [
    req.body.formData.name,
    req.body.formData.email,
    req.body.formData.phone,
    req.body.formData.address,
    req.body.formData.address2,
    req.body.formData.about,
    req.body.formData.whyYou,
    req.body.formData.file,
    req.body.formData.video
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

// POST to upload a file using cloudinary uploader - NOT working currently
// adminRouter.post('/api/upload', async (req, res)=>{
//   try{
//     const fileStr = req.body.data;
//     const uploadedResponse = await cloudinary.uploader.
//     upload(fileStr, {
//       upload_preset: 'dev_setups'
//     })
//     console.log('this is the uploadResponse for the file upload POST in adminRouter:', uploadResponse);
//     res.json({msg: 'YAY'})
//   }catch(err){
//     console.log(err);
//     res.status(500).json({err: 'Something failed in file upload'})
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