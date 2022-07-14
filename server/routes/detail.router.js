const express = require('express');
const pool = require('../modules/pool');
const detailRouter = express.Router();

// GET request for detail view on Admin Detail Page
detailRouter.get('/:id', (req, res) => {
  const sqlQuery = `
    SELECT
      application.*,
      coalesce(sum(vote.vote), 0) as "voteCount",
      (
        SELECT vote.vote
        FROM vote
        WHERE vote.user_id = $1
        AND vote.application_id = $2
      ) "usersVote",
      (
      SELECT array_agg(to_json(comment.*))
          FROM comment
          WHERE comment.application_id = $2
      ) as "comments"
    FROM application
      LEFT JOIN vote ON vote.application_id = application.id
    WHERE application.id = $2
    GROUP BY application.id;
  ` 
  const sqlParams = [
    req.user.id,
    Number(req.params.id)
  ]
  // console.log(sqlParams, "<<<<<<<<<!!!!!");
  pool.query(sqlQuery, sqlParams)
    .then((results) => {
      // console.log("router side details being sent >>>>>>>>>>", results);
      res.send(results.rows[0]);
    })
    .catch((err) => {
      console.log('GET failed in detail router', err);
    });
  });

module.exports = detailRouter;