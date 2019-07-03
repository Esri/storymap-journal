define([
  'lib-build/tpl!./Nav',
  'lib-build/css!./Nav',
  './MenuLink'
], function (
  navTpl,
  navCss,
  menuLink
) {
  return function Nav () {
    console.log('wrapper.tpl.llc.Nav -- init');

    // Build Menu
    $('.interaction__nav').html(navTpl());

    // Get Links
    new menuLink();
  }
});