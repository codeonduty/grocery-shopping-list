// authentication.js --- Definitions to handle authentication

// Code:

// Libraries
const jwt = require('jsonwebtoken');

// Modules
const config = require('./../../config');

const MAXIMUM_TOKEN_AGE = 1 * 24 * 60 * 60; // Maximum token age in seconds

// Create JSON Web Token
const createToken = (shopperUsername) => {
  return jwt.sign({ shopperUsername }, config.JWT_SECRET, {
    expiresIn: MAXIMUM_TOKEN_AGE,
  });
};

module.exports = { createToken };

// authentication.js ends here
