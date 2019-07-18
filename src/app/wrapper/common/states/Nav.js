define([
], function (
) {
  return function Nav () {

    var init = function () {
      //
    }

    var show = function () {
      ik.wrapper.state.set('video', 'playing');

      // Do not show the menu
      $('#menu').hide();

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