// item.js --- Item API routes

// Code:

// Libraries
const express = require('express');

// Models
const itemController = require('./../controller/item');

// Route handler instantiation
const router = express.Router();

// @desc Fetch all items
// @route GET /api/items
// @access Public
router.get('/item', itemController.fetchItems);

// @desc Fetch item using item's ID
// @route GET /api/items/:id
// @access Public
router.get('/item/:id', itemController.fetchItem);

// @desc Update item using item's ID
// @route PUT /api/items/:id
// @access Public
router.put('/item/:id', itemController.updateItem);

module.exports = router;

// item.js ends here
