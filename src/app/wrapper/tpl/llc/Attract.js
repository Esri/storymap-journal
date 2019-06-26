define([
  'lib-build/tpl!./Attract'
], function (
  attractTpl
) {
  return function Attract () {
    console.log('wrapper.tpl.llc.Attract -- init');

    $('.interaction__attract').html(attractTpl());

    console.log($('.interaction__attract div')[0]);

    $('.interaction__attract div h1')[0].addEventListener('click', function (e) {
      e.preventDefault();
      console.log(ik)
      ik.wrapper.toggleExplore();
    })

  }
});