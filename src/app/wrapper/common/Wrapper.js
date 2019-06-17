define([
  'lib-build/tpl!./Wrapper',
  'lib-build/css!./Wrapper',
  'dojo/topic',
  'dojo/Stateful'
], function(
  viewTpl,
  viewCss,
  topic,
  Stateful
) {
  return function Wrapper() {
    var state = new Stateful();

    this.init = function() {
      console.log('common.menu.Menu - init');
      console.log('common.menu.Menu - pages', pages);

      this.topicSubscribers();
      this.stateWatchers();

      $('#ik-menu').append(viewTpl({
        storyMapTitle: 'Mexico'
      }));

      this.menuEvents();

      state.set('navigation-history', []);
    }

    this.menuEvents = function () {
      $('.menu__button')[0].addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu();
      })
    }

    this.buildMenu = function () {
      // Build Elements
      var menu = document.createElement('div');
      menu.setAttribute('id', 'ik-menu');

      var pagesKeys = Object.keys(pages);
      pagesKeys.forEach(function(key, index) {
        var appid = pages[key].id;
        var link = document.createElement('button');
        var text = document.createTextNode(key);
        link.appendChild(text);
        link.addEventListener('click', function(e) {
          e.preventDefault();
          reset(appid);
        });
        menu.appendChild(link);
      })

      var body = document.getElementsByTagName('body')[0];
      body.insertBefore(menu, body.childNodes[0] || null);
    }

    var toggleMenu = function () {
      if ($('#ik-menu').css('height') === window.innerHeight + 'px') {
        $('#ik-menu').css('height', '30vh');
      } else {
        $('#ik-menu').css('height', '100vh');
      }
    }

    this.stateWatchers = function () {
      state.watch('appid', function() {
        console.debug('AppId changed to ' + state.get('appid'));
      })
    }

    this.topicSubscribers = function () {
      topic.subscribe('tpl-ready', this.storyTplReady);
      topic.subscribe('story-navigate-section', this.storyNavigatedSection);
      topic.subscribe('story-loaded-map', this.storyLoadedMap);
      topic.subscribe('story-is-loading', this.storyIsLoading);
    }

    /**
     * Dojo topic/state callbacks
     */

    /**
     * Story listeners
     */
    this.storyFocusedSection = function (index) {
      console.debug('Story Focused Section', index);
    }

    this.storyNavigatedSection = function (index) {
      console.debug('Story Navigated Section', index);

      var currentHistory = state.get('navigation-history');

      currentHistory.push(index);

      state.set('navigation-history', currentHistory);
    }

    this.storyLoadedMap = function (map) {
      console.debug('Story Loaded Map', map);
    }

    this.storyTplReady = function () {
      console.debug('Story TPL Ready');
    }

    this.storyIsLoading = function(appid) {
      console.debug('Story is loading', appid);

      state.set('appid', appid);
    }

    this.storyInitCompleted = function () {
      console.debug('Story init completed');
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

  }
});
