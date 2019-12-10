const addResult = require('../Services/tableResult')

/**
 * Controllers the validation of the userData so and if it is valid then adds results to the db
 *
 * @param userData containing results from race
 */
function addRaceResultController(userData) {
    let trackid = userData.track
    userData.result.forEach(function(value) {
        addResult(trackid, value.user, value.position)
    })
}

module.exports = addRaceResultController
