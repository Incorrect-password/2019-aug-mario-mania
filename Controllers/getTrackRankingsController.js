const getRaceResultsByTrack = require('../Services/tableResult').getRaceResultsByTrack
const getgetTrackRankingValidation = require('../Validation/getTrackRankingsValidation')

function getTrackRankingsController(trackid, res) {
    getgetTrackRankingValidation(trackid, res, function(validUserData) {
        if(validUserData) {
            getRaceResultsByTrack(trackid, function (raceResults) {
                res.send({"success": true, "data": raceResults})
            })
        }
    })
}

module.exports = getTrackRankingsController
