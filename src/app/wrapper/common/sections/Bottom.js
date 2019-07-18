define([
  'lib-build/tpl!../../tpl/sections/Bottom/Storymap',
  'lib-build/css!./Bottom'
], function (
  bottomStorymapTpl,
  bottomCss
) {
  return function Bottom () {
    var render = function () {
      var currentState = ik.wrapper.state.get('wrapper-state');

      switch (currentState) {
        case 'active':
          this.renderActive();
          break;
        case 'storymap':
          this.renderStorymap();
          break;
        default: // attract screen
          this.renderActive();
      }
    }

    /**
     * Render Templates
     * Bind Javascript Events
     */

    this.renderActive = function () {
      //
    }

    this.renderStorymap = function () {
      $('.bottom__storymap').html(bottomStorymapTpl({
        title: 'Get Involved',
        body: '<p>Text <b>LEAF</b> to 89304 or see an attendant</p>'
      }));
    }

    return {
      render: render.bind(this)
    }
  }
});