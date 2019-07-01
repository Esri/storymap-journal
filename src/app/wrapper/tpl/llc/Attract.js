define([
  'lib-build/tpl!./Attract'
], function (
  attractTpl
) {
  return function Attract () {
    console.log('wrapper.tpl.llc.Attract -- init');

    $('#menu').hide();

    $('.interaction__attract').html(attractTpl());

    $('.interaction__attract div h1')[0].addEventListener('click', function (e) {
      e.preventDefault();
      console.log(ik)
      ik.wrapper.toggleExplore();
    })

  }
});