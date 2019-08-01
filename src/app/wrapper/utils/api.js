define([
  'dojo/request',
  'wrapper/utils/layout'
], function (
  request,
  layout
) {
  this.init = function () {
    // Initialize storymaps data
      request('/api/layout.json', {
        sync: true,
        handleAs: 'json'
      }).then(
        function(json) {
          ik.wrapper.layout = json;
        },
        function(error) {
          console.error(error.message);
        }
      );

      // Initialize storymaps data
      request('/api/storymaps.json', {
        sync: true,
        handleAs: 'json'
      }).then(
        function(json) {
          ik.wrapper.storymaps = json;
        },
        function(error) {
          console.error(error.message);
        }
      );

    // request('https://backend-dev.leaf.ikshare.com/jsonapi/node/kiosk_llc?include=field_logo,field_logo.image,field_state_attract_bg_img,field_state_nav_bg_img', {
    //   sync: true,
    //   handleAs: 'json'
    // }).then(
    //   function(json) {
    //     console.log(json);
    //     this.setLayout(json);
    //   },
    //   function (error) {
    //     console.error(error.message);
    //   }
    // );
  }

  this.setLayout = function (json) {
    // Attract
    var attributes = json.data[0].attributes;
    var included = json.included;

    var x = included.filter(function(y, z) {
      return y.id === '97bd6100-6ba3-4261-acc6-dfd78194e93d'
    })

    var y = this.matchIncludes(json.data[0].relationships, json.included, true);

    // Attract Screen
    layout.set('attract', 'background', 'img', 'https://backend-dev.leaf.ikshare.com' + y.field_state_attract_bg_img.included[0].attributes.uri.url)

    layout.set('attract', 'info', 'img', 'https://backend-dev.leaf.ikshare.com' + y.field_logo.included[0].included.image.data.attributes.uri.url);
    layout.set('attract', 'info', 'h1', attributes.title);

    // Nav
    layout.set('nav', 'background', 'img', 'https://backend-dev.leaf.ikshare.com' + y.field_state_nav_bg_img.included[0].attributes.uri.url)
  }

  this.matchIncludes = function (relationships = {}, included = [], recurse = false, i = 0) {
    return Object.keys(relationships).reduce(function(result, element) {
      const rel = relationships[element]
      if (rel.data) {
        // Comes through as a single object if only one exists, this evens it out.
        const data = Array.isArray(rel.data) ? rel.data : [rel.data]
        const matches = included.filter(
          function (x) { return data.filter(function (y) { return y.id === x.id}).length }
        )

        if (matches.length && recurse) {
          matches.forEach(function (x, index) {
            if (x.relationships) {
              matches[index].included = this.matchIncludes(
                x.relationships,
                included,
                i < 2 ? recurse : false,
                i + 1
              )
            }
          })
        }

        rel.included = matches
        if (matches.length > 0) {
          rel.data.attributes = matches[0].attributes
        }

        result[element] = rel
      }

      return result
    }, {})
  }

  return this;
})