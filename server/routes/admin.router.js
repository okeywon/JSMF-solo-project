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
    JOIN comment
        on application.id = comment.application_id
    JOIN vote
        on application.id = vote.application_id
        GROUP BY application.id, comment.comment, vote.vote;
    `
    pool.query(sqlQuery)
        .then((results) => {
            console.log("router side >>>>>>>>>>", results);
            res.send(results.rows)
        })
        .catch((err) => {
            console.log('GET failed in admin router', err);
        });
});

 adminRouter.post('/admin', (req, res) => {
  // POST route code here
});

module.exports = adminRouter;