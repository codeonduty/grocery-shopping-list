// shopper.js --- Route handler for Shopper model operations

// Commentary:

// This module defines URL routes that can be accessed by an API.

// The routes available are as follows:

// '/api/shopper/signup' - (allows API to send sign up user data)
// '/api/shopper/signin' - (allows API to send sign up user data)
// '/api/shopper/signout' - (allows API to send sign up user data)

// Code:

const express = require('express');

const shopperController = require('./../controller/shopper');
const { requireAuthorization, isAuthorized } = require('./../utility/authentication');

const router = express.Router();

router.post('/shopper/signup', shopperController.registerShopper);
router.post('/shopper/signin', shopperController.loginShopper);
router.get('/shopper/signout', shopperController.logoutShopper);

module.exports = router;

// shopper.js ends here
