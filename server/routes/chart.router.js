const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET total count of complete auditions, callbacks, and booked jobs
router.get('/', rejectUnauthenticated, async (req, res) => {
  try {
    const sqlValues = [req.user.id];
    const completedAuditionCountQuery = `
        SELECT count(*) FILTER (WHERE audition_complete)
        FROM auditions
        WHERE user_id = $1;
        `;
    const completedAuditionCountRes = await pool.query(completedAuditionCountQuery, sqlValues);

    const callbackAuditionCountQuery = `
        SELECT count(*) FILTER (WHERE callback)
        FROM auditions
        WHERE user_id = $1;
        `;
    const callbackAuditionCountRes = await pool.query(callbackAuditionCountQuery, sqlValues);

    const bookedAuditionCountQuery = `
        SELECT count(*) FILTER (WHERE booked)
        FROM auditions
        WHERE user_id = $1;
        `;
    const bookedAuditionCountRes = await pool.query(bookedAuditionCountQuery, sqlValues);

    res.send([completedAuditionCountRes.rows, callbackAuditionCountRes.rows, bookedAuditionCountRes.rows]);
  } catch (error) {
    console.log('Error in GET /chart', error);
    res.sendStatus(500);
  }
});

// GET date

module.exports = router;
