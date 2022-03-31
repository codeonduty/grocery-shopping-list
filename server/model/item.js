// item.js --- Product model in database

// Code:

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    productID: {
        type: String,
        required: [true, 'Product ID is required!']
    },

    userName: {
        type: String,
        required: [true, 'Product name is required!']
    },

    itemQuantity: {
        type: Number,
        default: 1,
        required: [true, 'Product quantity is required!']
    },

    created: {
        type: Date,
        default: Date.now,
        required: [true, 'Product timestamp is required!']
    }
});

module.exports = Item;

// item.js ends here
