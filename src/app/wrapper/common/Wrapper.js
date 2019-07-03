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
    var active = new Active();
    var attract = new Attract();
    var explore = new Explore();
    var storymap = new Storymap();

    // Wrapper sections
    var info = new Info();
    var interaction = new Interaction();
    var nav = new Nav();
    var menu = new Menu();
    var bottom = new Bottom();

    var init = function() {
      console.log('wrapper.common.Wrapper - init');

      // Initialize state controllers
      active.init();
      attract.init();
      explore.init();

      // // Storymap subscribers
      // topic.subscribe('tpl-ready', this.storyTplReady);
      // topic.subscribe('story-navigate-section', this.storyNavigatedSection);
      // topic.subscribe('story-is-loading', this.storyIsLoading);

      // // Wrapper-State Changes
      // topic.subscribe('show-explore', this.showExplore);
      // topic.subscribe('show-nav', this.showNav);
      // topic.subscribe('show-storymap', this.showStorymap);

      // // Global functions (event) subscribers
      // topic.subscribe('toggle-explore', this.toggleExplore);
      // topic.subscribe('toggle-nav', this.toggleNav);
      // topic.subscribe('toggle-storymap', this.toggleStorymap);

      // Initial States
      this.state = state;
      state.set('wrapper-state', 'attract');

      state.set('navigation-history', []);

            // Story Map ID
      state.watch('appid', function() {
        console.debug('AppId changed to ' + state.get('appid'));
      })

      // Wrapper States
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

    /**
     * Wrapper callbacks
     */
    this.wrapperNavigatedToAttractScreen = function () {}

    this.wrapperNavigatedToStorymap = function () {}

    this.wrapperNavigatedToRegionMenu = function() {}

    this.wrapperNavigatedToFullMenu = function () {}

    this.wrapperNavigatedToMapMenu = function () {}

    /**
     * Navigation Methods
     */
    this.wrapperToAttractScreen = function () {}

    this.wrapperToStorymap = function (storymap) {}

    this.wrapperToRegionMenu = function(region) {}

    this.wrapperToFullMenu = function () {}

    this.wrapperToMapMenu = function () {}

    /**
     * Global functions
     */
    var toggleNav = function () {
      topic.publish('toggle-nav');
    }

    var toggleExplore = function () {
      topic.publish('toggle-explore');
    }

    var toggleStorymap = function (appid) {
      topic.publish('toggle-storymap');
    }

    return {
      init: init,
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
