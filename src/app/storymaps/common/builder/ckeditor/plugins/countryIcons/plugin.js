CKEDITOR.plugins.add('countryIcons', {
  icons: 'capital,currency,messageBox,population',
  init: function (editor) {
    editor.addCommand( 'addCapitalIcon', {
      exec: function (editor) {
        editor.insertHtml('<span class="countryIcon countryIcon--capital"> </span>');
      }
    });

    editor.addCommand( 'addCurrencyIcon', {
      exec: function (editor) {
        editor.insertHtml('<span class="countryIcon countryIcon--currency"> </span>');
      }
    });

    editor.addCommand( 'addLanguageIcon', {
      exec: function (editor) {
        editor.insertHtml('<span class="countryIcon countryIcon--language"> </span>');
      }
    });

    editor.addCommand( 'addPopulationIcon', {
      exec: function (editor) {
        editor.insertHtml('<span class="countryIcon countryIcon--population"> </span>');
      }
    });

    editor.ui.addButton('Capital', {
      label: 'Capital Icon',
      command: 'addCapitalIcon',
      toolbar: 'countryIcons'
    });

    editor.ui.addButton('Currency', {
      label: 'Currency Icon',
      command: 'addCurrencyIcon',
      toolbar: 'countryIcons'
    });

    editor.ui.addButton('MessageBox', {
      label: 'Language Icon',
      command: 'addLanguageIcon',
      toolbar: 'countryIcons'
    });

    editor.ui.addButton('Population', {
      label: 'Population Icon',
      command: 'addPopulationIcon',
      toolbar: 'countryIcons'
    });
  }
});