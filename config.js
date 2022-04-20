// config.js --- Project configuration

// Code:

// Libraries
const dotenv = require('dotenv');

dotenv.config();

const config = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || "mum's the word",
  MONGODB_URI:
    process.env.MONGODB_URI ||
    //|| 'mongodb+srv://duty:duty@cluster0.5ts0l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    'mongodb://localhost:27017/grocery-shopping-list',
};

module.exports = config;

// config.js ends here
