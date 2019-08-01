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
  }

  return this;
})