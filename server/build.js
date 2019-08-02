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

const writeLayout = (body) => {
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
}

const writeStorymaps = (body) => {
  const cmsContent = formatter.deserialize(body)

  const storymapTemplate = {
    id: "",
    name: "",
    language: "",
    weight: 0,
    theme: {
      background: "",
      color: ""
    },
    callout: {
      title: "",
      body: ""
    },
    relationships: {
      id: ""
    }
  }

  const primaryStorymaps = cmsContent[0].field_story_map.map((storymap) => {
    if (storymap.field_translated_id !== null && storymap.field_translated_id.length > 0)
      return { ...storymapTemplate, ...{id: storymap.field_id}, ...{name: storymap.title}, ...{language: 'en'}, ...{theme: {background: setFile(backendUrl + storymap.field_media.image.uri.url),color: '#' + storymap.field_color}}, ...{callout: {title: storymap.field_callout.field_heading, body: storymap.field_callout.field_text.value}}, ...{relationships: {id: storymap.field_translated_id}} }
    else
      return { ...storymapTemplate, ...{id: storymap.field_id}, ...{name: storymap.title}, ...{language: 'en'}, ...{theme: {background: setFile(backendUrl + storymap.field_media.image.uri.url),color: '#' + storymap.field_color}}, ...{callout: {title: storymap.field_callout.field_heading, body: storymap.field_callout.field_text.value}} }
  })

  const translatedStorymaps = cmsContent[0].field_story_map.map((storymap) => {
    if (storymap.field_translated_id !== null && storymap.field_translated_id.length > 0) {
      return { ...storymapTemplate, ...{id: storymap.field_translated_id}, ...{name: storymap.field_translated_title}, ...{language: 'es'}, ...{theme: {background: setFile(backendUrl + storymap.field_media.image.uri.url),color: '#' + storymap.field_color}}, ...{callout: {title: storymap.field_translated_callout.field_heading, body: storymap.field_callout.field_text.value}}, ...{relationships: {id: storymap.field_id}} }
    }
  }).filter((result) => result !== undefined)

  const storymaps = primaryStorymaps.concat(translatedStorymaps)

  // Write changes back to the layout.json file
  fs.writeFileSync(apiPath + '/storymaps.json', JSON.stringify(storymaps), 'utf8')
}

// Main logic
const setData = (err, res, body) => {
  writeLayout(body)
  writeStorymaps(body)
}

module.exports = () => {
  request(
    backendUrl + '/jsonapi/node/kiosk_llc?include=field_logo,field_logo.image,field_state_attract_bg_img,field_state_nav_bg_img,field_state_explore_bg_img,field_state_attract_bg_video,field_state_attract_bg_video.field_media_video_file,field_story_map,field_story_map.field_callout,field_story_map.field_translated_callout,field_story_map.field_media,field_story_map.field_media.image',
    setData
    )
}