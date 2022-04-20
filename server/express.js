// express.js --- Express application

// Code:

// Libraries
const express = require('express');
const path = require('path');

// Modules
const itemRoutes = require('./route/item');
const shopperRoutes = require('./route/shopper');

// Instantiate express application
const app = express();

// Pre-routing middleware
app.use(express.json());

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

module.exports = app;

// express.js ends here
