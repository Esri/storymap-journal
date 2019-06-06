define([
  'lib-build/tpl!./Menu',
  'lib-build/css!./Menu'
], function(
  viewTpl,
  viewCss
) {
  return function Menu() {
    this.init = function() {
      console.log('common.menu.Menu - init');
      console.log('common.menu.Menu - pages', pages);

      //this.buildMenu();
      $('#ik-menu').append(viewTpl());
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
  }


});
