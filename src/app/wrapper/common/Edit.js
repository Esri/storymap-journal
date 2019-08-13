define([
  'lib-build/css!./Edit',
  'dojo/topic'
], function (
  editCss,
  topic
) {
  return function Edit () {
    $('#container').addClass('edit');
  }
})