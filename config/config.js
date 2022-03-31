// config.js --- Configuration for the project

// Commentary:
//
// Tne project configuration is stored in a JavaScript object accessible from
// any module. The structure of this configuration object is as follows:
//
// env - differentiates between 'development' mode and 'production' mode
// port - determines listening port on the server
// mongoURI - determines location of MongoDB database
//
// Code:

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.port || 4000,
    mongoURI: process.env.MONGODB_URI
        || 'monogdb://' + process.env.MONGO_HOST
        || 'mongodb://' + (process.env.IP || 'localhost') + ':' +
           (process.env.MONGO_PORT || '27017') + '/grocery-shopping-list'
}

module.exports = config;

// config.js ends here
