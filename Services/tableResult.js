let connection = require('./dbMarioMania')

function addResult(trackid, userid, position) {
    connection.query(
        'INSERT INTO `result` (`trackid`, `userid`, `position`) VALUES (?, ?, ?)',
        [trackid, userid, position],
        function (err) {
            if (err) throw err
            console.log("results added for user " + userid)
        })
}

function getRaceResultsByTrack(trackid, callback) {
    connection.query(
    'SELECT `userid`, `position` FROM `result` WHERE `trackid` = ? ORDER BY `userid`, `position`',
        [trackid],
        function (err, raceResults) {
            if (err) throw err
            let userMode = calculateUserModePosition(raceResults)
            callback(userMode)
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
        newRaceResults.push({"userid": key, "allPosition": newObj[key]})
    }

    newRaceResults.forEach(user => {
        let mode = user.allPosition
        user.modeAggregator = {}
        user.modePosition = 0
        if (mode.length > 2){
            mode.forEach(number => {
                user.modeAggregator[number] = []
            })
            mode.forEach(number => {
                user.modeAggregator[number].push(number)
            })
            let longestArray = {}
            for (let key in user.modeAggregator){
                longestArray[key] = user.modeAggregator[key].length
            }
            let sortable = []
            for (let key in longestArray){
                sortable.push([key, longestArray[key]])
            }
            sortable.sort(function(a, b) {
                return a[1] - b[1]
            })
            sortable.reverse()
            user.modePosition = sortable[0][1]
        } else {
            user.modeAggregator = []
            user.modePosition = 0
            mode.forEach(number => {
                user.modeAggregator.push(number)
            })
            user.modeAggregator.sort
            user.modePosition = user.modeAggregator[0]
        }
    })
    newRaceResults.forEach(user => {
        delete user.allPosition
        delete user.modeAggregator
    })
    return newRaceResults
}

module.exports.addResult = addResult
module.exports.getRaceResultsByTrack = getRaceResultsByTrack
