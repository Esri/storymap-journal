define([
  'lib-build/tpl!./Explore'
], function (
  exploreTpl
) {
  return function Explore () {

    var init = function () {
      console.log('wrapper.tpl.llc.Explore -- init');

      $('.interaction__explore').html(exploreTpl());

      $('#explore-1').click(function (e) {
        e.preventDefault();

        reset('602866fef9d14b20bd75b83d94fd6bca');
      })
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