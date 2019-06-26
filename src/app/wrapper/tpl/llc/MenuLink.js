define([
  'lib-build/tpl!./MenuLink'
], function (
  menuLinkTpl
) {
  return function MenuLink () {
    // Populate links
    Object.keys(pages).forEach(function (page) {
      $('.interaction__nav__menu ul').append(menuLinkTpl({
        linkTitle: pages[page].name,
        storymapId: pages[page].id
      }))
    });

    $('.interaction__nav__menu ul li button').each(function(i, e) {
      var storymap = $(e).data('storymap');
      $(e).click(function () {
        reset(storymap);
      })
    })
  }
});