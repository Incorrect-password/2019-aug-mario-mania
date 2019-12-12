const addResult = require('../Services/tableResult').addResult
const addRace = require('../Services/tableRace').addRace
const addRaceIdToUserData = require('../Services/tableRace').addRaceIdToUserData
const addRaceResultValidation = require('../Validation/addRaceResultValidation')

/**
 * Controllers the validation of the userData so and if it is valid then adds results to the db
 *
 * @param userData containing results from race
 */
function addRaceResultController(userData,res) {
    addRace(res)
    addRaceIdToUserData(function (err,raceid){
        let newestRaceid = raceid[raceid.length-1]

        addRaceResultValidation(userData, newestRaceid, function(validUserData) {
            if(validUserData) {
                let trackid = userData.track
                userData.result.forEach(function (value) {
                    addResult(trackid, value.user, value.position, newestRaceid.id, res)
                })
            }else{
                console.log("Failed")
                res.send('Invalid request')
            }
        })
    })
}

module.exports = addRaceResultController
