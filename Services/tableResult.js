let connection = require('./dbMarioMania')

/**
 * Adds the user submitted results to db
 *
 * @param trackid the id of the track
 * @param userid  id of the user who raced
 * @param position the position that user came
 */
function addResult(trackid, userid, position) {
    connection.query(
        'INSERT INTO `result` (`trackid`, `userid`, `position`) VALUES (?, ?, ?)',
        [trackid, userid, position],
        function (err, result) {
            if (err) throw err
            console.log("results added for user " + userid)
        });
}

function getTrackids(callback, res) {
    connection.query(
        'SELECT `id` FROM `result`',
        function (err, trackids) {
            if(err) {
                res.send('Cannot validate Track')
            }else {
                callback(err,trackids)
            }
        }
    )
}

module.exports = addResult, getTrackids


