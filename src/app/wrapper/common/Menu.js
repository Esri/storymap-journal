define([
  'lib-build/tpl!./Menu',
  'lib-build/css!./Menu'
], function (
  menuTpl,
  menuCss
) {
  return function Menu () {
    console.log('menu.js Init');

    // Add menu
    $('#menu').append(menuTpl())
  }
})