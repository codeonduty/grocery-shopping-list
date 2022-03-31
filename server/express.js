// express.js -- Express application entry point

// Code:

const express = require('express');
const bodyParser = require('body-parser');

const parseError = require('./utility/error');
const shopperRoutes = require('./route/shopper');

const app = express();

app.use(bodyParser.json());

app.use('/api', shopperRoutes);

app.use(parseError);

module.exports = app;

// express.js ends here
