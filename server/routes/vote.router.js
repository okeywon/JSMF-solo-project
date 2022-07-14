const express = require('express');
const pool = require('../modules/pool');
const voteRouter = express.Router();

//POST route for a user to add a vote to an application
voteRouter.post ('/:id', (req, res) => {
    const sqlQuery = `
      INSERT INTO vote (user_id, application_id, vote)
      VALUES ($1, $2, $3)`;
    const sqlParams = [
      req.user.id,
      req.body.appID,
      req.body.newVote,
    ];
    console.log('voteRouter vote POST>>>>>>>>>>>>>>>>', sqlParams);
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

module.exports = voteRouter;