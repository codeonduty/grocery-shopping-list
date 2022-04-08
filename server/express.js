// express.js --- Express application

// Commentary:

// This module defines the following:

// - Pre-routing middleware
// - API routing
// - Post-routing middleware

// Code:

const express = require('express');
const path = require('path');

const index = require('./../client/public/index');
const shopperRoutes = require('./route/shopper');

const CURRENT_WORKING_DIR = process.cwd();

// Instantiate express application
const app = express();

// Pre-routing middleware
app.use(express.json());
app.use(express.urlencoded());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

// API routing
app.get('/', (request, response) => {
    response.status(200).send(index());
});

app.use('/api', shopperRoutes);


module.exports = app;

// express.js ends here
