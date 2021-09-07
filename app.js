const express = require('express')
const app = express()

// Server side render, send file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

// API, send object
app.get('/user', function (req, res) {
  const user = {
    name: 'Bolas',
    age: 18,
  }
  res.send(user)
})

// routing in express
app.get('/bolas', function (req, res) {
  res.send("You are on the Bolas'es page.")
})

// routing for all
app.get('*', function (req, res) {
  res.send("Cannot find what you want.")
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
