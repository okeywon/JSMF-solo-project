const express = require('express');
const pool = require('../modules/pool');
const commentRouter = express.Router();

// POST route to input a comment
commentRouter.post ('/:id', (req, res) => {
    // console.log('in comment POST>>>>>>>>>>>>>>>>', req.body);
    const sqlQuery = `
      INSERT INTO comment (user_id, application_id, comment)
      VALUES ($1, $2, $3)`;
    const sqlParams = [
      req.user.id,
      req.body.appID,
      req.body.newComment,
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

module.exports = commentRouter;