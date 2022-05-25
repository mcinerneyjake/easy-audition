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
  LIMIT 1
  `;
  const sqlValues = [req.user.id];
  pool
    .query(sqlQuery, sqlValues)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error in /api/single-audition GET request:', error);
    });
});

module.exports = router;
