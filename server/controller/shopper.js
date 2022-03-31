// shopper.js

// Code:

const Shopper = require('./../model/shopper');

// Adds shopper to database
const create = (request, response, next) => {
    Shopper.create(request.body)
           .then(function(shopper) {
               response.send(shopper);
           }).catch(next);
}

// Removes shopper from database
const remove = (request, response, next) => {
    Shopper.deleteOne({ username: request.body.username })
           .then(function(shopper) {
               response.send(shopper);
           }).catch(next);
}

module.exports = { create, remove }

// shopper.js ends here
