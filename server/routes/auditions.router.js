const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
  SELECT * FROM auditions
  WHERE user_id = $1
  ORDER BY "date"
  `;
  const sqlValues = [req.user.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error in /api/auditions GET request:', error);
    });
});

router.post('/', (req, res) => {
  const newAuditionSqlQuery = `
INSERT INTO "auditions" (theatre, location, show, date, director, music_director, choreographer, casting_director, pianist, monitor, materials_used, callback, booked, notes, user_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
`;
  const newAuditionSqlValues = [
    req.body.theatre,
    req.body.location,
    req.body.show,
    req.body.date,
    req.body.director,
    req.body.musicDirector,
    req.body.choreographer,
    req.body.castingDirector,
    req.body.pianist,
    req.body.monitor,
    req.body.materialsUsed,
    req.body.callback,
    req.body.booked,
    req.body.notes,
    req.user.id,
  ];
  pool
    .query(newAuditionSqlQuery, newAuditionSqlValues)
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in /api/auditions POST request:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
