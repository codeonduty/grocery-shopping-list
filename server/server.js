// server.js

// Code:

const mongoose = require('mongoose');

const config = require('./../config/config');
const app = require('./express');

// Connect database
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI);

mongoose.connection.once('open', function() {
    console.log('Database connection successful...')
}).on('error', () => {
    console.log(`Database connection failure on ${config.mongoUri}...`);
})

// Start server
app.listen(config.port, (error) => {
    if (error) {
        console.log(error);
    }

    console.info('Server started on port %s...', config.port);
})

// server.js ends here
