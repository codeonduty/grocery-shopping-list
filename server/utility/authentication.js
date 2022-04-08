// authentication.js --- Definitions to handle authentication

// Code:

const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

const config = require('../../config/config');

const MAXIMUM_TOKEN_AGE = 1 * 24 * 60 * 60;  // Maximum token age in seconds

// Creates JSON Web Token
const createToken = (shopperUsername) => {
    return jwt.sign({ shopperUsername }, config.JWT_SECRET, {
        expiresIn: MAXIMUM_TOKEN_AGE
    });
}

// Requests authorization
const requireAuthorization = expressJWT({
    secret: config.JWT_SECRET,
    userProperty: 'auth',
    algorithms: ['RS256']
});

// Checks if shopper is authorized to access URL
const isAuthorized = (request, response, next) => {
    const authorized = request.profile && request.auth && request.profile._id == request.auth._id;

    if (!(authorized)) {

        return response.status('403').send({
            error: "Shopper not authorized to perform action!"
        });
    }

    next();
}

module.exports = { createToken, requireAuthorization, isAuthorized }

// authentication.js
