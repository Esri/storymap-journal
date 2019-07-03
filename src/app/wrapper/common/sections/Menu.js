define([
  'lib-build/tpl!./Menu',
  'lib-build/css!./Menu'
], function (
  menuTpl,
  menuCss
) {
  return function Menu () {
    console.log('wrapper.common.Menu -- init');

    // Add menu
    $('#menu').append(menuTpl());
  }
});