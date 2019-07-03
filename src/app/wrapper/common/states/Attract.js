define([
  'lib-build/tpl!../../tpl/sections/Info/Attract',
  'lib-build/tpl!../../tpl/sections/Interaction/Attract'
], function (
  attractInfoTpl,
  attractInteractionTpl
) {
  return function Attract () {
    var init = function () {
      /**
     * Set up the default view on the attract screen
     */

      console.log('wrapper.tpl.llc.Attract -- init');

      $('#menu').hide();

      $('.interaction__attract').html(attractInteractionTpl());

      $('.interaction__attract div h1')[0].addEventListener('click', function (e) {
        e.preventDefault();
        ik.wrapper.showActive();
      })

      $('.info__attract').html(attractInfoTpl({
        h1: 'LEAF Love & Connections',
        h2: '(attract screen)'
      }));

      $('.interaction__attract').show();
      $('.info__attract').show();
    }

    var show = function () {
      // Do not show the menu
      $('#menu').hide();

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__attract').show();

      $('#info').children().hide();
      $('.info__attract').show();
    }

    return {
      init: init,
      show: show
    }
  }
});