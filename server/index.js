const express = require('express')
const path = require('path')

const environment = (process.env.ENV === 'dev') ? 'development' : 'production'
const environmentPath = (environment === 'development') ? 'src' : 'deploy'

const apiPath = path.join(__dirname, '../api')
const staticPath = path.join(__dirname, '../static')

const videoTemplate = {
  src: null,
  type: null
}

// Get Data
const jsona = require('jsona')
const { Jsona } = jsona
const request  = require('request')
const fs = require('fs')
const _ = require('lodash')

const backendUrl = 'https://backend-dev.leaf.ikshare.com'

request(
  backendUrl + '/jsonapi/node/kiosk_llc?include=field_logo,field_logo.image,field_state_attract_bg_img,field_state_nav_bg_img,field_state_explore_bg_img,field_state_attract_bg_video,field_state_attract_bg_video.field_media_video_file',
  (error, response, body) => {
    const formatter = new Jsona()
    const cmsContent = formatter.deserialize(body)

    // Save file for future reference
    fs.writeFileSync(staticPath + '/download/layout.json', JSON.stringify(cmsContent), 'utf8')

    // Get the default layout file
    const layoutDefault = JSON.parse(fs.readFileSync(staticPath + '/templates/layout.json', 'utf8'))

    let defaultAttractBgImg = staticPath + '/image/attract-background.json'

    // Write layout information
    const { attract, explore, nav, storymap } = layoutDefault.state

    // Attract section
    attract.section.info.h1 = cmsContent[0].title

    attract.section.info.logo = backendUrl + cmsContent[0].field_logo.image.uri.url

    if (filepath = _.get(cmsContent[0], 'field_state_attract_bg_img.uri.url', defaultAttractBgImg)) {
      attract.background.img = backendUrl + filepath
      defaultAttractBgImg = filepath
    }

    if (filepath = _.get(cmsContent[0], 'field_state_attract_bg_video.field_media_video_file.uri.url', false))
      attract.background.video = {
      src: backendUrl + cmsContent[0].field_state_attract_bg_video.field_media_video_file.uri.url,
      type: cmsContent[0].field_state_attract_bg_video.field_media_video_file.filemime
    }

    // Nav section
    nav.section.info.h1 = (_.isEmpty(_.get(cmsContent[0], 'field_state_nav_title', cmsContent[0].title)) === true) ? cmsContent[0].title : _.get(cmsContent[0], 'field_state_nav_title', cmsContent[0].title)

    nav.section.info.logo = backendUrl + cmsContent[0].field_logo.image.uri.url

    // Use attract screen background as template for others
    if (filepath = _.get(cmsContent[0], 'field_state_nav_bg_img.uri.url', defaultAttractBgImg))
      nav.background.img = backendUrl + filepath

    // Explore section
    explore.section.info.h1 = (_.isEmpty(_.get(cmsContent[0], 'field_state_explore_title', cmsContent[0].title)) === true) ? cmsContent[0].title : _.get(cmsContent[0], 'field_state_explore_title', cmsContent[0].title)

    explore.section.info.logo = backendUrl + cmsContent[0].field_logo.image.uri.url

    if (filepath = _.get(cmsContent[0], 'field_state_explore_bg_img.uri.url', defaultAttractBgImg))
      explore.background.img = backendUrl + filepath

    explore.section.interaction.map = _.get(cmsContent[0], 'field_explore_map', '')

    // Story map section
    storymap.section.info.h1 = (_.isEmpty(_.get(cmsContent[0], 'field_state_storymap_title', cmsContent[0].title)) === true) ? cmsContent[0].title : _.get(cmsContent[0], 'field_state_storymap_title', cmsContent[0].title)

    storymap.section.info.logo = backendUrl + cmsContent[0].field_logo.image.uri.url

    // Write changes back to the layout.json file
    fs.writeFileSync(apiPath + '/layout.json', JSON.stringify(layoutDefault), 'utf8')

    // Story maps
    fs.createReadStream(staticPath + '/templates/llc/storymaps.json').pipe(fs.createWriteStream(apiPath + '/storymaps.json'))
  })

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