const express = require('express');
const pool = require('../modules/pool');
const adminRouter = express.Router();

 adminRouter.get('/', (req, res) => {
  // GET route code here
  const sqlQuery = `
    SELECT
        application.id,
        application.status,
        application.name,
        application.email,
        application.phone,
        application.address,
        application.address2,
        application.about,
        application."whyYou",
        application.file,
        application.video,
        comment.comment,
        vote.vote
    FROM application
    LEFT JOIN comment
        on application.id = comment.application_id
    LEFT JOIN vote
        on application.id = vote.application_id
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

 adminRouter.post('/', (req, res) => {
    console.log('in POST', req.body);

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
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log('error in post router', err);
    res.sendStatus(500);
  })
});

adminRouter.put('/:applicationID', (req, res) => {
  console.log('in PUT', req.body.status, req.params.applicationID);
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

module.exports = adminRouter;