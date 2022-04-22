// shopper.js --- Route handler for Shopper model operations

<<<<<<< HEAD
// Commentary:

// This module defines URL routes that can be accessed by an API.

// The routes available are as follows:

// '/api/shopper/signup' - (allows API to send sign up user data)
// '/api/shopper/signin' - (allows API to send sign up user data)
// '/api/shopper/signout' - (allows API to send sign up user data)

=======
>>>>>>> develop
// Code:

// Libraries
const express = require('express');

// Modules
const shopperController = require('./../controller/shopper');
const { requireAuthorization, isAuthorized } = require('./../utility/authentication');

// Router instantiation
const router = express.Router();

<<<<<<< HEAD
router.post('/shopper/signup', shopperController.registerShopper);
router.post('/shopper/signin', shopperController.loginShopper);
router.get('/shopper/signout', shopperController.logoutShopper);
=======
// @desc Authenticate shopper (fetch token)
// @route POST /api/shopper/signin
// @access Public
router.post('/shopper/signin', shopperController.authenticateShopper);

// @desc Register shopper
// @route POST /api/shopper/signin
// @access Public
router.post('/shopper/signup', shopperController.registerShopper);
>>>>>>> develop

module.exports = router;

// shopper.js ends here
