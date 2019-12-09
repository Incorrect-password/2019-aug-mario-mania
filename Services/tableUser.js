var connection = require('./dbMarioMania')

function addUser(userData) {
    connection.query(
        'INSERT INTO `user` (`name`, `cohort`, `favRacer`) VALUES (?, ?, ?)',
        [userData.name, userData.cohort, userData.favRacer],
        function (err, result) {
            if (err) throw err;
            console.log("user added");
        });
}

module.exports = addUser
