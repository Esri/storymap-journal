const buildOptions = require('./static/templates/electron/build.js')
const fs = require('fs')
const { KIOSK_REGION, KIOSK_VERSION } = process.env

const humanName = (KIOSK_VERSION.toLowerCase() === 'cdi')
  ? 'Cultural_Dive_In' + '-' + KIOSK_REGION
  : 'Love_and_Connections'

buildOptions.productName = humanName

const jsonString = JSON.stringify(buildOptions)

fs.writeFileSync('./build.json', jsonString, 'utf8')