define([
  "lib-build/css!lib-app/font-awesome/css/font-awesome.min",
  'lib-build/tpl!./Wrapper',
  'lib-build/css!./Wrapper',
  'dojo/topic',
  'dojo/Stateful',
  './Info',
  './Menu',
  '../tpl/llc/Nav',
  '../tpl/llc/Attract',
  '../tpl/llc/Explore'
], function(
  fontAwesomeCss,
  wrapperTpl,
  wrapperCss,
  topic,
  Stateful,
  Info,
  Menu,
  Nav,
  Attract,
  Explore
) {
  return function Wrapper() {
    // Have a wrapper state
    var state = new Stateful();

    this.init = function() {
      console.log('wrapper.common.Wrapper - init');

      this.state = state;

      this.topicSubscribers();

      // Initialize the Info Panel
      new Info();

      // Initialize Menu
      new Menu();

      // Initialize the Menu
      new Nav();

      // Intialize Attract
      new Attract();

      // Initialize Explore
      new Explore();

      // Initial States
      this.state.set('wrapper-state', 'attract');

      this.state.set('navigation-history', []);

      this.stateWatchers();
    }



    this.stateWatchers = function () {
      // Story Map ID
      this.state.watch('appid', function() {
        console.debug('AppId changed to ' + state.get('appid'));
      })

      // Wrapper States
      this.state.watch('wrapper-state', function () {
        switch (ik.wrapper.state.get('wrapper-state')) {
          case 'explore':
            topic.publish('show-explore');
            break;
          case 'storymap':
            console.log('Wrapper State storymap: AppId ', ik.wrapper.state.get('appid'));
            topic.publish('show-storymap');
            break;
          case 'nav':
            topic.publish('show-nav');
            break;
          default:
            console.log('state unrecognized');
        }
      })
    }

    this.topicSubscribers = function () {
      // Storymap subscribers
      topic.subscribe('tpl-ready', this.storyTplReady);
      topic.subscribe('story-navigate-section', this.storyNavigatedSection);
      topic.subscribe('story-is-loading', this.storyIsLoading);

      // Wrapper-State Changes
      topic.subscribe('show-explore', this.showExplore);
      topic.subscribe('show-nav', this.showNav);
      topic.subscribe('show-storymap', this.showStorymap);

      // Global functions (event) subscribers
      topic.subscribe('toggle-explore', this.toggleExplore);
      topic.subscribe('toggle-nav', this.toggleNav);
      topic.subscribe('toggle-storymap', this.toggleStorymap);
    }

    this.toggleExplore = function () {
      // Set state
      ik.wrapper.state.set('wrapper-state', 'explore');
    }

    this.toggleStorymap = function () {
      // Set state
      ik.wrapper.state.set('wrapper-state', 'storymap');
    }

    this.toggleNav = function () {
      // Set state
      ik.wrapper.state.set('wrapper-state', 'nav');
    }

    /**
     * Dojo topic/state callbacks
     */

    /**
     * Story listeners
     */
    this.storyNavigatedSection = function (index) {
      console.debug('Story Navigated Section', index);

      var currentHistory = this.state.get('navigation-history');

      currentHistory.push(index);

      this.state.set('navigation-history', currentHistory);
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

    /**
     * Wrapper state changes
     */
    this.showExplore = function () {
      $('#menu').hide();
      $('#interaction').children().hide();
      $('.interaction__explore').show();
    }

    this.showNav = function () {
      // Hide the menu and storymap
      $('#menu').hide();
      $('#interaction').children().hide();
      $('.interaction__nav').show();
    }

    this.showStorymap = function () {
      $('#menu').show();
      $('#interaction').children().hide();
      $('.interaction__storymap').show();
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
  }
});
