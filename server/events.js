const EventEmitter = require('events')

class BuildEvents extends EventEmitter {}

const events = new BuildEvents()

module.exports = events