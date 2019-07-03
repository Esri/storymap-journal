define([
  'lib-build/tpl!../../tpl/sections/Interaction/Active',
  'lib-build/tpl!../../tpl/sections/Info/Active'
], function (
  activeInteractionTpl,
  activeInfoTpl
) {
  return function Active () {

    /**
     * Set up the default view on the attract screen
     */
    var init = function () {
      // console.log('wrapper.tpl.llc.Active -- init');

      // $('.interaction__active').html(activeInteractionTpl());
      // $('.info__active').html(activeInfoTpl({
      //   h1: 'LEAF Love & Connections',
      //   h2: '(attracts screen)'
      // }))

      // $('#explore-1').click(function (e) {
      //   e.preventDefault();

      //   reset('602866fef9d14b20bd75b83d94fd6bca');
      // })
    }

    /**
     * Show active elements
     * Hide all others
     */
    var show = function () {
      // Do not show the menu
      $('#menu').hide();

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__active').show();

      $('#info').children().hide();
      $('.info__active').show();
    }

    return {
      init: init,
      show: show
    }
  }
});