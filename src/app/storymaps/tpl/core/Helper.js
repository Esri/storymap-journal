define([
  'esri/IdentityManager',
  'dojo/cookie'
], function(IdentityManager, cookie){
  return {

    possiblyAddToken: function(url) {

      if (!this.isAppResource(url)) {
        return url;
      }

      // might as well refresh the token...?
      url = this.removeToken(url);

      if (!this.needsTokenAdded(url)) {
        return url;
      }

      var token = this.getToken();

      if (!token) {
        console.warn('no token found even though token needed');
        return url;
      }

      return this.forceHttps(url) + '?token=' + token;
    },

    getToken: function() {
      if (app.portal && app.portal.getPortalUser()) {
        return app.portal.getPortalUser().credential.token;
      }
      var originCredential = IdentityManager.findCredential(document.location.origin);
      if (originCredential) {
        return originCredential.token;
      }
      var urlCredential = IdentityManager.findCredential(app.portal.url);
      if (urlCredential) {
        return IdentityManager.findCredential(app.portal.url).token;
      }
      return this.getCookieToken();
    },

    forceHttps: function(url) {
      var urlWithoutProtocol = url.replace(/^.*?\/\//, '');
      return 'https://' + urlWithoutProtocol;
    },

    isAppResource: function(url, appItem) {
      if (!appItem) {
        appItem = app.data && app.data.getWebAppItem && app.data.getWebAppItem();
      }
      if (!appItem) {
        return false;
      }
      return appItem
        && appItem.id
        && url
        && url.match(new RegExp('\/sharing\/rest\/content\/items\/' + appItem.id + '\/resources\/'));
    },

    needsTokenAdded: function(url) {
      var appItem = app.data && app.data.getWebAppItem && app.data.getWebAppItem();
      if (!appItem) {
        return false;
      }
      return this.isAppResource(url, appItem) && appItem.access !== 'public';
    },

    getCookieToken: function() {
      var esriCookie = cookie('esri_auth');

      if(!esriCookie) {
        return;
      }

      esriCookie = JSON.parse(esriCookie.replace('"ssl":undefined','"ssl":""'));

      // Cookie has to be set on the same organization
      if(esriCookie.urlKey && esriCookie.customBaseUrl
          && (esriCookie.urlKey + '.' + esriCookie.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) {
        return;
      }

      return esriCookie ? esriCookie.token : null;
    },

    possiblyRemoveToken: function(url) {
      // don't use needsTokenAdded() here because that returns false if an author
      // was building the story in private but then makes it public from within builder
      if (!this.isAppResource(url)) {
        return url;
      }
      return this.removeToken(url);

    },

    removeToken: function(url) {
      return url.split('?token=')[0];
    }
  };
});
