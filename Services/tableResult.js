let connection = require('./dbMarioMania')

function addResult(trackid, userid, position) {
    connection.query(
        'INSERT INTO `result` (`trackid`, `userid`, `position`) VALUES (?, ?, ?)',
        [trackid, userid, position],
        function (err, result) {
            if (err) throw err
            console.log("results added for user " + userid)
        });
}

module.exports = addResult