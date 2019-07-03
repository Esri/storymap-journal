define([
  'lib-build/tpl!../../tpl/sections/Info/Active',
  'lib-build/tpl!../../tpl/sections/Info/Attract',
  'lib-build/css!./Info'
], function (
  infoActiveTpl,
  infoAttractTpl,
  infoCss
) {
  return function Info () {
    var render = function () {
      var currentState = ik.wrapper.state.get('wrapper-state');

      switch (currentState) {
        case 'active':
          this.renderActive();
          break;
        default: // attract screen
          this.renderAttract();
      }

      ik.wrapper.states[currentState].show();
    }

    this.renderActive = function () {
      $('.info__active').html(infoActiveTpl({
        h1: 'LEAF Love & Connections',
        h2: '(active screen)'
      }))
    }

    this.renderAttract = function () {
      $('.info__attract').html(infoAttractTpl({
        h1: 'LEAF Love & Connections',
        h2: '(attract screen)'
      }))
    }

    return {
      render: render.bind(this)
    }
  }
})