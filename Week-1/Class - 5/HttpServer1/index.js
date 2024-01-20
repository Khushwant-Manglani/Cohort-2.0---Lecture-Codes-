const express = require('express')
const app = express()
const port = 3000

// create a todo app that lets users store 
// try to create http server from scratch in c/c++
// 
app.get('/', function(req, res) {
  res.send('<b> Hi there </b>')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})