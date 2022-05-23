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
      console.log('Error in //api/auditions GET request:', error);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
