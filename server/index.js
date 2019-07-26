const express = require('express')
const path = require('path')

const environment = (process.env.ENV === 'dev') ? 'development' : 'production'
const environmentPath = (environment === 'development') ? 'src' : 'deploy'

// Create server app
const app = express()

// Only need to serve static files
app.use(express.static(path.join(__dirname, '../' + environmentPath)))

// Listen on port 3000
app.listen(3000, error => {
  if (error) {
    throw error
  } else {
    console.log(environment + ' server ready!', 'http://localhost:3000/')
  }
});