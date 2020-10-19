const express = require('express')
const app = express()
const hostname = 'localhost'
const port = 8095

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})
