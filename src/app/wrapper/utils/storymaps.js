define([], function () {
  /**
   * Storymaps utility provides an API for setting
   * and getting storymap data in the application.
   */
  return function storymaps () {
    var get = function (appid) {
      return ik.wrapper.storymaps.data.filter(function (storymap) {
        return (storymap.id === appid) ? storymap : false;
      })
    }

    return {
      get: get
    }
  }
});