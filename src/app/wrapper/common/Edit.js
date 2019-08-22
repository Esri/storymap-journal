define([
  'lib-build/css!./Edit',
  'lib-build/css!../styles/main',
  'dojo/topic'
], function (
  editCss,
  mainCss,
  topic
) {
  return function Edit () {
    $('#container').addClass('edit');

    $('.video-controls').remove();
  }
})