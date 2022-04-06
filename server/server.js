// server.js --- Server entry point

// Commentary:
//
// This module performs two functions, it:
//
// - initializes the database (establishes the connection and handles error)
// - initializes the server (establishes the server and handles the error)

// Code:

const mongoose = require('mongoose');

const config = require('./../config/config');
const app = require('./express');

// Initialize database
mongoose.Promise = global.Promise;      // Uses JavaScript Promise instead
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', function() {
    console.log('Database connection successful...');
}).on('error', () => {
    console.log(`Database connection failure on ${config.MONGODB_URI}...`);
});

// Initialize server
app.listen(config.PORT, (error) => {
    if (error) console.log(error);

    console.info('Server initiated on port %s...', config.PORT);
});

// server.js ends here
