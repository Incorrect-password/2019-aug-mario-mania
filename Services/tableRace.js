let connection = require('./dbMarioMania')


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

function addRaceIdToUserData(callback,res){
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
module.exports.addRaceIdToUserData = addRaceIdToUserData
