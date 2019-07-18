define([
  'lib-build/tpl!../../tpl/sections/Bottom/Storymap',
  'lib-build/css!./Bottom'
], function (
  bottomStorymapTpl,
  bottomCss
) {
  return function Bottom () {
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
          this.renderActive();
      }
    }

    /**
     * Render Templates
     * Bind Javascript Events
     */

    this.renderActive = function () {
      //
    }

    this.renderStorymap = function () {
      var appid = ik.wrapper.state.get('appid');
      var storymap = ik.wrapper.api.storymap.get(appid);
      $('.bottom__storymap').html(bottomStorymapTpl({
        title: storymap[0].callout.title,
        body: storymap[0].callout.body
      }));
    }

    return {
      render: render.bind(this)
    }
  }
});