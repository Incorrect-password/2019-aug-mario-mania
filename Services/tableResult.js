let connection = require('./dbMarioMania')

function addResult(trackid, userid, position) {
    connection.query(
        'INSERT INTO `result` (`trackid`, `userid`, `position`) VALUES (?, ?, ?)',
        [trackid, userid, position],
        function (err) {
            if (err) throw err
            console.log("results added for user " + userid)
        });
}

function getRaceResultsByTrack(trackid, callback) {
    connection.query(
    'SELECT `userid`, `position` FROM `result` WHERE `trackid` = ? ORDER BY `userid`, `position`',
        [trackid],
        function (err, raceResults) {
            if (err) throw err
            calculateUserModePosition(raceResults)
            callback(raceResults)
        })
}

function calculateUserModePosition(raceResults) {

    let newObj = {}

    raceResults.forEach(function (raceResult) {
        newObj[raceResult.userid] = []
    })

    raceResults.forEach(function (raceResult) {
        newObj[raceResult.userid].push(raceResult.position)
    })

    let newRaceResults = []

    for (let key in newObj) {
        newRaceResults.push({"userid": key, "modePosition": newObj[key]})
    }

    console.log(newRaceResults)
}


module.exports.addResult = addResult
module.exports.getRaceResultsByTrack = getRaceResultsByTrack
