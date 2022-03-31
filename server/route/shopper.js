// shopper.js --- CRUD routes for shopper table in database

// Code:

const express = require('express');

const shopperController = require('./../controller/shopper');

const router = express.Router();

router.route('/shopper')
      .delete(shopperController.remove);

router.route('/shopper/signup')
    .post(shopperController.create);

module.exports = router;

// shopper.js ends here
