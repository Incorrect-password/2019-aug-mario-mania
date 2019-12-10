const getRaceResults = require('../Services/tableResult')

function getTrackRankingsController(trackid, res) {
    //get results data by track
    //calculate mode for each user
    // display in order
    // res.send('hello')
    console.log(getRaceResults(trackid))
}

module.exports = getTrackRankingsController
