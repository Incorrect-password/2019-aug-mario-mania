var connection = require('./dbMarioMania')

async function getCohort() {
    let cohorts = await connection.query(
        'SELECT `id` FROM `cohort`',
        function (err, result) {
            if (err) throw err
            console.log("cohorts retrieved")
            callback(err, result)
        })
    return cohorts
}

module.exports = getCohort
