const express = require('express')
const app = express()
const bodyParser = require("body-parser")

server.use(bodyParser.urlencoded({ extended: true }))

app.get('/hello', function (req, res) {
  res.send('Hello World!')
})

app.post('/chat', function (req, res) {
  var msg = req.body
  if(msg === 'ville'){
  res.send('Nous sommes a Paris')
  }
  else if(msg === 'météo'){
    res.send('Il fait beau')
  }
  })

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})