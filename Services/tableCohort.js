var connection = require('./dbMarioMania')

function getCohort(callback) {
    connection.query(
        'SELECT `id` FROM `cohort`',
        function (err, cohorts) {
            if (err) throw err
            console.log("cohorts retrieved")
            callback(err, cohorts)
        })
}

module.exports = getCohort
