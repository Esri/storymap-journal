define([
  'wrapper/utils/layout'
], function (
  layout
) {
  return function Region () {
    /**
     * Show region elements
     * Hide all others
     */
    var show = function () {
      layout.setBackground();

      // Do not show the menu
      $('#menu').hide();

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__region').show();

      $('#info').children().hide();
      $('.info__region').show();

      $('#bottom').children().hide();
    }

    return {
      show: show
    }
  }
});