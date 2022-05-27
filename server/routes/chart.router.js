const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET total number of complete auditions, callbacks, and booked jobs
router.get('/', async (req, res) => {
  try {
    const completedAuditionQuery = `
        SELECT date, count(*) FILTER (WHERE audition_complete)
        FROM auditions
        GROUP BY auditions.date;
        `;
    const completedAuditionRes = await pool.query(completedAuditionQuery);

    const callbackAuditionQuery = `
        SELECT date, count(*) FILTER (WHERE callback)
        FROM auditions
        GROUP BY auditions.date;
        `;
    const callbackAuditionRes = await pool.query(callbackAuditionQuery);

    const bookedAuditionQuery = `
        SELECT date, count(*) FILTER (WHERE booked)
        FROM auditions
        GROUP BY auditions.date;
        `;
    const bookedAuditionRes = await pool.query(bookedAuditionQuery);

    res.send({
      auditionCompleteTotal: completedAuditionRes.rows,
      callbackTotal: callbackAuditionRes.rows,
      bookedTotal: bookedAuditionRes.rows,
    });
  } catch (error) {
    console.log('Error in GET /chart', error);
    res.sendStatus(500);
  }
});

module.exports = router;
