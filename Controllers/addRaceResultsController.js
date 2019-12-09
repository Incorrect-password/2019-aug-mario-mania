const addResult = require('../Services/tableResult')

function addRaceRusultController(userData) {
    let trackid = userData.track
    userData.result.forEach(function(value) {
        addResult(trackid, value.user, value.positon)
    })
}

module.exports = addRaceRusultController