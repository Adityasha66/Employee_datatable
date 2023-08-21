const express = require('express')
const { mongoose } = require('./db')
var firstRoute = require('./Routes/firstRoute')
const bodyParser = require('body-parser')
var UserController = require('./Routes/UserRoute')
const cors = require('cors')
var app = express()

app.use(bodyParser.json())


app.use(cors({ origin: '*' }))



const PORT = 3200

app.use('', UserController)

app.listen(PORT, () => {
    console.log('connected port' + PORT);
})