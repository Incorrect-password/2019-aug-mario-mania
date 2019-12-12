const getRaceResultsByTrack = require('../Services/tableResult').getRaceResultsByTrack
const getTrackRankingsValidation = require('../Validation/getTrackRankingsValidation').getTrackRankingsValidation

/**
 * validates track id then uses it to get the race results by track
 *
 * @param trackid
 * @param res
 */
function getTrackRankingsController(trackid, res) {
    getTrackRankingsValidation(trackid, res, function(validUserData) {
        if(validUserData) {
            getRaceResultsByTrack(trackid, res, function (raceResults) {
                if (raceResults.length !== 0) {
                    res.send({"success": true, "data": raceResults})
                }else {
                    res.send({"success": true, "data": ['There is no data for this track, get racing!!']})
                }
            })
        }else{
            res.send({"success": false, "data": 'Unable to validate request'})
        }
    })
}

module.exports = getTrackRankingsController
