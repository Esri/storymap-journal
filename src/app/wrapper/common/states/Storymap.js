define([], function () {
  return function Storymap () {
    var show = function () {
      $('#container').css('background-image', 'unset');

      $('#menu').show();

      $('#menu [data-nav]').each(function(i, ele) {
        ik.wrapper.createLinks($(ele));
      })

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__storymap').show();

      $('#info').children().hide();
      $('.info__storymap').show();

      $('#bottom').children().hide();
      $('.bottom__storymap').show();
    }

    return {
      show: show
    }
  }
})