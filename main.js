const express = require('express')
const path = require('path')

const environment = (process.env.ENV === 'dev') ? 'development' : 'production'
const environmentPath = (environment === 'development') ? 'src' : 'deploy'

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
    console.log(environment + ' server ready!', 'http://localhost:3000/')

    const {app, BrowserWindow} = require('electron')

    function createWindow () {
      let mainWindow = new BrowserWindow({
        fullscreen: false,
        height: 1920,
        show: false,
        webPreferences: {
          experimentalFeatures: true,
          nodeIntegration: false, // causing issues with JQuery
          //preload: '' // @TODO - Use to preload files when ready to write code,
          webSecurity: false
        },
        width: 1080
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

      mainWindow.loadURL(`http://localhost:3000`)
    }

    app.on('ready', () => {
      createWindow()
    })

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })
  }
})