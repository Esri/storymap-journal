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

    // Attach events to the menu bar
    $('.menu__button')[0].addEventListener('click', function (e) {
      e.preventDefault();
      ik.wrapper.toggleNav();
    })
  }
});