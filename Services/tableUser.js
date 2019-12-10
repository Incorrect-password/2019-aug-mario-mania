let connection = require('./dbMarioMania')

/**
 * adds user into db
 * @param userData
 * @param res
 */
function addUser(userData, res) {
    connection.query(
        'INSERT INTO `user` (`name`, `cohort`, `favRacer`) VALUES (?, ?, ?)',
        [userData.name, userData.cohort, userData.favRacer],
        function (err, result) {
            if (err) {
                res.send('username taken')
            } else {
                res.send('user created!')
            }
        })
}

module.exports = addUser
