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
        case 'storymaps':
          this.renderStorymaps();
          break;
        default: // attract screen
          this.renderAttract();
      }

      ik.wrapper.states[currentState].show();
    }

    /**
     * Render Templates
     * Bind Javascript Events
     */

    this.renderActive = function () {
      var activeClass = '.interaction__active';

      $(activeClass).html(interactionActiveTpl());

      $(activeClass + ' [data-nav]').each(function (i,ele) {
        var data = $(ele).data();

        $(ele).click(function (e){
          e.preventDefault();
          ik.wrapper.showStorymap(data[data.nav]);
          reset(data[data.nav]);
        })

      });
    }

    this.renderAttract = function () {
      $('.interaction__attract').html(interactionAttractTpl());
    }

    this.renderStorymaps = function () { }

    return {
      render: render.bind(this)
    }
  }
})