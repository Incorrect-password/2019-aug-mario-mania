
const addUser = require('../Services/tableUser')

const addUserValidation = require('../Validation/addUserValidation')

function addUserController(userData, res) {
    addUserValidation(userData)

    // if (addUserValidation(userData)) {
        addUser(userData, res)
    // } else {
    //     do something
    // }
}

module.exports = addUserController



