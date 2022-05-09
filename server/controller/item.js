// item.js --- Controller functions for item model

// Code:

// Libraries
const asyncHandler = require('express-async-handler');

// Modules
const Item = require('./../model/item');

// Fetch all items from database
const fetchItems = asyncHandler(async (request, response) => {
  const items = await Item.find({});

  response.json(items);
});

// Fetch item using item's ID
const fetchItem = asyncHandler(async (request, response) => {
  const item = await Item.findById(request.params.id);

  // Return item if item is found
  if (item) {
    response.json(item);
  } else {
    // Return error if item is not found
    response.status(404).json({ message: 'Item not found!' });
  }
});

// Update item using item's ID
const updateItem = asyncHandler(async (request, response) => {
  const name = request.body.username;
  const price = request.body.username;
  const description = request.body.username;
  const image = request.body.username;
  const stock = request.body.username;

  const item = await Item.findById(request.params.id);

  if (item) {
    item.name = name;
    item.price = price;
    item.description = description;
    item.image = image;
    item.stock = stock;

    const updatedItem = await items.save();

    // Return updatedItem if save successful
    response.js(updatedItem);
  } else {
    // Return error item is not found
    response.status(404).json({ message: 'Item not found!' });
  }
});

module.exports = { fetchItem, fetchItems, updateItem };

// express.js ends here
