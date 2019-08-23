// Node API
const fs = require('fs')
const path = require('path')

// Local API
const build = require('./server/build')
const events = require('./server/events')

// Installed packages
const express = require('express')

// Import environment specific configuration
const localConfig = require('dotenv').config({
  path: path.resolve(__dirname, '.env')
}).parsed

process.env = { ...localConfig, ...process.env,}

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

// Create server app
const server = express()

// Only need to serve static files
// The Filesystem API
server.use('/api', express.static(path.join(__dirname, './api')))
// Static Files
server.use('/static', express.static(path.join(__dirname, './static')))
// The app
server.use(express.static(path.join(__dirname, './' + environmentPath)))

// Start the Express Server
server.listen(3000, error => {
  if (error) {
    throw error
  } else {
    if (dev === true) {
      console.log(environmentLongName + ' server ready!', (process.env.BUILD_TARGET === 'browser') ? 'http://localhost:3000/' : 'electron app')
    }

    if (process.env.BUILD_TARGET === 'electron') {
      const { app, BrowserWindow, ipcMain } = require('electron')

      const logger = require('electron-log')

      // Loading window will appear while files are downloading
      function createLoadingWindow () {
        return new BrowserWindow({
          fullscreen: process.env.ELECTRON_FULLSCREEN === '1',
          height: parseInt(process.env.ELECTRON_HEIGHT, 10),
          show: false,
          webPreferences: {
            experimentalFeatures: true,
            nodeIntegration: true, // Necessary for progress/loading window
            //preload: '' // @TODO - Use to preload files when ready to write code,
            webSecurity: false
          },
          width: parseInt(process.env.ELECTRON_WIDTH, 10)
        })
      }

      // The Main Window loads 
      function createMainWindow () {
        let mainWindow = new BrowserWindow({
          fullscreen: process.env.ELECTRON_FULLSCREEN === '1',
          height: parseInt(process.env.ELECTRON_HEIGHT, 10),
          show: false,
          webPreferences: {
            experimentalFeatures: true,
            nodeIntegration: false, // causing issues with JQuery
            //preload: '' // @TODO - Use to preload files when ready to write code,
            webSecurity: false
          },
          width: parseInt(process.env.ELECTRON_WIDTH, 10)
        })

        mainWindow.on('closed', function () {
          mainWindow = null
        })

        let { webContents } = mainWindow

        webContents.on('crashed', () => {
          // Log error
          logger.error('App crashed! Creating new window.')
          // Destroy window and start over
          mainWindow.destroy()

          let mainWindow = createMainWindow()

          mainWindow.on('ready-to-show', () => {
            mainWindow.show()
          })
        })

        webContents.on('did-finish-load', () => {
          webContents.setZoomFactor(1)
          webContents.setVisualZoomLevelLimits(1, 1)
          webContents.setLayoutZoomLevelLimits(0, 0)
        })

        mainWindow.loadURL(`http://localhost:3000?version=${process.env.KIOSK_VERSION}`)

        return mainWindow
      }

      // Start by showing the loading page until the building data is done.
      app.on('ready', () => {
        logger.info('App started.')

        const loading = createLoadingWindow()

        loading.once('show', () => {

          // Show the main window when event 'finish-build' is fired
          const eventFinishBuildCallback = () => {
            // Remove listener to prevent any chance of duplicate windows
            events.removeListener('finish-build', eventFinishBuildCallback)

            logger.info('Data has finished downloading from Drupal.')

            let mainWindow = createMainWindow()

            mainWindow.on('ready-to-show', () => {
              loading.hide()
              loading.close()
              mainWindow.show()
            })
          }

          // Send files remaining to loading window for progress bar
          events.on('remove-file', () => {
            loading.webContents.send('progress', events.file)
          })

          events.on('finish-build', eventFinishBuildCallback)

          // Build data from the CMS
          logger.info('Start building data from Drupal.')
          build(events)
        })

        loading.loadFile('./loading.html')
        loading.show()
      })

      app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') app.quit()
      })

      app.on('activate', function () {
        if (!loadingWindow) {
          let loadingWindow = createLoadingWindow()
        }

        if (!mainWindow) {
          let mainWindow = createMainWindow()

          mainWindow.on('ready-to-show', () => {
            mainWindow.show()
          })
        }
      })

      app.on('quit', () => {logger.info('App closed.')})
      app.on('uncaughException', error => logger.error(error))
      app.on('unhandledRejection', error => logger.error(error))

      // Log to a file that holds a log of useful information
      ipcMain.on('log-message-to-file', (event, arg) => logger[arg.type](arg.message))
    } else {
      build(events)
    }
  }
})