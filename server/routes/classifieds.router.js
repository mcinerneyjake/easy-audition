const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

const { rejectUnauthenticated } = require('../modules/authentication-middleware');

const mnPlaylistUrl = 'https://minnesotaplaylist.com';

const mnPlaylistAuditionsList = mnPlaylistUrl + '/classified/auditions';

router.get('/', rejectUnauthenticated, (req, res) => {
  axios(mnPlaylistAuditionsList)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      const auditionTitle = [];

      $('.classified-title', html).each(function () {
        const title = $(this).text();
        const classifiedUrl = mnPlaylistUrl + $(this).find('a').attr('href');
        auditionTitle.push({
          title,
          classifiedUrl,
        });
      });

      res.json(auditionTitle);
    })
    .catch((error) => {
      console.log('Error in scraper axios request:', error);
    });
});

module.exports = router;
