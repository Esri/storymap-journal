define([
  'lib-build/tpl!./Explore'
], function (
  exploreTpl
) {
  return function Explore () {
    console.log('wrapper.tpl.llc.Explore -- init');

    $('.interaction__explore').html(exploreTpl());

    $('#explore-1').click(function (e) {
      e.preventDefault();

      reset('602866fef9d14b20bd75b83d94fd6bca');
    })
  }
});