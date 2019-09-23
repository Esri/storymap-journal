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
      const os = require('os')
      const Sentry = require('@sentry/electron')
      const user = os.userInfo().username

      let loadingWindow
      let mainWindow

      // Sentry.
      if (process.env.SENTRY_DSN) {
        Sentry.init({ dsn: process.env.SENTRY_DSN })
      }

      function notifySentry (message, level, exception = false) {
        if (dev !== true && process.env.SENTRY_DSN) {
          Sentry.configureScope((scope) => {
            scope.setUser({ 'username': user })
            scope.setLevel(level)
          })
      
          if (exception === true) {
            Sentry.captureMessage(message)
          } else {
            Sentry.captureException(message)
          }
        }
      }

      // Loading window will appear while files are downloading
      function createLoadingWindow () {
        return new BrowserWindow({
          fullscreen: process.env.ELECTRON_FULLSCREEN === '1',
          height: parseInt(process.env.ELECTRON_HEIGHT, 10),
          show: false,
          webPreferences: {
            experimentalFeatures: true,
            nodeIntegration: true, // Necessary for progress/loading window
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
            preload: path.join(__dirname, '/preload.js'), // @see https://github.com/electron/electron/issues/9920
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
          const message = 'App crashed! Creating new window.'
          notifySentry(message, 'error')
          logger.error(message)

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

        mainWindow.removeMenu()

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
            let downloaded = events.total - events.file
            let percentage = parseInt(parseFloat(downloaded/events.total).toFixed(2) * 100)
            loading.webContents.send('progress', { file: events.file, total: events.total, downloaded: downloaded, percentage: percentage })
          })

          events.on('finish-build', eventFinishBuildCallback)

          // Build data from the CMS
          logger.info('Start building data from Drupal.')
          build(events)
        })

        loading.removeMenu()

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

      app.on('quit', () => {
        notifySentry('App closed.', 'info')
        logger.info('App closed.')
      })
      
      app.on('uncaughException', error => {
        notifySentry(error, 'error', true)
        logger.error(error)
      })
      
      app.on('unhandledRejection', error => {
        notifySentry(error, 'error', true)
        logger.error(error)
      })

      // Log to a file that holds a log of useful information
      ipcMain.on('log-message-to-file', (event, arg) => {
        // Only log warnings, errors and fatals to sentry.
        const sentry = ['warning', 'error', 'fatal']
        if (process.env.REACT_APP_ENVIRONMENT === 'production' && sentry.indexOf(arg.type) !== -1) {
          if (arg.type === 'warn') {
            arg.type = 'warning'
          }
          notifySentry(arg.message, arg.type)
        }
      
        if (arg.type === 'warning') {
          arg.type = 'warn'
        }
      
        logger[arg.type](arg.message)
      })
    } else {
      build(events)
    }
  }
})