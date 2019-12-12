const getRaceResultsByTrack = require('../Services/tableResult').getRaceResultsByTrack


/**
 * retrieves race results and sends them to user
 *
 * @param trackid
 * @param res
 */
function getTrackRankingsController(trackid, res) {

    getRaceResultsByTrack(trackid, function(raceResults) {
        res.send({"success": true, "data": raceResults})
    })
}

module.exports = getTrackRankingsController
