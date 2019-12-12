const express = require('express')
const routes = require('./Config/routes')
const app = express()
const port = 3000;
const cors = require("cors")

app.use(cors())


routes(app)

app.listen(port, () => {
    console.log('server running')
})
