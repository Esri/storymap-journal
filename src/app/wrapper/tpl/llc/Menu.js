define([
  'lib-build/tpl!./Menu',
  'lib-build/css!./Menu',
  'lib-build/tpl!./MenuLink'
], function (
  menuTpl,
  menuCss,
  menuLinkTpl
) {
  return function Menu () {
    // Build Menu
    $('#contentPanel').html(menuTpl());

    // Populate links
    Object.keys(pages).forEach(function (page) {
      $('#llc-menu ul').append(menuLinkTpl({
        linkTitle: pages[page].name
      }))
    });
  }
});