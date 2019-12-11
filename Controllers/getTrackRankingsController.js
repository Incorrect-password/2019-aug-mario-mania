const getRaceResultsByTrack = require('../Services/tableResult').getRaceResultsByTrack

function getTrackRankingsController(trackid, res) {

    getRaceResultsByTrack(trackid, function(raceResults) {
        res.send({"success": true, "data": raceResults})
    })
}

module.exports = getTrackRankingsController
