define([
  'dojo/request'
], function (
  request
) {
  this.init = function () {
    request('http://backend-dev.leaf.ikshare.com/jsonapi/node/kiosk_llc?include=field_logo', {
      sync: true,
      handleAs: 'json'
    }).then(
      function(json) {
        console.log(json);

      },
      function (error) {
        console.error(error.message);
      }
    );

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
      request('/api/' + app.indexCfg.ik.version + '/storymaps.json', {
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
  }

  return this;
})