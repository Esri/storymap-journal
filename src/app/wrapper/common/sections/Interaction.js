define([
  'lib-build/tpl!../../tpl/sections/Interaction/Active',
  'lib-build/tpl!../../tpl/sections/Interaction/Attract',
  'lib-build/tpl!../../tpl/sections/Interaction/Nav',
  'lib-build/tpl!../../tpl/sections/Interaction/Region',
  'lib-build/tpl!../../tpl/sections/Interaction/Storymap',
  'lib-build/tpl!../../tpl/components/StorymapButton',
  'lib-build/tpl!../../tpl/components/ExploreButton',
  'lib-build/css!./Info',
  'esri/arcgis/utils'
], function (
  interactionActiveTpl,
  interactionAttractTpl,
  interactionNavTpl,
  interactionRegionTpl,
  interactionStorymapTpl,
  StorymapButton,
  ExploreButton,
  InfoCss,
  esriUtils
) {
  return function Interaction () {
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

      var currentLanguage = ik.wrapper.state.get('language');

      var alternateLanguage = (currentLanguage === 'en') ? 'es' : 'en';

      var buttons = [];

      if (ik.wrapper.getVersion() === 'llc') {
        buttons = ik.wrapper.api.storymap.getAllLanguage(currentLanguage);
      } else {
        buttons = ik.wrapper.api.region.getAll();
      }

      buttons.forEach(function (button, index) {
        var alternate = '';
        if (button.relationships) {
          var alternateStorymap = ik.wrapper.api.storymap.get(button.relationships.id);

          if (alternateStorymap.length === 1)
            alternate = alternateStorymap[0].name;
        }

        if (alternate.length === 0 && ik.wrapper.getVersion() === 'cdi') {
          alternate = button.translated;
        }

        $('.nav__list').append(StorymapButton({
          alternate: alternate,
          alternateLanguage: alternateLanguage,
          color: button.theme.color.primary,
          currentLanguage: currentLanguage,
          storymap: button.id,
          title: button.name
        }));
      });

      if (ik.wrapper.getVersion() === 'llc') {
        $('.nav__list__explore').html(ExploreButton({
          color: '#715035',
          mapid: ik.wrapper.layout.state.explore.section.interaction.map
        }));
      }

      $(activeClass + ' [data-nav]').each(function(i, ele) {
        ik.wrapper.createLinks($(ele));
      });
    }

    this.renderRegion = function () {
      $('.interaction__region').html(interactionRegionTpl());
    }

    this.renderStorymap = function () {
      var appid =ik.wrapper.state.get('appid');
      $('.interaction__storymap').html(interactionStorymapTpl());
      reset(appid);
    }

    this.renderExplore = function () {
      var mapid = ik.wrapper.state.get('mapid');
      var popup = null;
      var container = $('#explore-map');

      var map = esriUtils.createMap(mapid, container[0], {
        mapOptions: {
          slider: true,
          nav:false
        }
      }).then(function (response) {
        console.log('Map Data Received');
      });
    }

    return {
      render: render.bind(this)
    }
  }
})