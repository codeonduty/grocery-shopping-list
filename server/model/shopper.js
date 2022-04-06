// shopper.js - Shopper model in the database

// Commentary:

// This module defines the Shopper schema used in the database.

// Code:

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Shopper schema definition
const ShopperSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Username is required!']
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address.'],
        required: [true, "Email is required!"]
    },

    passkey: {
        type: String,
        trim: true,
        required: [true, 'Password is required!']
    },

    salt: {
        type: String
    }
});

const Shopper = mongoose.model('shopper', ShopperSchema);

module.exports = Shopper;

// shopper.js ends here
