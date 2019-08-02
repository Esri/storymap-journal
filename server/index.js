const express = require('express')
const path = require('path')
const build = require('./build')
const fs = require('fs')

const environment = (process.env.ENV === 'dev') ? 'development' : 'production'
const environmentPath = (environment === 'development') ? 'src' : 'deploy'

const apiPath = path.join(__dirname, '../api')

if (fs.existsSync(apiPath) === false) {
  fs.mkdirSync(apiPath, { recursive: true })
}

const staticPath = path.join(__dirname, '../static')

if (fs.existsSync(staticPath) === false) {
  fs.mkdirSync(staticPath, { recursive: true })
}

const downloadPath = staticPath + '/download'

if (fs.existsSync(downloadPath) === false) {
  fs.mkdirSync(downloadPath, { recursive: true })
}

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