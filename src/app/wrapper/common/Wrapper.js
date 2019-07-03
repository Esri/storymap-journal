define([
  "lib-build/css!lib-app/font-awesome/css/font-awesome.min",
  'lib-build/tpl!./Wrapper',
  'lib-build/css!./Wrapper',
  'dojo/topic',
  'dojo/Stateful',
  './states/Active',
  './states/Attract',
  './states/Explore',
  './states/Storymap',
  './sections/Nav',
  './sections/Info',
  './sections/Interaction',
  './sections/Menu',
  './sections/Bottom',
], function(
  fontAwesomeCss,
  wrapperTpl,
  wrapperCss,
  topic,
  Stateful,
  Active,
  Attract,
  Explore,
  Storymap,
  Nav,
  Interaction,
  Info,
  Menu,
  Bottom
) {
  return function Wrapper() {
    // Have a wrapper state
    var state = new Stateful();

    // State controllers
    var active = {};
    var attract = {};
    var explore = {};
    var storymap = {};

    // Wrapper sections
    var info = {};
    var interaction = {};
    var nav = {};
    var menu = {};
    var bottom = {};

    var init = function() {
      console.log('wrapper.common.Wrapper - init');

      /**
       * Initialize State and Section classes
       */

      // State controllers
      this.states.active = new Active();
      this.states.attract = new Attract();
      this.states.explore = new Explore();
      this.states.storymap = new Storymap();

      // Wrapper sections
      this.sections.info = new Info();
      this.sections.interaction = new Interaction();
      this.sections.nav = new Nav();
      this.sections.menu = new Menu();
      this.sections.bottom = new Bottom();

      /**
       * When app starts set the first states.
       */
      this.states.attract.init();

      this.state = state;

      this.state.set('wrapper-state', 'attract');

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
       * Wrapper state watcher. Handles wrapper navigation.
       * Passes current state to section renderers.
       */
      this.state.watch('wrapper-state', function () {
        console.log('Current wrapper state:', ik.wrapper.state.get('wrapper-state'));

        // Kick of the rendering lifecycle
        ik.wrapper.state.set('rendering', true);

        // Render the appropriate sections
        switch (ik.wrapper.state.get('wrapper-state')) {
          case 'active':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
            break;
          case 'attract':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
          case 'explore':
            break;
          case 'storymap':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
            break;
          case 'nav':
            break;
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
        } else {
          // End Render
          console.log('Render period ends', ik.wrapper.states);
          ik.wrapper.states[ik.wrapper.state.get('wrapper-state')].show();
        }
      })
    } // End init()

    /**
     * Public methods, avail globally, which set the wrapper state.
     */
    this.showActive = function () {
      ik.wrapper.state.set('wrapper-state', 'active');
    }

    this.showAttract = function () {
      ik.wrapper.state.set('wrapper-state', 'attract');
    }

    this.showExplore = function () {
      ik.wrapper.state.set('wrapper-state', 'explore');
    }

    this.showNav = function () {
      ik.wrapper.state.set('wrapper-state', 'nav');
    }

    this.showStorymap = function (appid) {
      if (ik.wrapper.state.get('appid') !== appid) {
        ik.wrapper.state.set('appid', appid);
      }

      ik.wrapper.state.set('wrapper-state', 'storymap');
    }

    /**
     * During section render this function will pass click() events
     * to elements with recognized data attributes.
     */
    var createLinks = function (element) {
      var data = element.data();
      var state = data.nav;
      var showState = 'show' + state.charAt(0).toUpperCase() + state.slice(1);
      var option = data[data.nav] || null;

      element.click(function (e) {
        e.preventDefault();
        ik.wrapper[showState](option);
      })
    }

    return {
      init: init,
      createLinks: createLinks,
      showActive: this.showActive,
      showAttract: this.showAttract,
      showExplore: this.showExplore,
      showStorymap: this.showStorymap,
      sections: {
        info: info,
        interaction: interaction
      },
      states: {
        active: active,
        attract: attract,
        explore: explore,
        storymap: storymap
      }
    }
  }
});
