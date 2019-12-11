const getRaceResultsByTrack = require('../Services/tableResult').getRaceResultsByTrack

// const getRaceValidation = require('../Validation/getRaceValidation')

function getTrackRankingsController(trackid, res) {

    // incorporate validation

    getRaceResultsByTrack(trackid, function(raceResults) {
        res.send({"success": true, "data": raceResults})
    })
}

module.exports = getTrackRankingsController
