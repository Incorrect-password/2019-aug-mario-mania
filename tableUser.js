require('dbMarioMania')

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    connection.query('SELECT * FROM `user`', function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
})
