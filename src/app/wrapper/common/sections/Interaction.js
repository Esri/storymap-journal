define([
  'lib-build/tpl!../../tpl/sections/Interaction/Active',
  'lib-build/tpl!../../tpl/sections/Interaction/Attract',
  'lib-build/tpl!../../tpl/sections/Interaction/Nav',
  'lib-build/tpl!../../tpl/sections/Interaction/Region',
  'lib-build/tpl!../../tpl/sections/Interaction/Storymap',
  'lib-build/tpl!../../tpl/components/NavigationButton',
  'esri/arcgis/utils'
], function (
  interactionActiveTpl,
  interactionAttractTpl,
  interactionNavTpl,
  interactionRegionTpl,
  interactionStorymapTpl,
  NavigationButton,
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

      var action = '';
      var buttons = [];

      if (ik.wrapper.getVersion() === 'llc') {
        action = 'storymap'
        allStorymaps = ik.wrapper.api.storymap.getAll();
        buttons = ik.wrapper.api.storymap.getAllLanguage(currentLanguage, allStorymaps);
      } else {
        action = 'region'
        buttons = ik.wrapper.api.region.getAll();
      }

      // Create navigation buttons
      buttons.forEach(function (button, index) {
        var alternate = '';
        if (button.relationships) {
          var alternateStorymap = ik.wrapper.api.storymap.get([button.relationships.id]);

          if (alternateStorymap.length === 1)
            alternate = alternateStorymap[0].name;
        }

        if (alternate.length === 0 && ik.wrapper.getVersion() === 'cdi') {
          alternate = button.translated;
        }

        $('.nav__list').append(NavigationButton({
          action: action,
          alternate: alternate,
          alternateLanguage: alternateLanguage,
          color: button.theme.color.primary,
          currentLanguage: currentLanguage,
          targetId: button.id,
          title: button.name
        }));
      });

      // Set button to explore section
      if (ik.wrapper.getVersion() === 'llc') {
        $('.nav__list__explore').html(NavigationButton({
          action: 'explore',
          alternate: 'Explore nuestro Comunidad de hojas',
          alternateLanguage: 'es',
          color: '#715035',
          currentLanguage: currentLanguage,
          targetId: ik.wrapper.layout.state.explore.section.interaction.map,
          title: 'Learn more about LEAF Community'
        }));
      }

      // Bind events to links
      $(activeClass + ' [data-nav]').each(function(i, ele) {
        ik.wrapper.createLinks($(ele));
      });
    }

    this.renderRegion = function () {
      var activeClass = '.interaction__region';

      $(activeClass).html(interactionRegionTpl());

      var currentLanguage = ik.wrapper.state.get('language');

      var alternateLanguage = (currentLanguage === 'en') ? 'es' : 'en';

      var action = 'storymap';
      var region = ik.wrapper.state.get('regionid');
      var regionInfo = ik.wrapper.api.region.get(region);

      var regionStorymaps = ik.wrapper.api.storymap.get(regionInfo[0].storymaps);
      var buttons = ik.wrapper.api.storymap.getAllLanguage(currentLanguage, regionStorymaps);

      // Create navigation buttons
      buttons.forEach(function (button, index) {
        var alternate = '';
        if (button.relationships) {
          var alternateStorymap = ik.wrapper.api.storymap.get([button.relationships.id]);

          if (alternateStorymap.length === 1)
            alternate = alternateStorymap[0].name;
        }

        if (alternate.length === 0 && ik.wrapper.getVersion() === 'cdi') {
          alternate = '';
        }

        $('.region__list').append(NavigationButton({
          action: action,
          alternate: alternate,
          alternateLanguage: alternateLanguage,
          color: button.theme.color.primary,
          currentLanguage: currentLanguage,
          targetId: button.id,
          title: button.name
        }));
      });

      $('.region__list__back').html(NavigationButton({
        action: 'nav',
        alternate: 'ver todas las regiones',
        alternateLanguage: 'es',
        color: '#ffffff',
        currentLanguage: currentLanguage,
        targetId: '',
        title: 'View all regions'
      }));

      // Bind events to links
      $(activeClass + ' [data-nav]').each(function(i, ele) {
        ik.wrapper.createLinks($(ele));
      });
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