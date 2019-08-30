define([
  'wrapper/utils/layout'
], function (
  layout
) {
  return function Nav () {

    var init = function () {
      //
    }

    var show = function () {
      layout.setBackground();

      // Do not show the menu
      $('#menu').children().hide();

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__nav').show();

      $('#info').children().hide();
      $('.info__nav').show();

      $('#bottom').children().hide();
    }

    return {
      init: init,
      show: show
    }
  }
});