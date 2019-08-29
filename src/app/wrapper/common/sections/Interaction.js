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
      var action = 'nav'
      targetId = 0;
      if (ik.wrapper.getVersion() === 'cdi') {
        var action = 'region';

        var featured = ik.wrapper.api.region.getFeaturedRegion();
        targetId = featured[0].id
      }

      $('.interaction__attract').html(interactionAttractTpl({
        action: action,
        targetId: targetId
      }));
    }

    this.renderNav = function () {
      var activeClass = '.interaction__nav';

      $(activeClass).html(interactionNavTpl());

      var currentLanguage = ik.wrapper.state.get('language');

      // LG-67: Disable language nav switching for now
      if (currentLanguage !== 'en') {
        ik.wrapper.state.set('language', 'en');
        currentLanguage = 'en'
      }

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
        var id = '';
        var buttonTitle = ''
        var buttonTitleAlt = ''
        var image = '/static/svg/leaf.svg'
        if (ik.wrapper.getVersion() === 'cdi') {
          id = button.id;
          buttonTitle = button.name;
          buttonTitleAlt = button.translated;
        } else {
          id = button.uuid;
          buttonTitle = button.titles.primary;
          buttonTitleAlt = button.titles.secondary;
        }

        $('.nav__list').append(NavigationButton({
          action: action,
          alternate: buttonTitleAlt,
          alternateLanguage: alternateLanguage,
          colorPrimary: button.theme.color.primary,
          colorSecondary: button.theme.color.secondary,
          currentLanguage: currentLanguage,
          imgSrc: image,
          targetId: id,
          title: buttonTitle
        }));
      });

      // Set button to explore section
      if (ik.wrapper.getVersion() === 'llc') {
        $('.nav__list__explore').append(NavigationButton({
          action: 'explore',
          alternate: 'Explore nuestro Comunidad de hojas',
          alternateLanguage: 'es',
          colorPrimary: '#715035',
          colorSecondary: '#533B27',
          currentLanguage: currentLanguage,
          imgSrc: '/static/svg/leaf.svg',
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

      // LG-67: Disable language nav switching for now
      if (currentLanguage !== 'en') {
        ik.wrapper.state.set('language', 'en');
        currentLanguage = 'en'
      }

      var alternateLanguage = (currentLanguage === 'en') ? 'es' : 'en';

      var action = 'storymap';
      var region = ik.wrapper.state.get('regionid');
      var regionInfo = ik.wrapper.api.region.get(region);

      var regionStorymaps = ik.wrapper.api.storymap.get(regionInfo[0].storymaps);
      var buttons = ik.wrapper.api.storymap.getAllLanguage(currentLanguage, regionStorymaps);

      // TODO: remove testing var and resort to buttons var for length check and forEach
      var testing = [];
      testing.push(...buttons);
      testing.push(...buttons);
      testing.push(...buttons);
      testing.push(...buttons);
      testing.push(...buttons);
      testing.push(...buttons);

      if (testing.length > 8) {
        $('.region__heading').hide();
      } else {
        $('.region__controls').hide();
      }

      /**
       * Loop through all buttons, rather than automatically appending to the list,
       * Create NavigationButtson with each and Append them to a group (slide) in quantities of 8
       */
      testing.forEach(function (button, index) {
        // Create new slide(s) for each 8 buttons
        if (index % 8 === 0) {
          var slide = document.createElement('ul');
          var slideClass = `region__list__slide-${index / 8}`
          slide.classList.add(slideClass);
          // Append the slide to the region__list
          $('.region__list').append(slide);
        } else {
          // If we don't need a new slide, get the last one
          var slideClass = `region__list__slide-${Math.floor(index / 8)}`;
        }

        var alternate = 'es';
        if (button.relationships) {
          var alternateStorymap = ik.wrapper.api.storymap.get([button.relationships.id]);

          if (alternateStorymap.length === 1)
            alternate = alternateStorymap[0].name;
        }

        var image = '/static/svg/leaf.svg';
        if (ik.wrapper.getVersion() === 'cdi') {
          image = button.theme.flag;

          if (alternate.length === 0) {
            alternate = '';
          }
        }

        $(`.${slideClass}`).append(NavigationButton({
          action: action,
          alternate: button.titles.secondary,
          alternateLanguage: alternateLanguage,
          colorPrimary: button.theme.color.primary,
          colorSecondary: button.theme.color.secondary,
          currentLanguage: currentLanguage,
          imgSrc: image,
          targetId: button.uuid,
          title: button.titles.primary
        }));

        // Make region__list__controls background-color correct
        var controlBtns = document.querySelectorAll('[class^="region__controls__btn-"]');
        Array.from(controlBtns).forEach(btn => {
          btn.style.backgroundColor = button.theme.color.primary;
        })
      });

      // Set up the back button
      $('.region__list__back').html(NavigationButton({
        action: 'nav',
        alternate: 'ver todas las regiones',
        alternateLanguage: 'es',
        colorPrimary: '',
        colorSecondary: '',
        currentLanguage: currentLanguage,
        imgSrc: '',
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
      var storymapData = ik.wrapper.api.storymap.get(appid);
      console.log(appid, storymapData)
      $('.interaction__storymap').html(interactionStorymapTpl());
      reset(storymapData[0].id);
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