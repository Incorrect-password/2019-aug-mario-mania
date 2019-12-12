let connection = require('./dbMarioMania')

/**
 * creates a new race entry named after the timestamp
 *
 * @param res
 */
function addRace(res) {
    connection.query(
        'INSERT INTO `race` (`race`) VALUES (?)',
        [Date.now()],
        function (err) {
            if (err) {
                res.send('{"success": true, "data": "database connection failed"}')
            }
        })
}

/**
 * adds
 *
 * @param callback
 * @param res
 */
function getRaceid(callback,res){
    connection.query(
        'SELECT `id` FROM `race`',
        function (err, raceid) {
            if (err) {
                res.send('{"success": false, "data": "database connection failed"}')
            }else {
                callback(err, raceid)
            }
        })
}

module.exports.addRace = addRace
module.exports.getRaceid = getRaceid
