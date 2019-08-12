define([
  'lib-build/tpl!../../tpl/sections/Menu/Storymap'
], function (
  menuTplStoryMap
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
      var currentLanguage = ik.wrapper.state.get('language');
      var anotherLanguage = ik.wrapper.api.storymap.hasAlternateLanguage(appid);
      var alternateStorymap = "";

      if (anotherLanguage) {
        alternateStorymap = storymap[0].relationships.id;
      }

      $('.menu__storymap').html(menuTplStoryMap({
        alternateId: alternateStorymap,
        anotherLanguage: anotherLanguage,
        color: storymap[0].theme.color.primary,
        language: currentLanguage,
        name: storymap[0].name
      }));
    }

    return {
      render: render.bind(this)
    }
  }
});