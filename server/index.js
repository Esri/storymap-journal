const express = require('express')
const path = require('path')
const build = require('./build')

const environment = (process.env.ENV === 'dev') ? 'development' : 'production'
const environmentPath = (environment === 'development') ? 'src' : 'deploy'

const apiPath = path.join(__dirname, '../api')
const staticPath = path.join(__dirname, '../static')

// Get and set data
build()

// Create server app
const server = express()

// Only need to serve static files
// The Filesystem API
server.use('/api', express.static(apiPath))
// Static Files
server.use('/static', express.static(staticPath))
// The app
server.use(express.static(path.join(__dirname, '../' + environmentPath)))

// Listen on port 3000
server.listen(3000, error => {
  if (error) {
    throw error
  } else {
    console.log(environment + ' server ready!', 'http://localhost:3000/')
  }
})