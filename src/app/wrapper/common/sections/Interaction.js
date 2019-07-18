define([
  'lib-build/tpl!../../tpl/sections/Interaction/Active',
  'lib-build/tpl!../../tpl/sections/Interaction/Attract',
  'lib-build/tpl!../../tpl/sections/Interaction/Nav',
  'lib-build/tpl!../../tpl/components/StorymapButton',
  'lib-build/css!./Info'
], function (
  interactionActiveTpl,
  interactionAttractTpl,
  interactionNavTpl,
  StorymapButton
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
      var activeClass = '.interaction__nav';

      $(activeClass).html(interactionNavTpl());

      ik.wrapper.storymaps.data.forEach(function (storymap, index) {
        $('.nav__list').append(StorymapButton({
          color: storymap.theme.color,
          storymap: storymap.id,
          title: storymap.name
        }));
      })

      $(activeClass + ' [data-nav]').each(function(i, ele) {
        ik.wrapper.createLinks($(ele));
      });
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