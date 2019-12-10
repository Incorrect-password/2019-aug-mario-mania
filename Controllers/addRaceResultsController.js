const addResult = require('../Services/tableResult')

function addRaceResultController(userData) {
    let trackid = userData.track
    userData.result.forEach(function(value) {
        addResult(trackid, value.user, value.position)
    })
}

module.exports = addRaceResultController
