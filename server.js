// npm packages
var express = require('express')
var bodyparser = require('body-parser')
var fs = require('fs')
var path = require('path')


// new express app
var app = express()

// middleware
app.use(express.static(path.join(__dirname, 'public/views')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//Routes
require('./app/routing/htmlRoutes.js')(app)
require('./app/routing/apiRoutes.js')(app)

var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
