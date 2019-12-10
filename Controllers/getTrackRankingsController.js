const getRaceResults = require('../Services/tableResult').getRaceResults

// const getRaceValidation = require('../Validation/getRaceValidation')

function getTrackRankingsController(trackid, res) {

    // incorporate validation

    getRaceResults(trackid, function(raceResults) {
        res.send({"success": true, "data": raceResults})
    })
}

module.exports = getTrackRankingsController
