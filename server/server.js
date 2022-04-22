// server.js --- Server entry point

// Commentary:

// This module performs two functions, it:

// 1. Initializes the database (establishes the connection and handles error)
// 2. Initializes the server (establishes the server and handles the error)

// Code:

// Libraries
const mongoose = require('mongoose');

// Modules
const config = require('./../config');
const app = require('./express');

// Initialize database
mongoose.Promise = global.Promise; // Uses JavaScript Promise instead
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle database connection response
mongoose.connection
  .once('open', function () {
    console.log('Database connection successful...');
  })
  .on('error', () => {
    console.log(`Database connection failure...`, error);
  });

// Initialize server
app.listen(config.PORT, (error) => {
  if (error) console.log(error);
  console.info('Server initiated on port %s...', config.PORT);
});

// server.js ends here
