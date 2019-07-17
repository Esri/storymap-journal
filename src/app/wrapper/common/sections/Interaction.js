define([
  'lib-build/tpl!../../tpl/sections/Interaction/Active',
  'lib-build/tpl!../../tpl/sections/Interaction/Attract',
  'lib-build/tpl!../../tpl/sections/Interaction/Nav',
  'lib-build/css!./Info'
], function (
  interactionActiveTpl,
  interactionAttractTpl,
  interactionNavTpl
) {
  return function Interaction () {
    var render = function () {
      var currentState = ik.wrapper.state.get('wrapper-state');

      switch (currentState) {
        case 'active':
          this.renderActive();
          break;
        case 'storymap':
          this.renderStorymap();
          break;
        case 'nav':
          this.renderNav();
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
      var activeClass = '.interaction__active';

      $(activeClass).html(interactionActiveTpl());

      $(activeClass + ' [data-nav]').each(function (i,ele) {
        ik.wrapper.createLinks($(ele));
      });
    }

    this.renderAttract = function () {
      $('.interaction__attract').html(interactionAttractTpl());
    }

    this.renderNav = function () {
      $('.interaction__nav').html(interactionNavTpl());
    }

    this.renderStorymap = function (appid) {
      var appid =ik.wrapper.state.get('appid');
      reset(appid);
    }

    return {
      render: render.bind(this)
    }
  }
})