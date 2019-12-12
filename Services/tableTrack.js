let connection = require('./dbMarioMania')

/**
 * gets the ids of all the tracks recorded in db
 *
 * @param callback
 * @param res
 */
function getTrack(req, res) {
    connection.query(
        'SELECT `id`, `name` FROM `track`',
        function (err, trackids) {
            if(err) {
                res.send({"success": false, data: ['Cannot connect to db']})
            }else {
                res.json({data: trackids})
            }
        }
    )
}

module.exports = getTrack
