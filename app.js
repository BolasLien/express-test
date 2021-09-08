const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.urlencoded({extended: true}))

// Server side render, send file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// API, send object
// app.get('/user', function (req, res) {
//   const user = {
//     name: 'Bolas',
//     age: 18,
//   }
//   res.send(user)
// })

// routing in express
// app.get('/bolas', function (req, res) {
//   res.send("You are on the Bolas'es page.")
// })

// routing for all
// app.get('*', function (req, res) {
//   res.send("Cannot find what you want.")
// })

// routing for pattern
// app.get('/product/:someProduct', (req, res) => {
//   let { someProduct } = req.params
//   res.send("This is " + someProduct)
// })

// routing for query
app.post('/formHandling', (req, res) => {
  let {fullname, age} = req.body
  res.send("Your name is " + fullname + " and your age is " + age + " years old.")
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
