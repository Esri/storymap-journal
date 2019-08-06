const express = require('express')
const path = require('path')
const build = require('./server/build')
const fs = require('fs')

// Import environment specific configuration
const localConfig = require('dotenv').config({
  path: path.resolve(__dirname, '.env')
}).parsed

process.env = { ...process.env, ...localConfig }

const dev = (process.env.ENV === 'dev')
const environmentLongName = (dev === true) ? 'Development' : 'Production'
const environmentPath = (dev === true) ? 'src' : 'deploy'

// Get and set data
const versionLongName = (process.env.KIOSK_VERSION === 'llc') ? 'LEAF Love & Connections' : 'Cultural Dive In'

if (dev === true) {
  console.log('Building', versionLongName)
}

// Set up directories
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

// Build data from the CMS
build()

// Create server app
const server = express()

// Only need to serve static files
// The Filesystem API
server.use('/api', express.static(path.join(__dirname, './api')))
// Static Files
server.use('/static', express.static(path.join(__dirname, './static')))
// The app
server.use(express.static(path.join(__dirname, './' + environmentPath)))

// Listen on port 3000
server.listen(3000, error => {
  if (error) {
    throw error
  } else {
    if (dev === true) {
      console.log(environmentLongName + ' server ready!', (process.env.BUILD_TARGET === 'browser') ? 'http://localhost:3000/' : 'electron app')
    }

    if (process.env.BUILD_TARGET === 'electron') {
      const {app, BrowserWindow} = require('electron')

      function createWindow () {
        let mainWindow = new BrowserWindow({
          fullscreen: process.env.ELECTRON_FULLSCREEN === '1',
          height: parseInt(process.env.ELECTRON_HEIGHT),
          show: false,
          webPreferences: {
            experimentalFeatures: true,
            nodeIntegration: false, // causing issues with JQuery
            //preload: '' // @TODO - Use to preload files when ready to write code,
            webSecurity: false
          },
          width: parseInt(process.env.ELECTRON_WIDTH)
        })

        mainWindow.on('ready-to-show', () => {
          mainWindow.show()
        })

        mainWindow.on('closed', function () {
          mainWindow = null
        })

        let { webContents } = mainWindow

        webContents.on('crashed', () => {
          mainWindow.destroy()
          createWindow()
        })

        webContents.on('did-finish-load', () => {
          webContents.setZoomFactor(1)
          webContents.setVisualZoomLevelLimits(1, 1)
          webContents.setLayoutZoomLevelLimits(0, 0)
        })

        mainWindow.loadURL(`http://localhost:3000?version=${process.env.KIOSK_VERSION}`)
      }

      app.on('ready', () => {
        createWindow()
      })

      app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') app.quit()
      })

      app.on('activate', function () {
        if (mainWindow === null) {
          createWindow()
        }
      })
    }
  }
})