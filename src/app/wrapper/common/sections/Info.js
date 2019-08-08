define([
  'wrapper/utils/layout',
  'lib-build/tpl!../../tpl/sections/Info/Active',
  'lib-build/tpl!../../tpl/sections/Info/Attract',
  'lib-build/tpl!../../tpl/sections/Info/Explore',
  'lib-build/tpl!../../tpl/sections/Info/Nav',
  'lib-build/tpl!../../tpl/sections/Info/Region',
  'lib-build/tpl!../../tpl/sections/Info/Storymap',
  'lib-build/css!./Interaction'
], function (
  layout,
  infoActiveTpl,
  infoAttractTpl,
  infoExploreTpl,
  infoNavTpl,
  infoRegionTpl,
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
        case 'explore':
          this.renderExplore();
          break;
        case 'nav':
          this.renderNav();
          break;
        case 'region':
          this.renderRegion();
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
      $('.info__active').html(infoActiveTpl(layout.getInfo()))
    }

    this.renderAttract = function () {
      $('.info__attract').html(infoAttractTpl(layout.getInfo()));
    }

    this.renderExplore = function () {
      $('.info__explore').html(infoExploreTpl(layout.getInfo()));
    }

    this.renderNav = function () {
      $('.info__nav').html(infoNavTpl(layout.getInfo()));
    }

    this.renderRegion = function () {
      // Region headers are the region info
      var values = layout.getInfo()
      var regionid = ik.wrapper.state.get('regionid');
      var region = ik.wrapper.api.region.get(regionid);

      values.h1 = region[0].name;
      values.h2 = region[0].translated;

      $('.info__region').html(infoRegionTpl(values));
    }

    this.renderStorymap = function () {
      var appid = ik.wrapper.state.get('appid');
      var storymap = ik.wrapper.api.storymap.get(appid);
      var template = layout.getInfo();
      template.background = storymap[0].theme.background;

      $('.info__storymap').html(infoStorymapTpl(template));
    }

    return {
      render: render.bind(this)
    }
  }
})