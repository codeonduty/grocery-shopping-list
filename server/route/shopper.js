// shopper.js --- Route handler for Shopper model operations

// Commentary:

// This module defines URL routes that can be accessed by an API.

// The routes available are as follows:

// '/api/shopper/signup' - (allows API to send sign up user data)

// Code:

const express = require('express');

const shopperController = require('./../controller/shopper');

const router = express.Router();

router.route('/shopper/signup').post(shopperController.create);

module.exports = router;

// shopper.js ends here
