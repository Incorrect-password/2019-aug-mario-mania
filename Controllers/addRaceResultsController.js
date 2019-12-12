const addResult = require('../Services/tableResult').addResult

const addRaceResultValidation = require('../Validation/addRaceResultValidation')

/**
 * Controllers the validation of the userData so and if it is valid then adds results to the db
 *
 * @param userData containing results from race
 */
function addRaceResultController(userData,res) {
    addRaceResultValidation(userData, res, function(validUserData) {
        if(validUserData) {
            let trackid = userData.track
            userData.result.forEach(function (value) {
                addResult(trackid, value.user, value.position, res)
            })
            res.send({"success": true, "data": ['result added!']})
        } else {
            res.send({"success": false, data: ['Invalid request']})
        }
    }
)}

module.exports = addRaceResultController
