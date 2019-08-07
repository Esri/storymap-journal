const buildOptions = require('./static/templates/electron/build.js')
const fs = require('fs')
const { KIOSK_REGION, KIOSK_VERSION } = process.env

const humanName = (KIOSK_VERSION.toLowerCase() === 'cdi')
  ? 'Cultural Dive In' + ' ' + KIOSK_REGION
  : 'Love and Connections'

buildOptions.productName = humanName
buildOptions.appId = buildOptions.appId + `.${KIOSK_VERSION.toLowerCase()}`

const jsonString = JSON.stringify(buildOptions)

fs.writeFileSync('./build.json', jsonString, 'utf8')