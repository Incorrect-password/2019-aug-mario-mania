
const addUser = require('../Services/tableUser')

const addUserValidation = require('../Validation/addUserValidation')

function addUserController(userData, res) {

    addUserValidation(userData, function(validUserData) {
        if (validUserData) {
            addUser(userData, res)
        } else {
            res.send('failed to add user')
        }
    })

}

module.exports = addUserController



