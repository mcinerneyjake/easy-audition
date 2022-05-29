const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET all auditions
router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
  SELECT * FROM auditions
  WHERE user_id = $1
  ORDER BY "date"
  `;
  const sqlValues = [req.user.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('Error in /api/auditions GET request:', error);
    });
});

// GET single audition by date
router.get('/single-audition', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    SELECT * FROM auditions 
    WHERE audition_complete IS NOT TRUE AND user_id = $1 
    ORDER BY "date" 
    LIMIT 1;
    `;
  const sqlValues = [req.user.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('Error in /api/auditions/single-audition GET request:', error);
    });
});

// GET single audition by id
router.get('/:id', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    SELECT * FROM auditions
    WHERE user_id = $1 AND id = $2
    ORDER BY "date"
    `;
  const sqlValues = [req.user.id, req.params.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('Error in /api/auditions/:id GET request:', error);
    });
});

// POST a new audition
router.post('/', rejectUnauthenticated, (req, res) => {
  const newAuditionSqlQuery = `
INSERT INTO auditions (theatre, location, show, date, director, music_director, choreographer, casting_director, pianist, monitor, materials_used, audition_complete, callback, booked, notes, user_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
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
    req.body.auditionComplete,
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

// DELETE an audition by id
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
      DELETE FROM auditions
      WHERE user_id = $1 AND id = $2
      `;
  const sqlValues = [req.user.id, req.params.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in /api/auditions/:id DELETE request:', error);
    });
});

// PUT an audition's details
router.put('/:id', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
  UPDATE auditions
    SET
      theatre = $1,
      location = $2,
      show = $3,
      date = $4,
      director = $5,
      music_director = $6,
      choreographer = $7,
      casting_director = $8,
      pianist = $9,
      monitor = $10,
      materials_used = $11,
      audition_complete = $12,
      callback = $13,
      booked = $14,
      notes = $15
    WHERE id = $16;
  `;
  const sqlValues = [
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
    req.body.auditionComplete,
    req.body.callback,
    req.body.booked,
    req.body.notes,
    req.params.id,
  ];
  pool
    .query(sqlQuery, sqlValues)
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error in /api/auditions/:id PUT request:', error);
    });
});

module.exports = router;
