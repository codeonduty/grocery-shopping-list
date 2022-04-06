// shopper.js --- Functions on shopper model in database

// Code:

const jwt = require('jsonwebtoken');

const Shopper = require('./../model/shopper');

const maximumTokenAge = 1 * 24 * 60 * 60;  // Maximum token age in seconds

// Function creates token
const createToken = (shopperUsername) => {
    return jwt.sign({ shopperUsername }, 'shoppingListSecret', {
        expiresIn: maximumTokenAge
    });
}

// Function adds shopper to database
const registerShopper = (request, response, next) => {
    Shopper.create(request.body)
           .then(function(shopper) {

               // Setup JSON web token for session handling
               const token = createToken(request.body.username);
               response.cookie('jwt', token, {
                   httpOnly: true,
                   maxAge: maximumTokenAge * 1000 // Cookie is in milliseconds
               });

               response.status(200).send(shopper);
           }).catch((error) => {
               response.send('Error! Shopper registration failed!' + error);
               console.log(error);
           });
}

// Function logs shopper in to application
const loginShopper = async (request, response, next) => {
    const { username, password } = request.body;

    try {

        // Retrieve shopper data
        const shopper = await Shopper.findOne({ username });

        // Authenticate shopper
        if (shopper) {
            if (shopper.password = password) {

               // Setup JSON web token for session handling
                const token = createToken(request.body.username);
                response.cookie('jwt', token, {
                    httpOnly: true,
                    maxAge: maximumTokenAge * 1000 // Cookie is in milliseconds
                });
                response.status(200).send({ username: shopper.username });
            } else {
                throw Error('Username or password is incorrect!');
            }
        }
    } catch (error) {
       response.status(400).send(error);
    }
}

// Function logs shopper out of application
const logoutShopper = (request, response, next) => {

}

module.exports = { registerShopper, loginShopper, logoutShopper }

// shopper.js ends here
