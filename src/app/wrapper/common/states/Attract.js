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

      console.log(ik.wrapper);

      // Set Background Video or Image
      if (ik.wrapper.layout.state.attract.background.video) {
        var video = $('#container video');
        video.html('<source src="' + ik.wrapper.layout.state.attract.background.video.src + '" type="' + ik.wrapper.layout.state.attract.background.video.type + '">');

        if (ik.wrapper.layout.state.attract.background.img) {
          video.attr('poster', ik.wrapper.layout.state.attract.background.img);
        }

        video.show();
      } else if (ik.wrapper.layout.state.attract.background.img) {
        $('#container').css('background-image', 'url(' + ik.wrapper.layout.state.attract.background.img + ')');
        $('#container').css('background-position', '50% 50%');
      }

      $('#menu').hide();

      $('.interaction__attract').html(attractInteractionTpl());

      $('.interaction__attract [data-nav]').each(function (i, ele) {
        ik.wrapper.createLinks($(ele));
      })

      $('.info__attract').html(attractInfoTpl(ik.wrapper.layout.state.attract.section.info));

      $('.interaction__attract').show();
      $('.info__attract').show();
    }

    var show = function () {
      $('#container').css('background-image', 'url(' + ik.wrapper.layout.state.attract.background.img + ')');

      // Do not show the menu
      $('#menu').hide();

      // Interaction Element
      $('#interaction').children().hide();
      $('.interaction__attract').show();

      $('#info').children().hide();
      $('.info__attract').show();

      $('#bottom').children().hide();
    }

    return {
      init: init,
      show: show
    }
  }
});