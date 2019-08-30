define([
  'wrapper/utils/layout',
  'lib-build/tpl!../../tpl/sections/Info/Attract',
  'lib-build/tpl!../../tpl/sections/Interaction/Attract'
], function (
  layout,
  attractInfoTpl,
  attractInteractionTpl
) {
  return function Attract () {
    var init = function () {
    /**
     * Set up the default view on the attract screen
     */

      console.log('wrapper.tpl.llc.Attract -- init');

      layout.setBackground();

      $('#menu').children().hide();

      var action = 'nav';
      var targetId = 0;
      if (ik.wrapper.getVersion() === 'cdi') {
        var action = 'region';

        var featured = ik.wrapper.api.region.getFeaturedRegion();
        var targetId = featured[0].id;
      }

      $('.interaction__attract').html(attractInteractionTpl({
        action: action,
        targetId: targetId
      }));

      $('.interaction__attract [data-nav]').each(function (i, ele) {
        ik.wrapper.createLinks($(ele));
      })

      $('.info__attract').html(attractInfoTpl(ik.wrapper.layout.state.attract.section.info));

      $('.interaction__attract').show();
      $('.info__attract').show();
    }

    var show = function () {
      layout.setBackground();

      // Do not show the menu
      $('#menu').children().hide();

      $('.interaction__attract [data-nav]').each(function (i, ele) {
        ik.wrapper.createLinks($(ele));
      })

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__attract').show();

      $('#info').children().hide();
      $('.info__attract').show();

      $('#bottom').children().hide();
    }

    return {
      init: init,
      show: show
    }
  }
});