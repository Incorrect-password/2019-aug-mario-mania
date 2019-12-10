var connection = require('./dbMarioMania')

function getFavRacers(callback) {
    connection.query(
        'SELECT `id` FROM `favRacer`',
        function (err, favRacers) {
            if (err) throw err
            console.log("favRacers retrieved")
            callback(err, favRacers)
        })
}

module.exports = getFavRacers
