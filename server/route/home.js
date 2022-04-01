// home.js --- Home routes

// Code:

const express = require('express');

const router = express.Router();

router.route('/')
      .get((request, response, next) => {
          response.status(200).sendFile('../../dist/index.html');
      });

module.exports = router;

// home.js ends here
