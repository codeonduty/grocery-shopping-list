// express.js --- Express application

// Code:

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const shopperRoutes = require('./route/shopper');

// Instantiate express application
const app = express();

// Pre-routing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client/public'));

// Express routing
app.use('/api', shopperRoutes);

// Post-routing middleware
app.use(cookieParser());

module.exports = app;

// express.js ends here
