const getRaceResultsByTrack = require('../Services/tableResult').getRaceResultsByTrack
const addRaceResultValidation = require('../Validation/addRaceResultValidation')

function getTrackRankingsController(trackid, res) {
    getRaceResultsByTrack(trackid, res)
}

module.exports = getTrackRankingsController
