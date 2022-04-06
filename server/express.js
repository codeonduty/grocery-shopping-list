// express.js -- Express application entry point

// Code:

const express = require('express');
const bodyParser = require('body-parser');

const parseError = require('./utility/error');
const homeRoutes = require('./route/home');
const shopperRoutes = require('./route/shopper');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());

app.use(homeRoutes);
app.use('/api', shopperRoutes);

app.use(parseError);

module.exports = app;

// express.js ends here
