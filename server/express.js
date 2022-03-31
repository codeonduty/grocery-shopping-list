// express.js

// Code:

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

module.exports = app;

// express.js ends here
