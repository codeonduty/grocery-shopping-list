// error.js --- Error utitlies

const parseError = (error, request, response, next) => {
    response.status(422).send({
        error: error.errors
    });
}

module.exports = parseError;

// error.js ends here
