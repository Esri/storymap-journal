define([
  'lib-build/tpl!../../tpl/sections/Info/Active',
  'lib-build/tpl!../../tpl/sections/Info/Attract',
  'lib-build/tpl!../../tpl/sections/Info/Nav',
  'lib-build/tpl!../../tpl/sections/Info/Storymap',
  'lib-build/css!./Interaction'
], function (
  infoActiveTpl,
  infoAttractTpl,
  infoNavTpl,
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
        case 'nav':
          this.renderNav();
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
      console.log(screen)
      $('.info__active').html(infoActiveTpl(ik.wrapper.layout.state.active.section.info))
    }

    this.renderAttract = function () {
      $('.info__attract').html(infoAttractTpl(ik.wrapper.layout.state.attract.section.info))
    }

    this.renderNav = function () {
      $('.info__nav').html(infoNavTpl(ik.wrapper.layout.state.nav.section.info))
    }

    this.renderStorymap = function () {
      $('.info__storymap').html(infoStorymapTpl(ik.wrapper.layout.state.storymap.section.info))
    }

    return {
      render: render.bind(this)
    }
  }
})