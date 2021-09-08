const express = require('express')
const app = express()
const path = require('path')

// serving a static file
// 指定 public 為靜態檔案位置，就可以載入 public 中的檔案 (例如 css file)
// middleware
app.use(express.static("public"))

// Server side render, send file
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// routing in express
app.get('/bolas', function (req, res) {
  res.send("You are on the Bolas'es page.")
})


app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
