// express.js --- Express application

// Code:

const express = require('express');

const shopperRoutes = require('./route/shopper');

const app = express();

app.use('/api', shopperRoutes);

module.exports = app;

// express.js ends here
