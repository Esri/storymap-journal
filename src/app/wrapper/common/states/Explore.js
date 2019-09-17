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

      $('#menu').children().hide();
      $('.menu__explore').show();

      $('.menu__explore [data-nav]').each(function(i, ele) {
        ik.wrapper.createLinks($(ele));
      });

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