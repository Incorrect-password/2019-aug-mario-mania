var connection = require('./dbMarioMania')

/**
 *gets cohort ids so that we can compare them to the user inputted ones
 *
 * @param callback
 * @returns {Promise<void>}
 */
async function getCohort(callback) {
    connection.query(
        'SELECT `id` FROM `cohort`',
        function (err, cohorts) {
            if (err) throw err
            callback(err, cohorts)
        })
}

module.exports = getCohort
