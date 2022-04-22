// shopper.js --- Controller functions for shopper model

// Code:

<<<<<<< HEAD
const Shopper = require('./../model/shopper');
const { createToken } = require('./../utility/authentication');

// Function adds shopper to database
const registerShopper = (request, response, next) => {
    Shopper.create(request.body)
           .then(function(shopper) {

               // Setup JSON web token for session handling
               const token = createToken(request.body.username);
               response.cookie('jwt', token, {
                   httpOnly: true,
                   maxAge: 1 * 24 * 60 * 60 * 1000 // Cookie is in milliseconds
               });

               response.status(200).send(shopper);
           }).catch((error) => {
               response.send('Error! Shopper registration failed!' + error);
           });
}

// Function logs shopper in to application
const loginShopper = (request, response, next) => {

    // Retrieve shopper data
    Shopper.findOne({ 'username': request.body.username }, (error, shopper) => {

        // Authenticate shopper
        if (shopper) {
            if (shopper.password = request.body.password) {

                // Setup JSON web token for session handling
                const token = createToken(request.body.username);

                response.cookie('jwt', token, {
                    httpOnly: true,
                    maxAge: 1 * 24 * 60 * 60 * 1000 // Cookie is in milliseconds
                });

                response.status(200).send({ username: shopper.username });

            } else {

                response.status(403).send({ error: 'User login failed!' });

            }
        }
    });
}

// Function logs shopper out of application
const logoutShopper = (request, response) => {

    response.clearCookie("t");

    return res.status('200').send({
        message: "Shopper logout succssful!"
    });
}

module.exports = { registerShopper, loginShopper, logoutShopper }
=======
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
>>>>>>> develop
