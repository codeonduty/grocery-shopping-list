// shopper.js --- Functions on shopper model in database

// Code:

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
