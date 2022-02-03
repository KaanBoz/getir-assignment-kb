const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from getir-assignment-kb!')
})

app.listen(port, () => {
  console.log(`getir-assingment-kb listenin on port: ${port}`)
})