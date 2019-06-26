define([
  'lib-build/tpl!./Info',
  'lib-build/css!./Info'
], function (
  infoTpl,
  infoCss
) {
  return function Info () {
    console.log('wrapper.common.Info -- init');

    // Add Info
    $('#info').append(infoTpl({
      storyMapTitle: 'Mexico',
      storyMapSubtitle: 'Mexico'
    }))
  }
})