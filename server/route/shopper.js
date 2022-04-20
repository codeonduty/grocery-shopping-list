// shopper.js --- Route handler for Shopper model operations

// Code:

// Libraries
const express = require('express');

// Modules
const shopperController = require('./../controller/shopper');

// Router instantiation
const router = express.Router();

// @desc Authenticate shopper (fetch token)
// @route POST /api/shopper/signin
// @access Public
router.post('/shopper/signin', shopperController.authenticateShopper);

// @desc Register shopper
// @route POST /api/shopper/signin
// @access Public
router.post('/shopper/signup', shopperController.registerShopper);

module.exports = router;

// shopper.js ends here
