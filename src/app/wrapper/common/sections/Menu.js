define([
  'lib-build/tpl!../../tpl/sections/Menu/Storymap',
  'lib-build/css!./Menu'
], function (
  menuTplStoryMap,
  menuCss
) {
  return function Menu () {
    console.log('wrapper.common.Menu -- init');

    var render = function () {
      var currentState = ik.wrapper.state.get('wrapper-state');

      switch (currentState) {
        case 'storymap':
          this.renderStorymap();
          break;
        default: // attract screen
          this.renderStorymap();
      }
    }

    /**
     * Render Templates
     * Bind Javascript Events
     */

    this.renderStorymap = function () {
      var appid = ik.wrapper.state.get('appid');
      var storymap = ik.wrapper.api.storymap.get(appid);
      console.log('renderStorymap', storymap);
      $('.menu__storymap').html(menuTplStoryMap({
        color: storymap[0].theme.color,
        name: storymap[0].name
      }));
    }

    return {
      render: render.bind(this)
    }
  }
});