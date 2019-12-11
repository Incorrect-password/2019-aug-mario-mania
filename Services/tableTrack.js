let connection = require('./dbMarioMania')

/**
 * gets the ids of all the tracks recorded in db
 *
 * @param callback
 * @param res
 */
function getTrackids(callback, res) {
    connection.query(
        'SELECT `id` FROM `result`',
        function (err, trackids) {
            if(err) {
                res.send('Cannot connect to db')
            }else {
                callback(err,trackids)
            }
        }
    )
}

module.exports = getTrackids
