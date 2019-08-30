define([
  'lib-build/tpl!../../tpl/sections/Menu/Storymap',
  'lib-build/tpl!../../tpl/sections/Menu/Explore',
], function (
  menuTplStoryMap,
  menuTplExplore
) {
  return function Menu () {
    console.log('wrapper.common.Menu -- init');

    var render = function () {
      var currentState = ik.wrapper.state.get('wrapper-state');

      switch (currentState) {
        case 'explore':
          this.renderExplore();
          break;
        case 'storymap':
          this.renderStorymap();
          break;
        default: // attract screen
          this.renderStorymap();
      }
    }

    this.renderExplore = function () {
      $('.menu__explore').html(menuTplExplore({
        color: '#C84107'
      }))
    }

    /**
     * Render Templates
     * Bind Javascript Events
     */
    this.renderStorymap = function () {
      var appid = ik.wrapper.state.get('appid');
      var storymap = ik.wrapper.api.storymap.get(appid);
      var currentLanguage = ik.wrapper.state.get('language');
      var alternateLanguage = currentLanguage === 'en' ? 'es' : 'en';
      var anotherLanguage = ik.wrapper.api.storymap.hasAlternateLanguage(appid);
      var alternateStorymap = "";
      var alternateStorymapId = "";

      if (anotherLanguage) {
        var alternateStorymap = ik.wrapper.api.storymap.getAlternateLanguage(storymap[0].relationships.id, alternateLanguage)
        alternateStorymapId = alternateStorymap[0].uuid;
      }

      $('.menu__storymap').html(menuTplStoryMap({
        alternateId: alternateStorymapId,
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