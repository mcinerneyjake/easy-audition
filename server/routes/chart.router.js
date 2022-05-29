const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET total count of complete auditions, callbacks, and booked jobs
router.get('/', async (req, res) => {
  try {
    const completedAuditionCountQuery = `
        SELECT count(*) FILTER (WHERE audition_complete)
        FROM auditions;
        `;
    const completedAuditionCountRes = await pool.query(completedAuditionCountQuery);

    const callbackAuditionCountQuery = `
        SELECT count(*) FILTER (WHERE callback)
        FROM auditions;
        `;
    const callbackAuditionCountRes = await pool.query(callbackAuditionCountQuery);

    const bookedAuditionCountQuery = `
        SELECT count(*) FILTER (WHERE booked)
        FROM auditions;
        `;
    const bookedAuditionCountRes = await pool.query(bookedAuditionCountQuery);

    res.send([completedAuditionCountRes.rows, callbackAuditionCountRes.rows, bookedAuditionCountRes.rows]);
  } catch (error) {
    console.log('Error in GET /chart', error);
    res.sendStatus(500);
  }
});

// GET date

module.exports = router;
