define([
  "lib-build/css!lib-app/font-awesome/css/font-awesome.min",
  'lib-build/tpl!./Wrapper',
  'lib-build/css!../styles/main',
  'dojo/topic',
  'dojo/Stateful',
  '../utils/api',
  '../utils/regions',
  '../utils/storymaps',
  './states/Active',
  './states/Attract',
  './states/Explore',
  './states/Nav',
  './states/Region',
  './states/Storymap',
  './sections/Info',
  './sections/Interaction',
  './sections/Menu',
  './sections/Bottom'
], function(
  fontAwesomeCss,
  wrapperTpl,
  mainCss,
  topic,
  Stateful,
  apiUtil,
  regionUtil,
  storymapUtil,
  Active,
  Attract,
  Explore,
  Nav,
  Region,
  Storymap,
  Interaction,
  Info,
  Menu,
  Bottom
) {
  return function Wrapper() {

    var version = app.indexCfg.ik.version

    // Have a wrapper state
    var state = new Stateful();

    // Initialize Utilities
    var apiStorymap = new storymapUtil();
    var apiRegion = new regionUtil();

    // Global Wrapper Data
    var layout = {};
    var storymaps = {};
    var regions = {};

    // State controllers
    var active = {};
    var attract = {};
    var explore = {};
    var nav = {};
    var region = {};
    var storymap = {};

    // Wrapper sections
    var info = {};
    var interaction = {};
    var menu = {};
    var bottom = {};

    var init = function() {
      console.log('wrapper.common.Wrapper - init');

      /**
       * Set the current version of the kiosk
       */
      this.version = version;

      /**
       * Grab data
       */
      apiUtil.init();

      /**
       * Initialize State and Section classes
       */

      // State controllers
      this.states.active = new Active();
      this.states.attract = new Attract();
      this.states.explore = new Explore();
      this.states.nav = new Nav();
      this.states.region = new Region();
      this.states.storymap = new Storymap();

      // Wrapper sections
      this.sections.info = new Info();
      this.sections.interaction = new Interaction();
      this.sections.menu = new Menu();
      this.sections.bottom = new Bottom();

      /**
       * When app starts set the first states.
       */
      this.states.attract.init();

      this.state = state;

      this.state.set('version', this.version);

      this.state.set('language', 'en');

      this.state.set('wrapper-state', 'attract');

      this.state.set('prev-wrapper-state', 'attract');

      this.state.set('rendering', false);

      this.state.set('navigation-history', []);

      /**
       * appid watcher.
       * Kick off necessary methods here if the storymap has changed but wrapper-state has not.
       */
      this.state.watch('appid', function() {
        console.debug('AppId changed to ' + state.get('appid'));
      })

      /**
       * regionid watcher.
       */
      this.state.watch('regionid', function () {
        console.debug('RegionID changed to ' + state.get('regionid'));
      })

      /**
       * Wrapper state watcher. Handles wrapper navigation.
       * Passes current state to section renderers.
       */
      this.state.watch('wrapper-state', function () {
        console.log('Current wrapper state:', ik.wrapper.state.get('wrapper-state'));

        // Kick of the rendering lifecycle
        ik.wrapper.state.set('rendering', true);

        // Set the state as a container class
        $('#container').removeClass(ik.wrapper.state.get('prev-wrapper-state'));
        $('#container').addClass(ik.wrapper.state.get('wrapper-state'));

        // Render the appropriate sections
        switch (ik.wrapper.state.get('wrapper-state')) {
          case 'active':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
            break;
          case 'attract':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
            break;
          case 'explore':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
            break;
          case 'storymap':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.menu.render();
            ik.wrapper.sections.interaction.render();
            ik.wrapper.sections.bottom.render();
            break;
          case 'nav':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
            break;
          case 'region':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
          default:
            // nothing
        }

        // End rendering lifecycle
        ik.wrapper.state.set('rendering', false);
      })

      /**
       * Section render lifecyle state watcher.
       */
      this.state.watch('rendering', function () {
        if (ik.wrapper.state.get('rendering') === true) {
          // Begin Render
          console.log('Render period begins');
          // Adjust our transition overlay
          var overlay = document.querySelector('.transition-overlay');
          overlay.style.transition = 'unset';
          overlay.style.opacity = 1;
        } else {
          // Adjust our transition overlay
          var overlay = document.querySelector('.transition-overlay');
          setTimeout(function () {
            overlay.style.transition = 'opacity ease 0.75s';
            overlay.style.opacity = 0;
          }, 150);

          // End Render
          console.log('Render period ends', ik.wrapper.states);
          ik.wrapper.states[ik.wrapper.state.get('wrapper-state')].show();
        }
      })

    /**
     * Background video and sounds watcher.
     */
    this.state.watch('video', function () {
      var bgVideo = $('.fullscreen-bg video').get(0);

      switch (ik.wrapper.state.get('video')) {
        case 'playing':
          if (bgVideo.muted) {
            bgVideo.muted = false;
          }

          if (bgVideo.paused) {
            bgVideo.play();
          }
          break;
        case 'stopped':
          bgVideo.pause();
          break;
        case 'muted':
          if (!bgVideo.muted) {
            bgVideo.muted = true;
          }
          break;
        case 'unmuted':
          if (bgVideo.muted) {
            bgVideo.muted = false;
          }
          break;
        default:
          break;
      }
    })

    /**
    * Temporary script to hook up our play and mute toggle buttons for development
    */
    var initVideoToggleButtons = function() {
      var muteToggle = document.getElementById('mute-toggle');
      var playToggle = document.getElementById('play-toggle');

      muteToggle.addEventListener('click', function() {
        if (ik.wrapper.state && ik.wrapper.state.get('video') !== 'muted') {
          ik.wrapper.state.set('video', 'muted');
          $(muteToggle).addClass('active');
        } else {
          ik.wrapper.state.set('video', 'unmuted');
          $(muteToggle).removeClass('active');
        }
      });
      playToggle.addEventListener('click', function() {
        if (ik.wrapper.state && ik.wrapper.state.get('video') !== 'stopped') {
          ik.wrapper.state.set('video', 'stopped');
          $(playToggle).addClass('active');
        } else {
          ik.wrapper.state.set('video', 'playing');
          $(playToggle).removeClass('active');
        }
      });
    }
    initVideoToggleButtons();

    /**
     * Watch state change of wrapper language
     */
    this.state.watch('language', function () {
      switch(ik.wrapper.state.get('language')) {
        case 'en':
          $('#container').removeClass('es');
          $('#container').addClass('en');
          break;
        case 'es':
          $('#container').removeClass('es');
          $('#container').addClass('es');
          break;
        default:
          break;
      }
    })
  } // End init()

    /**
     * Public methods, avail globally, which set the wrapper state.
     */
    this.showActive = function () {
      ik.wrapper.state.set('prev-wrapper-state', ik.wrapper.state.get('wrapper-state'));
      ik.wrapper.state.set('wrapper-state', 'active');
    }

    this.showAttract = function () {
      ik.wrapper.state.set('prev-wrapper-state', ik.wrapper.state.get('wrapper-state'));
      ik.wrapper.state.set('wrapper-state', 'attract');
    }

    this.showExplore = function (mapid) {
      ik.wrapper.state.set('prev-wrapper-state', ik.wrapper.state.get('wrapper-state'));
      console.log('mapid', mapid);
      if (ik.wrapper.state.get('mapid') !== mapid) {
        ik.wrapper.state.set('mapid', mapid);
      }

      ik.wrapper.state.set('wrapper-state', 'explore');
    }

    this.showNav = function () {
      ik.wrapper.state.set('prev-wrapper-state', ik.wrapper.state.get('wrapper-state'));
      ik.wrapper.state.set('wrapper-state', 'nav');
    }

    this.showRegion = function (regionid) {
      ik.wrapper.state.set('prev-wrapper-state', ik.wrapper.state.get('wrapper-state'));
      if (ik.wrapper.state.get('regionid') !== regionid) {
        ik.wrapper.state.set('regionid', regionid);
      }

      ik.wrapper.state.set('wrapper-state', 'region');
    }

    this.showStorymap = function (appid) {
      ik.wrapper.state.set('prev-wrapper-state', ik.wrapper.state.get('wrapper-state'));
      if (ik.wrapper.state.get('appid') !== appid) {
        ik.wrapper.state.set('appid', appid);
      }

      ik.wrapper.state.set('wrapper-state', 'storymap');
    }

    this.getVersion = function () {
      return this.version;
    }

    /**
     * During section render this function will pass click() events
     * to elements with recognized data attributes.
     */
    var createLinks = function (element) {
      var data = element.data();
      var state = data.nav;

      switch (state) {
        case 'back':
          element.click(function (e) {
            e.preventDefault();

            var index = app.data.getCurrentSectionIndex();
            console.log(index);
            if (index === 0) {
              ik.wrapper.showNav();
            } else {
              ik.wrapper.topic.publish('story-navigate-section', index - 1);
            }
          })
          break;
        default:
          var showState = 'show' + state.charAt(0).toUpperCase() + state.slice(1);
          var option = data[data.nav] || null;

          // Optionally check to see if language state should be changed
          var language = data.language || null;

          element.click(function (e) {
            e.preventDefault();

            if (language) {
              ik.wrapper.state.set('language', language);
            }

            ik.wrapper[showState](option);
          })
      }
    }

    return {
      api: {
        storymap: apiStorymap,
        region: apiRegion
      },
      init: init,
      createLinks: createLinks,
      getVersion: this.getVersion,
      layout: layout,
      regions: regions,
      sections: {
        bottom: bottom,
        info: info,
        interaction: interaction,
        menu: menu
      },
      showActive: this.showActive,
      showAttract: this.showAttract,
      showExplore: this.showExplore,
      showNav: this.showNav,
      showRegion: this.showRegion,
      showStorymap: this.showStorymap,
      states: {
        active: active,
        attract: attract,
        explore: explore,
        nav: nav,
        region: region,
        storymap: storymap
      },
      storymaps: storymaps,
      topic: topic
    }
  }
});
