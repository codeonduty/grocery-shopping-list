// shopper.js --- Functions on shopper model in database

// Code:

// Adds shopper to database
const registerUser = (request, response, next) => {
    Shopper.create(request.body)
           .then(function(shopper) {
               response.send(shopper);
           }).catch(next);
}

module.exports = { registerUser }

// shopper.js ends here
