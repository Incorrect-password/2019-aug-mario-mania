const addResult = require('../Services/tableResult')

const addRaceResultValidation = require('../Validation/addRaceResultValidation')

/**
 * Controllers the validation of the userData so and if it is valid then adds results to the db
 *
 * @param userData containing results from race
 */
function addRaceResultController(userData) {
    console.log('cont')
    addRaceResultValidation(userData, function(validUserData) {
        console.log(validUserData)
        if(validUserData) {
            let trackid = userData.track
            userData.result.forEach(function (value) {
                addResult(trackid, value.user, value.position)
            })
        }else{
            console.log('failed')
        }
    }
)}

module.exports = addRaceResultController
