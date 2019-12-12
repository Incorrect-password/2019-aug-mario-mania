let connection = require('./dbMarioMania')

/**
 * gets the ids of all the tracks recorded in db
 *
 * @param callback
 * @param res
 */
function getTrackids(callback, res) {
    connection.query(
        'SELECT `id` FROM `track`',
        function (err, trackids) {
            if(err) {
                res.send({"success": false, data: ['Cannot connect to db']})
            }else {
                callback(err,trackids)
            }
        }
    )
}

module.exports = getTrackids
