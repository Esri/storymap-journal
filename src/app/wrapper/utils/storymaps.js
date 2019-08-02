define([], function () {
  /**
   * Storymaps utility provides an API for setting
   * and retrieving storymap data in the application.
   */
  return function storymaps () {
    /**
     * Return a single storymap using the app id
     *
     * @param {string} appid
     * @return {Array[storymap]} array of storymaps, of length 0 or 1
     */
    var get = function (appid) {
      return ik.wrapper.storymaps.filter(function (storymap) {
        return (storymap.id === appid) ? storymap : false;
      })
    }

    /**
     * Get all storymaps
     *
     * @return {Array[storymaps]} an array of storymaps
     */
    var getAll = function () {
      return ik.wrapper.storymaps.data
    }

    /**
     * Get all storymaps of a single language
     * 
     * @param {string} lang
     * @return {Array[storymaps]} an array of storymaps
     */
    var getAllLanguage = function (lang) {
      return ik.wrapper.storymaps.filter(function (storymap) {
        return (storymap.language === lang) ? storymap : false;
      })
    }

    /**
     * Checks if the passed appid has an alternative language storymap
     * 
     * @param {string} appid
     * @returns {bool}
     */
    var hasAlternateLanguage = function (appid) {
      var currentApp = get(appid)[0];

      return (currentApp.relationships && currentApp.relationships.id.length > 0) ? true : false;
    }



    return {
      get: get,
      getAll: getAll,
      getAllLanguage: getAllLanguage,
      hasAlternateLanguage: hasAlternateLanguage
    }
  }
});