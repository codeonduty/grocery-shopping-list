// server.js

// Code:

const config = require('./../config/config');
const app = require('./express');

// Start server
app.listen(config.port, (error) => {
    if (error) {
        console.log(error);
    }

    console.info('Server started on port %s...', config.port);
})

// server.js ends here
