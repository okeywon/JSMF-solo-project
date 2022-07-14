const express = require('express');
const pool = require('../modules/pool');
const detailRouter = express.Router();

// GET request for detail view on Admin Detail Page
detailRouter.get('/:id', (req, res) => {
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
        json_agg(comment.comment) as comments,
        SUM(vote.vote)
      FROM application
      LEFT JOIN comment
        on application.id = comment.application_id
      LEFT JOIN vote
        on application.id = vote.application_id
      WHERE application.id = $1
      GROUP BY application.id, vote.vote;`
    pool.query(sqlQuery, [req.params.id])
        .then((results) => {
            // console.log("router side details being sent >>>>>>>>>>", results);
            res.send(results.rows[0]);
        })
        .catch((err) => {
            console.log('GET failed in admin router', err);
        });
  });

module.exports = detailRouter;