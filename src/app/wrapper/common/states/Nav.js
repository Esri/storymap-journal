define([
], function (
) {
  return function Nav () {

    var init = function () {
      //
    }

    var show = function () {
      // Do not show the menu
      $('#menu').hide();

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__nav').show();

      $('#info').children().hide();
      $('.info__nav').show();
    }

    return {
      init: init,
      show: show
    }
  }
});