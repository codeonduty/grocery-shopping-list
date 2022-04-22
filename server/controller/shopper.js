// shopper.js --- Controller functions for shopper model

// Code:

// Libraries
const asyncHandler = require('express-async-handler');

// Modules
const Shopper = require('./../model/shopper');
const { createToken } = require('./../utility/authentication');

// Authenticate shopper
const authenticateShopper = asyncHandler(async (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  // Fetch shopper from database
  const shopper = await Shopper.findOne({ username });

  // Compare passwords
  if (shopper && (await shopper.isCorrectPassword(password))) {
    // Return JSON if passwords
    response.json({
      username: shopper.username,
      token: createToken(shopper.username),
    });
  } else {
    // Return error if passwords don't match
    response
      .status(401)
      .json({ error: 'Shopper username or password is Incorrect!' });
  }
});

// Add shopper to database
const registerShopper = (request, response, next) => {
  const username = request.body.username;
  const email = request.body.email;
  const password = request.body.password;

  // Save shopper to database
  Shopper.create(request.body)
    .then(function (shopper) {
      // Return JSON if save is successful
      response.status(201).json({
        username: shopper.username,
        token: createToken(shopper.username),
      });
    })
    .catch((error) => {
      // Return JSON if save is unsuccessful
      response.status(400).json('Error! Shopper registration failed!' + error);
    });
};

module.exports = { registerShopper, authenticateShopper };

// shopper.js ends here
