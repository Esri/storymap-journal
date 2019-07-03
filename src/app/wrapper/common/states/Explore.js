define([
], function (
) {
  return function Explore () {

    var init = function () {
      //
    }

    var show = function () {
      // Do not show the menu
      $('#menu').hide();

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__explore').show();

      $('#info').children().hide();
      $('.info__explore').show();
    }

    return {
      init: init,
      show: show
    }
  }
});