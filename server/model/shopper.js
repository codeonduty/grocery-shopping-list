// shopper.js - Shopper model in the database

// Commentary:

// This module defines the Shopper schema used in the database.

// Code:

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        lowercase: true,
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address.'],
        required: [true, "Email is required!"]
    },

    password: {
        type: String,
        trim: true,
        minLength: [8, 'Minimum password length is 8 characters'],
        required: [true, 'Password is required!']
    },

    created: {
        type: Date,
        default: Date.now
    }
});

const Shopper = mongoose.model('shopper', ShopperSchema);

module.exports = Shopper;

// shopper.js ends here
