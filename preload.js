// @see https://github.com/electron/electron/issues/9920
window.ipcRenderer = require('electron').ipcRenderer
window.electronRemote = require('electron').remote
window.sentry = require('@sentry/browser')