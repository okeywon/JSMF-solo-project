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
            console.log("router side details being sent >>>>>>>>>>", results);
            res.send(results.rows[0]);
        })
        .catch((err) => {
            console.log('GET failed in admin router', err);
        });
  });

  //POST route for a user to add a vote to an application
  detailRouter.post ('/:id', (req, res) => {
    console.log('detailRouter vote POST>>>>>>>>>>>>>>>>', req.body);
    let newVote = Number(req.body.vote +1);
    const sqlQuery = `
      INSERT INTO vote (user_id, application_id, vote)
      VALUES ($1, $2, $3)`;
    const sqlParams = [
      req.user.id,
      req.body.appID,
      newVote,
    ];
    pool.query(sqlQuery, sqlParams)
    .then((results) => {
      console.log('POST is sending', results.rows);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('error in post router', err);
      res.sendStatus(500);
    });
  });

module.exports = detailRouter;