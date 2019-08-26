const buildOptions = require('./static/templates/electron/build.js')
const fs = require('fs')
const { KIOSK_REGION, KIOSK_VERSION } = process.env

const humanName = (KIOSK_VERSION.toLowerCase() === 'cdi')
  ? 'Cultural Dive In' + ' ' + KIOSK_REGION
  : 'Love and Connections'

buildOptions.productName = humanName
buildOptions.appId = buildOptions.appId + `.${KIOSK_VERSION.toLowerCase()}`

const jsonString = JSON.stringify(buildOptions, null, 2)

fs.writeFileSync('./build.json', jsonString, 'utf8')

// Update package name
const rawdata = fs.readFileSync('package.json')
let application = JSON.parse(rawdata)
const baseName = application.name

if (KIOSK_VERSION.toLowerCase() === 'cdi') {
  application.name = baseName + '-' + KIOSK_VERSION.toLowerCase() + '-' + KIOSK_REGION.toLowerCase()
} else {
  application.name = baseName + '-' + KIOSK_VERSION.toLowerCase()
}

fs.writeFileSync('package.json', JSON.stringify(application, null, 2))