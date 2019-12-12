const getRaceResultsByTrack = require('../Services/tableResult').getRaceResultsByTrack

function getTrackRankingsController(trackid, res) {
    getRaceResultsByTrack(trackid, res)
}

module.exports = getTrackRankingsController
