
const addUser = require('../Services/tableUser')

// const addUserValidation = require('Validation/addUserValidation')

function addUserController(userData) {
    // if (addUserValidation(userData)) {
        addUser(userData)
    // } else {
    //     do something
    // }
}

module.exports = addUserController
