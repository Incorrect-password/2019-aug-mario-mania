const addUser = require('../Services/tableUser')

const addUserValidation = require('../Validation/addUserValidation')

/**
 * Controllers the validation of the userData so and if it is valid then adds it to the db
 *
 * @param userData
 * @param res
 */
function addUserController(userData, res) {

    addUserValidation(userData, function(validUserData) {
        if (validUserData) {
            addUser(userData, res)
        } else {
            res.send({"success": false, "data": ['failed to add user']})
        }
    })
}

module.exports = addUserController
