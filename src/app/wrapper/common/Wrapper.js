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

      // Start with Attract state
      this.states.attract.init();

      this.state = state;

      this.state.set('wrapper-state', 'attract');

      this.state.set('navigation-history', []);

            // Story Map ID
      this.state.watch('appid', function() {
        console.debug('AppId changed to ' + state.get('appid'));
      })

      // Wrapper State watcher
      this.state.watch('wrapper-state', function () {
        console.log('Current wrapper state:', ik.wrapper.state.get('wrapper-state'));

        switch (ik.wrapper.state.get('wrapper-state')) {
          case 'active':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
            break;
          case 'attract':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
          case 'explore':
            topic.publish('show-explore');
            break;
          case 'storymap':
            ik.wrapper.sections.info.render();
            ik.wrapper.sections.interaction.render();
            break;
          case 'nav':
            topic.publish('show-nav');
            break;
          default:
            // nothing
        }
      })
    }

    this.showActive = function () {
      // Set state
      ik.wrapper.state.set('wrapper-state', 'active');
    }

    this.showAttract = function () {
      // Set state
      ik.wrapper.state.set('wrapper-state', 'attract');
    }

    this.showExplore = function () {
      // Set state
      ik.wrapper.state.set('wrapper-state', 'explore');

      // Show content for Explore state
      ik.wrapper.states.explore.show();
    }

    this.showStorymap = function (appid) {
      // Set state
      ik.wrapper.state.set('appid', appid);
      ik.wrapper.state.set('wrapper-state', 'storymap');
    }

    this.toggleNav = function () {
      // Set state
      ik.wrapper.state.set('wrapper-state', 'nav');
    }

    this.setAppId = function (appid) {
      ik.wrapper.state.set('appid', appid);
    }

    /**
     * Dojo topic/state callbacks
     */

    /**
     * Story listeners
     */
    this.storyNavigatedSection = function (index) {
      console.debug('Story Navigated Section', index);

      var currentHistory = ik.wrapper.state.get('navigation-history');

      currentHistory.push(index);

      ik.wrapper.state.set('navigation-history', currentHistory);
    }

    this.storyTplReady = function () {
      console.debug('Story TPL Ready');
    }

    this.storyIsLoading = function(appid) {
      console.debug('Story is loading', appid);

      ik.wrapper.state.set('appid', appid);
    }

    this.storyInitCompleted = function () {
      console.debug('Story init completed');
    }

    this.showNav = function () {
      // Hide the menu and storymap
      $('#menu').hide();
      $('#interaction').children().hide();
      $('.interaction__nav').show();
    }

    var createLinks = function (element) {
      var data = element.data();
      var state = data.nav;
      var showState = 'show' + state.charAt(0).toUpperCase() + state.slice(1);
      var option = data[data.nav];

      element.click(function (e) {
        e.preventDefault();
        ik.wrapper[showState]();
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
