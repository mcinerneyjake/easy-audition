const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const url = 'https://minnesotaplaylist.com/classified/auditions';

router.get('/', rejectUnauthenticated, (req, res) => {
  axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const auditionTitle = [];
    // const auditionDescription = [];
    // const auditionDatesAndLocations = [];

    $('.classified-title', html).each(function() {
      const title = $(this).text();
      const classifiedUrl = $(this).find('a').attr('href');
      auditionTitle.push({
        title,
        classifiedUrl,
      });
    });

    // $('.priceView-customer-price', html).each(function() {
    //   const description = $(this).text();
    //   auditionDescription.push({
    //     description,
    //   });
    // });

    // $('.priceView-customer-price', html).each(function() {
    //   const datesAndLocations = $(this).text();
    //   auditionDatesAndLocations.push({
    //     datesAndLocations,
    //   });
    // });
    res.json(auditionTitle);
  })
  .catch((error) => {
    console.log('Error in scraper axios request:', error);
  });
});

module.exports = router;