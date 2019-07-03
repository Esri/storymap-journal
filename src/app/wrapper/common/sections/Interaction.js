define([
  'lib-build/tpl!../../tpl/sections/Interaction/Active',
  'lib-build/tpl!../../tpl/sections/Interaction/Attract'
], function (
  interactionActiveTpl,
  interactionAttractTpl
) {
  return function Interaction () {
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
      $('.interaction__active').html(interactionActiveTpl())
    }

    this.renderAttract = function () {
      $('.interaction__attract').html(interactionAttractTpl())
    }

    return {
      render: render.bind(this)
    }
  }
})