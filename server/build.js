const path = require('path')
const request  = require('request')
const fs = require('fs')
const _ = require('lodash')
const url = require('url')

// Set up Jsona
const jsona = require('jsona')
const { Jsona } = jsona
const formatter = new Jsona()

// Set up some constants
const apiPath = path.join(__dirname, '../api')
const staticPath = path.join(__dirname, '../static')
const backendUrl = 'https://backend-dev.leaf.ikshare.com'

// Utils
const getHeader = (content = {}, field = '') => (_.isEmpty(_.get(content, field, content.title)) === true) ? content.title : _.get(content, field, content.title)
// Return a file path. If file can be downloaded, do so. If not
const setFile = (fileuri) => {
  const absFilepath = staticPath + '/download' + url.parse(fileuri).pathname
  const relFilepath = '/static/download' + url.parse(fileuri).pathname

  // No need to download the same file twice, if already exists
  if (fs.existsSync(absFilepath) === true) {
    return relFilepath
  }

  if (fs.existsSync(path.dirname(absFilepath)) === false) {
    fs.mkdirSync(path.dirname(absFilepath), { recursive: true })
  }

  request(fileuri).pipe(fs.createWriteStream(absFilepath))
  return relFilepath
}

// Main logic
const setData = (err, res, body) => {
  const cmsContent = formatter.deserialize(body)

  // Save file for future reference
  fs.writeFileSync(staticPath + '/download/cms.json', JSON.stringify(cmsContent), 'utf8')

  // Get the default layout file
  const layoutDefault = JSON.parse(fs.readFileSync(staticPath + '/templates/layout.json', 'utf8'))

  let defaultAttractBgImg = staticPath + '/image/attract-background.json'

  // Write layout information
  const { attract, explore, nav, storymap } = layoutDefault.state

  // Attract section
  attract.section.info.h1 = getHeader(cmsContent[0], 'title')

  attract.section.info.logo = setFile(backendUrl + cmsContent[0].field_logo.image.uri.url)

  if (filepath = _.get(cmsContent[0], 'field_state_attract_bg_img.uri.url', defaultAttractBgImg)) {
    attract.background.img = setFile(backendUrl + filepath)
    defaultAttractBgImg = filepath
  }

  if (filepath = _.get(cmsContent[0], 'field_state_attract_bg_video.field_media_video_file.uri.url', false))
    attract.background.video = {
    src: setFile(backendUrl + cmsContent[0].field_state_attract_bg_video.field_media_video_file.uri.url),
    type: _.get(cmsContent[0], 'field_state_attract_bg_video.field_media_video_file.filemime', '')
  }

  // Nav section
  nav.section.info.h1 = getHeader(cmsContent[0], 'field_state_nav_title')

  nav.section.info.logo = setFile(backendUrl + cmsContent[0].field_logo.image.uri.url)

  // Use attract screen background as template for others
  if (filepath = _.get(cmsContent[0], 'field_state_nav_bg_img.uri.url', defaultAttractBgImg))
    nav.background.img = setFile(backendUrl + filepath)

  // Explore section
  explore.section.info.h1 = getHeader(cmsContent[0], 'field_state_explore_title')

  explore.section.info.logo = setFile(backendUrl + cmsContent[0].field_logo.image.uri.url)

  if (filepath = _.get(cmsContent[0], 'field_state_explore_bg_img.uri.url', defaultAttractBgImg))
    explore.background.img = setFile(backendUrl + filepath)

  explore.section.interaction.map = _.get(cmsContent[0], 'field_explore_map', '')

  // Story map section
  storymap.section.info.h1 = getHeader(cmsContent[0], 'field_state_storymap_title')

  storymap.section.info.logo = setFile(backendUrl + cmsContent[0].field_logo.image.uri.url)

  // Write changes back to the layout.json file
  fs.writeFileSync(apiPath + '/layout.json', JSON.stringify(layoutDefault), 'utf8')

  // Story maps
  fs.createReadStream(staticPath + '/templates/llc/storymaps.json').pipe(fs.createWriteStream(apiPath + '/storymaps.json'))
}

module.exports = () => {
  request(
    backendUrl + '/jsonapi/node/kiosk_llc?include=field_logo,field_logo.image,field_state_attract_bg_img,field_state_nav_bg_img,field_state_explore_bg_img,field_state_attract_bg_video,field_state_attract_bg_video.field_media_video_file',
    setData
    )
}