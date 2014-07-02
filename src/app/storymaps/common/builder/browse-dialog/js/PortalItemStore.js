define([ "dojo/_base/declare", "dojo/_base/lang", "esri/arcgis/Portal" ],
  function (declare, lang, esriPortal) {
    return declare( null, {

      idProperty: "id",

      constructor: function (options) {
        declare.safeMixin(this, options);
        this.portalUrl = this.portal && this.portal.portalUrl;
      },

      getIdentity: function (object) {
        return object[this.idProperty];
      },

      query: function (query, options) {
        var query = query,
          queryParams = lang.isObject(query) ? query : {'q': query};

        if (options) {
          queryParams = lang.mixin(queryParams, {'num': options.count, 'start': ((options.start || 0) + 1)});
          if (options.sort && options.sort.length) {
            var sort = options.sort[0];
            queryParams = lang.mixin(queryParams, {'sortField': encodeURIComponent((sort.attribute === "created") ? "uploaded" : sort.attribute), 'sortOrder': sort.descending ? 'desc' : 'asc'});
          }
        }

        if(this.galleryType === "webmap"){
           var results = this.portal.queryItems(queryParams).then(function(result) {
            result.results.total = result.total;
            return result.results;
          });
        }else{ //group
           var results = this.portal.queryGroups(queryParams).then(function(result) {
            result.results.total = result.total;
            return result.results;
          });
        }


        return esriPortal.PortalResult(results);
      }
    });
  });