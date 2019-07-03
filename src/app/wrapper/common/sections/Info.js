define([
  'lib-build/tpl!../../tpl/sections/Info/Active',
  'lib-build/tpl!../../tpl/sections/Info/Attract',
  'lib-build/tpl!../../tpl/sections/Info/Storymap',
  'lib-build/css!./Info'
], function (
  infoActiveTpl,
  infoAttractTpl,
  infoStorymapTpl,
  infoCss
) {
  return function Info () {
    var render = function () {
      var currentState = ik.wrapper.state.get('wrapper-state');

      switch (currentState) {
        case 'active':
          this.renderActive();
          break;
        case 'storymap':
          this.renderStorymap();
          break;
        default: // attract screen
          this.renderAttract();
      }
    }

    /**
     * Render Templates
     * Bind Javascript Events
     */

    this.renderActive = function () {
      $('.info__active').html(infoActiveTpl({
        h1: 'LEAF Love & Connections',
        h2: ik.wrapper.state.get('wrapper-state') + screen
      }))
    }

    this.renderAttract = function () {
      $('.info__attract').html(infoAttractTpl({
        h1: 'LEAF Love & Connections',
        h2: ik.wrapper.state.get('wrapper-state') + screen
      }))
    }

    this.renderStorymap = function () {
      $('.info__storymap').html(infoStorymapTpl({
        h1: 'LEAF Love & Connections',
        h2: ik.wrapper.state.get('wrapper-state') + screen
      }))


    }

    return {
      render: render.bind(this)
    }
  }
})