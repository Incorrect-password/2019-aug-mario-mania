let connection = require('./dbMarioMania')

/**
 * Adds the user submitted results to db
 *
 * @param trackid the id of the track
 * @param userid  id of the user who raced
 * @param position the position that user came
 */
function addResult(trackid, userid, position, raceid) {
    connection.query(
        'INSERT INTO `result` (`trackid`, `userid`, `position`,`raceid`) VALUES (?, ?, ?, ?)',
        [trackid, userid, position, raceid],
        function (err) {
            if (err) throw err
            console.log("results added for user " + userid)
        })
}

/**
 * gets results for a specified track
 *
 * @param trackid the id corresponding to the desired track
 * @param callback
 */
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

/**
 *  Calculates each user's mode position on each track, and returns an array
 *  ordered by each user's mode position. 
 * 
 * @param {*} raceResults 
 */

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
            user.modePosition = parseInt(sortable[0][0])
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
    let sortedByModeArray = []
            for (let key in newRaceResults){
                sortedByModeArray.push([newRaceResults[key].userid, newRaceResults[key].modePosition])
            }
            sortedByModeArray.sort(function(a, b) {
                return a[1] - b[1]
            })
    let usersByModeObject = []
    sortedByModeArray.forEach(user => {
        obj = {}
        obj.userid = parseInt(user[0])
        obj.modePosition = user[1]
        usersByModeObject.push(obj)
    })
    return usersByModeObject
}

function getRacesTakenPartIn(userid, res){
    connection.query(
        'SELECT `userid`,`trackid`,`position`,`raceid` FROM `result` WHERE `userid` = ? LEFT JOIN `race` ON `result`.`raceid` = `race`.`race` LEFT JOIN `track` ON `result`.`trackid` = `track`.`name` LEFT JOIN `user` ON `result`.userid = `user`.`name`',
        [userid],
        function (err, userResults) {
            if (err) {
                res.send('{"success": false, "data": "database connection failed"}')
            }else {
                callback(err, userResults)
            }
        })
}

module.exports.addResult = addResult
module.exports.getRaceResultsByTrack = getRaceResultsByTrack
module.exports.getRacesTakenPartIn = getRacesTakenPartIn

