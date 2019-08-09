define([], function () {
  /**
   * Storymaps utility provides an API for setting
   * and retrieving storymap data in the application.
   */
  return function storymaps () {
    /**
     * Return a single storymap using the app id
     *
     * @param {ArrayOf[String]} appid
     * @return {Array[storymap]} array of storymaps, length 0 if there are none
     */
    var get = function (appid = []) {
      if (Array.isArray(appid) === false) {
        appid = [appid];
      }

      return ik.wrapper.storymaps.filter(function (storymap) {
        return (appid.includes(storymap.id)) ? storymap : false;
      })
    }

    /**
     * Get all storymaps
     *
     * @return {Array[storymaps]} an array of storymaps
     */
    var getAll = function () {
      return ik.wrapper.storymaps
    }

    /**
     * Get all storymaps of a single language.
     * Pass a language and a list of storymaps to filter.
     * 
     * @param {string} language 'en' or 'es'
     * @param {Array} storymaps
     * @return {Array[storymaps]} an array of storymaps
     */
    var getAllLanguage = function (lang = '', storymaps = []) {
      return storymaps.filter(function (storymap) {
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