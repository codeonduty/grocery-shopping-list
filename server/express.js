// express.js --- Express application

// Commentary:

// This module defines the following:

// - Pre-routing middleware
// - API routing
// - Post-routing middleware

// Code:

// Libraries
const express = require('express');
const path = require('path');

<<<<<<< HEAD
const index = require('./../client/public/index');
=======
// Modules
const itemRoutes = require('./route/item');
>>>>>>> develop
const shopperRoutes = require('./route/shopper');

const CURRENT_WORKING_DIR = process.cwd();

// Instantiate express application
const app = express();

// Pre-routing middleware
app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

// API routing
app.get('/', (request, response) => {
    response.status(200).send(index());
});

app.use('/api', shopperRoutes);


=======

// Route handling
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (request, response) => {
    response.sendFile(
      path.resolve(__dirname, '../client', 'build', 'index.html')
    );
  });
} else {
  app.get('/', (request, response) => {
    response.send('API is active....');
  });
}

app.use('/api', itemRoutes);
app.use('/api', shopperRoutes);

>>>>>>> develop
module.exports = app;

// express.js ends here
