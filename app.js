// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World from getir-assignment-kb!')
// })

// app.listen(port, () => {
//   console.log(`getir-assingment-kb listenin on port: ${port}`)
// })


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.send('Hello World from getir-assignment-kb!'))
  .listen(PORT, () => console.log(`getir-assingment-kb listenin on port: ${ PORT }`))