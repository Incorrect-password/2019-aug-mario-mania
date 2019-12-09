require('dbMarioMania')

function addUser(userData) {
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        connection.query(
            'INSERT INTO `user` (`name`, `cohort`, `favRacer`) VALUES(?, ?, ?)',
            [userData.name, userData.cohort, userData.favRacer],
            function (err, result) {
                if (err) throw err;
                console.log("Result: " + result);
            });
    })
}

