define([
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/_base/Deferred",
  "dojo/on"
], function (declare, lang, Deferred, on) {

  // a lot of stuff in this file seems to be pretty standard across dgrid mixins
  // found in other github/arcgis projects.
  // cleaned up in March 2018 to make the code clearer
  // and to reduce superfluous console errors on cancelled agol queries.

  // called by _trackError in context of list/grid, if an error is encountered
  function emitError(err) {
    if (typeof err !== "object") {
      // create an actual Error object if we don't already have one
      err = new Error(err);
    }

    if (err.dojoType === 'cancel') {
      // don't fire dgrid-error events when requests are cancelled
      return;
    }

    // store grid reference for access within Error obj
    err.grid = this;

    var emitObj = {
      grid: this,
      error: err,
      cancelable: true,
      bubbles: true
    };
    var evt = on.emit(this.domNode, 'dgrid-error', emitObj);

    if (evt) {
      console.warn(err);
    }
  }

  var _RefreshMixin = declare(null, {

    _trackError: function (func) {
      var result;

      if (typeof func === "string") {
        func = lang.hitch(this, func);
      }

      try {
        result = func();
      } catch (err) {
        emitError.call(this, err);
      }
      return Deferred.when(
        result,
        // success callback instead of `null` in _StoreMixin:
        lang.hitch(this, function () {
          // fire 'refresh' event
          on.emit(this.domNode, "refresh", {
            cancelable: true,
            bubbles: true
          });
        }),
        lang.hitch(this, emitError)
      );
    }
  });

  return _RefreshMixin;

});