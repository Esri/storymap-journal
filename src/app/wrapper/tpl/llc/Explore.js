define([
  'lib-build/tpl!./Explore'
], function (
  exploreTpl
) {
  return function Explore () {
    console.log('wrapper.tpl.llc.Explore -- init');

    $('.interaction__explore').html(exploreTpl());
  }
});