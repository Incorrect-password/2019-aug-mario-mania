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

function getResults(trackid){
    let results = connection.query(
    'SELECT `id`,`userid`,`position` FROM `result` WHERE `trackid` = (?)',
        [trackid],
        function (err, res) {
            if (err) {
                res.send('Unable to retrieve results')
            } else {
                return results
            }
        })
}

module.exports = addResult, getResults
