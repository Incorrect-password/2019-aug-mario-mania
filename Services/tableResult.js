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

function getRaceResults(trackid, callback){
    connection.query(
    'SELECT `userid`, `position` FROM `result` WHERE `trackid` = ? ORDER BY `position`',
        [trackid],
        function (err, raceResults) {
            if (err) throw err
            callback(raceResults)
        })
}

module.exports.addResult = addResult
module.exports.getRaceResults = getRaceResults
