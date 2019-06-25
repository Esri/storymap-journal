define([
  'lib-build/tpl!./Info',
  'lib-build/css!./Info'
], function (
  infoTpl,
  infoCss
) {
  return function Info () {
    console.log('Info.js Init');

    // Add Info
    $('#info').append(infoTpl({
      storyMapTitle: 'Mexico',
      storyMapSubtitle: 'Mexico'
    }))
  }
})