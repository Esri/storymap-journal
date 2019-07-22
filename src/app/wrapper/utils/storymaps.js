define([], function () {
  /**
   * Storymaps utility provides an API for setting
   * and getting storymap data in the application.
   */
  return function storymaps () {
    /**
     * 
     * @param {[string]} appid
     * @return {[list]} 
     */
    var get = function (appid) {
      return ik.wrapper.storymaps.data.filter(function (storymap) {
        return (storymap.id === appid) ? storymap : false;
      })
    }
    
    var getAll = function () {
      return ik.wrapper.storymaps.data
    }

    var getAllLanguage = function (lang) {
      return ik.wrapper.storymaps.data.filter(function (storymap) {
        return (storymap.language === lang) ? storymap : false;
      })
    }

    return {
      get: get,
      getAll: getAll,
      getAllLanguage: getAllLanguage
    }
  }
});