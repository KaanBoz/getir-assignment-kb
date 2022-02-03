const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')
const getirAPI = require("./apis/getir")
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Hello World from getir-assignment-kb!'))
app.post('/getir', getirAPI)


module.exports = app;