define([
  'wrapper/utils/layout'
], function (
  layout
) {
  return function Explore () {

    var init = function () {
      //
    }

    var show = function () {
      layout.setBackground();

      // Do not show the menu
      $('#menu').hide();

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__explore').show();

      $('#info').children().hide();
      $('.info__explore').show();

      $('#bottom').children().hide();
    }

    return {
      init: init,
      show: show
    }
  }
});