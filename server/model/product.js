// product.js --- Product model in Database

// Code:

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productID: {
        type: String,
        required: [true, 'Product ID is required!']
    },

    productName: {
        type: String,
        required: [true, 'Product name is required!']
    },

    productQuantity: {
        type: Number,
        required: [true, 'Product quantity is required!']
    },

    productDesc: {
        type: String
    },

    productPrice: {
        type: Number,
        required: [true, 'Product price is required!']
    }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;

// product.js ends here