// Node API
const fs = require('fs')
const path = require('path')
const url = require('url')

// Installed packages
const axios = require('axios')
const jsona = require('jsona')
const _ = require('lodash')

// Set up Jsona
const { Jsona } = jsona
const formatter = new Jsona()

// Set up local paths for files
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

const storymapTemplate = {
  id: "",
  uuid: "",
  name: "",
  language: "",
  weight: 0,
  theme: {
    background: "",
    color: {
      primary: "",
      secondary: ""
    }
  },
  callout: {
    title: "",
    body: ""
  },
  relationships: {
    id: ""
  }
}

const regionTemplate = {
  id: '',
  machine_name: '',
  name: '',
  translated: '',
  storymaps: [],
  theme: {
    color: {
      primary: '',
      secondary: ''
    }
  }
}

/**
 * getHeader - returns title data for the Info section
 *
 * @param {[Object]} content
 * @param {[String]} field
 * @return {[String]}
 */
const getHeader = (content = {}, field = '') => (_.isEmpty(_.get(content, field, content.title)) === true) ? content.title : _.get(content, field, content.title)

/**
 * Take JSON object and write it to path
 *
 * @param {String} path 
 * @param {Object} json 
 */
const writeJsonToFile = (path = '', json = {}) => {fs.writeFileSync(path, JSON.stringify(json), 'utf8')}

/**
 * Take a pathname from Drupal, download the file if possible.
 * Return the remote or local pathname.
 *
 * @param {[String]} fileuri
 * @return {[String]}
 */
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

  axios({
    method: 'GET',
    url: fileuri,
    responseType: 'stream'
  })
    .then((res) => {
      const writeStream = fs.createWriteStream(decodeURI(absFilepath))

      writeStream.on('open', () => {this.event.emit('add-file')})

      writeStream.on('close', () => {this.event.emit('remove-file')})

      res.data.pipe(writeStream)
    }).catch(error => {
      console.error(error)
    })

  return relFilepath
}

/**
 * Sets data to a layout.json object and writes the stringify object to file
 *
 * @param {[Object]} body JSON:API object parsed by Jsona
 */
const createLayout = (body) => {
  const cmsContent = formatter.deserialize(body)

  // Save file for future reference
  writeJsonToFile(staticPath + '/download/kiosk.json', cmsContent)

  // Get the default layout file
  const layoutDefault = JSON.parse(fs.readFileSync(staticPath + '/templates/layout.json', 'utf8'))

  let defaultAttractBgImg = staticPath + '/image/attract-background.json'

  // Write layout information
  const { attract, explore, nav, region, storymap } = layoutDefault.state

  // Attract section
  attract.section.info.h1 = getHeader(cmsContent, 'title')

  attract.section.info.h2 = getHeader(cmsContent, 'field_translated_title')

  attract.section.info.logo = setFile(process.env.BACKEND_URL + cmsContent.field_logo.image.uri.url)

  if (filepath = _.get(cmsContent, 'field_state_attract_bg_img.image.uri.url', defaultAttractBgImg)) {
    attract.background.img = setFile(process.env.BACKEND_URL + filepath)
    defaultAttractBgImg = filepath
  }

  if (filepath = _.get(cmsContent, 'field_state_attract_bg_video.field_media_video_file.uri.url', false)) {
    attract.background.video = {
      src: setFile(process.env.BACKEND_URL + cmsContent.field_state_attract_bg_video.field_media_video_file.uri.url),
      type: _.get(cmsContent, 'field_state_attract_bg_video.field_media_video_file.filemime', '')
    }

    // Check for MOV files
    if (attract.background.video.type === 'video/quicktime')
      attract.background.video.type = 'video/mp4'
  }

  // Nav section
  nav.section.info.h1 = getHeader(cmsContent, 'field_state_nav_title')

  nav.section.info.h2 = getHeader(cmsContent, 'field_state_nav_translated_title')

  nav.section.info.logo = setFile(process.env.BACKEND_URL + cmsContent.field_logo.image.uri.url)

  // Use attract screen background as template for others
  if (filepath = _.get(cmsContent, 'field_state_nav_bg_img.image.uri.url', defaultAttractBgImg))
    nav.background.img = setFile(process.env.BACKEND_URL + filepath)

  if (filepath = _.get(cmsContent, 'field_state_nav_bg_video.field_media_video_file.uri.url', false)) {
    nav.background.video = {
      src: setFile(process.env.BACKEND_URL + cmsContent.field_state_nav_bg_video.field_media_video_file.uri.url),
      type: _.get(cmsContent, 'field_state_nav_bg_video.field_media_video_file.filemime', '')
    }

    // Check for MOV files
    if (nav.background.video.type === 'video/quicktime')
      nav.background.video.type = 'video/mp4'
  }

  // Explore section
  explore.section.info.h1 = getHeader(cmsContent, 'field_state_explore_title')

  explore.section.info.h2 = getHeader(cmsContent, 'field_state_explore_translated_title')

  explore.section.info.logo = setFile(process.env.BACKEND_URL + cmsContent.field_logo.image.uri.url)

  if (filepath = _.get(cmsContent, 'field_state_explore_bg_img.image.uri.url', defaultAttractBgImg))
    explore.background.img = setFile(process.env.BACKEND_URL + filepath)

  explore.section.interaction.map = _.get(cmsContent, 'field_explore_map', '')

  // Region section
  region.section.info.logo = setFile(process.env.BACKEND_URL + cmsContent.field_logo.image.uri.url)

  if (filepath = _.get(cmsContent, 'field_state_region_bg_video.field_media_video_file.uri.url', false)) {
    region.background.video = {
      src: setFile(process.env.BACKEND_URL + cmsContent.field_state_region_bg_video.field_media_video_file.uri.url),
      type: _.get(cmsContent, 'field_state_region_bg_video.field_media_video_file.filemime', '')
    }

    // Check for MOV files
    if (region.background.video.type === 'video/quicktime')
      region.background.video.type = 'video/mp4'
  }


  // Story map section
  storymap.section.info.h1 = getHeader(cmsContent, 'field_state_storymap_title')

  explore.section.info.h2 = getHeader(cmsContent, 'field_state_storymap_translated_title')

  storymap.section.info.logo = setFile(process.env.BACKEND_URL + cmsContent.field_logo.image.uri.url)

  // Write changes back to the layout.json file
  return layoutDefault
}

/**
 * Sets data to a storymaps.json object and writes the stringify object to file
 *
 * @param {[Object]} body JSON:API object parsed by Jsona
 */
const createStorymaps = (body) => {
  const cmsContent = formatter.deserialize(body)

  writeJsonToFile(staticPath + '/download/storymaps.json', cmsContent)

  let storyMapList
  if (process.env.KIOSK_VERSION === 'cdi') {
    storyMapList = cmsContent
  } else {
    storyMapList = cmsContent.field_story_map
  }

  const primaryStorymaps = storyMapList.map((storymap) => {
    let concatStorymap

    const storyMapImage = setFile(process.env.BACKEND_URL + storymap.field_media.image.uri.url)
    if (storymap.field_translated_id !== null && storymap.field_translated_id.length > 0)
      concatStorymap = { ...storymapTemplate, ...{id: storymap.field_id}, ...{uuid: storymap.id}, ...{name: storymap.title}, ...{language: 'en'}, ...{theme: {background: storyMapImage, color: {primary: '#' + storymap.field_color, secondary: ''}}}, ...{callout: {title: storymap.field_callout.field_heading, body: storymap.field_callout.field_text.value}}, ...{relationships: {id: storymap.field_translated_id}} }
    else
      concatStorymap = { ...storymapTemplate, ...{id: storymap.field_id}, ...{uuid: storymap.id}, ...{name: storymap.title}, ...{language: 'en'}, ...{theme: {background: storyMapImage ,color: {primary: '#' + storymap.field_color, secondary: ''}}}, ...{callout: {title: storymap.field_callout.field_heading, body: storymap.field_callout.field_text.value}} }

    if (process.env.KIOSK_VERSION === 'cdi') {
      concatStorymap.theme.flag = `${process.env.BACKEND_URL}/modules/client/ik_d8_module_wb_migration/includes/flags/${storymap.field_country.field_iso_code.toLowerCase()}.png`
    }

    return concatStorymap
  })

  const translatedStorymaps = storyMapList.map((storymap) => {
    let concatStorymap

    const storyMapImage = setFile(process.env.BACKEND_URL + storymap.field_media.image.uri.url)

    if (storymap.field_translated_id !== null && storymap.field_translated_id.length > 0) {
      concatStorymap = { ...storymapTemplate, ...{id: storymap.field_translated_id},  ...{uuid: storymap.id + '-alt'}, ...{name: storymap.field_translated_title}, ...{language: 'es'}, ...{theme: {background: storyMapImage, color: {primary: '#' + storymap.field_color, secondary: ''}}}, ...{callout: {title: storymap.field_translated_callout.field_heading, body: storymap.field_callout.field_text.value}}, ...{relationships: {id: storymap.field_id}} }
    }

    if (concatStorymap && process.env.KIOSK_VERSION === 'cdi') {
      concatStorymap.theme.flag = `${process.env.BACKEND_URL}/modules/client/ik_d8_module_wb_migration/includes/flags/${storymap.field_country.field_iso_code.toLowerCase()}.png`
    }

    return concatStorymap
  }).filter((result) => result !== undefined)

  const storymaps = primaryStorymaps.concat(translatedStorymaps)

  return storymaps
}

const createRegions = (body) => {
  const cmsContent = formatter.deserialize(body)

  // Save file for future reference
  writeJsonToFile(staticPath + '/download/regions.json', cmsContent)

  const regions = cmsContent.map((region, index) => {
    return {
      ...regionTemplate,
      ...{ id: region.drupal_internal__tid },
      ...{ machine_name: region.field_machine_name },
      ...{ name: region.name },
      ...{ translated: region.field_translated_display_name},
      ...{ theme: {
          color: {
            primary: region.field_primary.color,
            secondary: region.field_secondary.color
          }
        }}
      }
  })

  return regions
}

/**
 * Export the logic so that the 
 */
module.exports = async (event) => {
  const { BACKEND_URL, KIOSK_VERSION, KIOSK_UUID } = process.env

  /**
   * Set up events that track files which are downloading.
   * 
   * Obvious point of failure is if a few files finish before
   * the next files kick start.
   */
  event.on('add-file', () => {
    this.event.file += 1
  })

  event.on('remove-file', () => {
    this.event.file -= 1

    if (this.event.file === 0) {
      this.event.emit('finish-build')
    }
  })

  // Make event a local in scope
  this.event = event

  // Track number of files downloading
  this.event.file = 0

  // Endpoint for the Kiosk node
  const kiosk = new URL(`/jsonapi/node/kiosk_${KIOSK_VERSION.toLowerCase()}/${KIOSK_UUID}`, BACKEND_URL)
  const map = new Map()

  // Set a large amount of query parameters
  if (KIOSK_VERSION === 'llc') {
    map.set('include', [
        'field_logo',
        'field_logo.image',
        'field_state_attract_bg_img',
        'field_state_attract_bg_img.image',
        'field_state_attract_bg_video',
        'field_state_attract_bg_video.field_media_video_file',
        'field_state_nav_bg_img',
        'field_state_nav_bg_img.image',
        'field_state_explore_bg_img',
        'field_state_explore_bg_img.image',
        'field_story_map',
        'field_story_map.field_callout',
        'field_story_map.field_translated_callout',
        'field_story_map.field_media',
        'field_story_map.field_media.image'
      ].join(','))
  } else {
        map.set('include', [
        'field_logo',
        'field_logo.image',
        'field_state_attract_bg_img',
        'field_state_attract_bg_img.image',
        'field_state_attract_bg_video',
        'field_state_attract_bg_video.field_media_video_file',
        'field_state_nav_bg_img',
        'field_state_nav_bg_img.image',
        'field_state_nav_bg_video',
        'field_state_nav_bg_video.field_media_video_file',
        'field_state_region_bg_img',
        'field_state_region_bg_img.image',
        'field_state_region_bg_video',
        'field_state_region_bg_video.field_media_video_file'
      ].join(','))
  }

  params = new URLSearchParams(map)
  kiosk.search = decodeURIComponent(params.toString())

  try {
    // Grab response, format it, and save the object
    const response = await axios.get(kiosk.toString())
    const apiLayout = createLayout(response.data)
    writeJsonToFile(apiPath + '/layout.json', apiLayout)

    if (KIOSK_VERSION === 'llc') {
      const apiStorymaps = createStorymaps(response.data)
      writeJsonToFile(apiPath + '/storymaps.json', apiStorymaps)
    }
  } catch (error) {
    console.error(error)
  }

  if (KIOSK_VERSION === 'cdi') {
    // Get Regions for Cultural Dive Ins
    taxonomy = new URL('/jsonapi/taxonomy_term/cdi_region?sort=weight', BACKEND_URL)

    try {
      // Grab the regions
      const response = await axios.get(taxonomy.toString())

      // Use the regions to get Story Maps which are tagged with those regions
      const regionStorymaps = response.data.data.map(
        region => axios.get(
          new URL(`/jsonapi/node/story_map?filter[field_region.tid]=${region.attributes.drupal_internal__tid}&include=field_callout,field_translated_callout,field_media,field_media.image,field_region,field_country`, BACKEND_URL)
            .toString()
      ))
      const storymapGroup = await axios.all(regionStorymaps)

      /**
       * Given a group of story maps from multiple requests,
       * group them into a single JSON:API object
       */
      const storymaps = storymapGroup.reduce((accumulator, region) => {
        if (region.data.data.length > 0) {
          let newAcc = {...accumulator, ...{ jsonapi: region.data.jsonapi }, ...{ links: region.data.links }}
          newAcc.data = accumulator.data.concat(region.data.data)
          newAcc.included = accumulator.included.concat(region.data.included)
          return newAcc
        } else {
          return accumulator
        }
      }, {jsonapi: {}, data: [], included: [], links: {}})

      // Format the the story maps and regions
      const storymapApi = createStorymaps(storymaps)
      const regions = createRegions(response.data)

      // Take regions and associate story map field_id to those regions
      const newRegions = regions.map(region => {
        region.storymaps = formatter.deserialize(storymaps).map(storymap => {
          if (region.id === storymap.field_region.drupal_internal__tid) {
            // Also add the region theme colors to the story maps
            storymapApi.forEach((x, i, y) => {
              // If story map object UUID = JSON:API UUID
              if (x.uuid === storymap.id) {
                // Set story map object theme color to current region theme color
                y[i].theme.color = region.theme.color
              }
            })
            return storymap.id
          }
        }).filter(x => x !== undefined)
        return region
      })

      // Write these objects to the api static endpoints
      writeJsonToFile(apiPath + '/storymaps.json', storymapApi)
      writeJsonToFile(apiPath + '/regions.json', newRegions)
    } catch (error) {
      console.error(error)
    }
  }
}