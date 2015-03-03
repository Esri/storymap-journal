define([ 
  "dojo/_base/declare",
  "dojo/Evented", 
  "dojo/string", 
  "dojo/_base/lang", 
  "dojo/_base/array", 
  "dijit/_WidgetBase", 
  "dijit/_TemplatedMixin", 
  "dijit/_WidgetsInTemplateMixin", 
  "dgrid/Grid", 
  "./_RefreshMixin",
  "dgrid/Selection",
  "dgrid/extensions/Pagination", 
  "dojo/query", 
  "dojo/store/Memory", 
  "dojo/store/Cache", 
  "./PortalItemStore", 
  "dojo/store/Observable", 
  "put-selector/put", 
  "dgrid/util/mouse"],
  function (
    declare, Evented, dojoString, lang, array, WidgetBase, TemplatedMixin, 
    WidgetsInTemplateMixin, Grid, RefreshMixin, Selection, Pagination, 
    query, Memory, Cache, PortalItemStore, Observable, 
    put, mouseUtil
    ) {
    return declare([WidgetBase, Evented], {
      postMixInProperties: function () {
        this.inherited(arguments);

        this._supportedViews = ["gallery", "details"];

        this._galleryTemplate = this._galleryTemplate ||
          "<div class='itemGrid'>" +
            "<img alt='' src='${thumbnailUrl:_formatThumbnail}'>" +
            "<div class='truncate itemTitle'>${title:_formatTitle}</div>" +
            "<span class='itemOwner'>${owner}</span>" +
            "<p class='itemText snippet' style='display:none;'>${snippet}</p>" +
          "</div>";

        this._detailsTemplate = this._detailsTemplate ||
          "<div class='itemDetail'>" +
            "<img alt='' src='${thumbnailUrl:_formatThumbnail}'>" +
            "<p class='truncate itemTitle'>${title}</p>" +
              "<span class='itemOwner'>${owner}</span>" +
            "</p>" +
            "<p class='itemText'>${snippet}</p>" +
         "</div>";

        this._renderers = lang.mixin(this._renderers || {}, {
          gallery: lang.hitch(this, function (obj) {
            obj.snippet = obj.snippet || "";
            var div = put("div"),
              node = new (declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
                templateString: dojoString.substitute(this._galleryTemplate, obj, null, this)
              }))();
            div.appendChild(node.domNode);
            return div;
          }),
          details: lang.hitch(this, function (obj) {
            obj.snippet = obj.snippet || "";
            var div = put("div"),
              node = new (declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
                templateString: dojoString.substitute(this._detailsTemplate, obj, null, this)
              }))();
            div.appendChild(node.domNode);
            return div;
          })
        });
      },
      _formatTitle: function(title){
        if(!title){
          title = "";
        }
        return title;
      },
      _formatThumbnail: function (thmb) {
        return thmb || "app/storymaps/common/_resources/icons/browse-dialog/default.png";
      },

      buildRendering: function () {
        this.inherited(arguments);
        var _CustomGrid = declare([Grid, Pagination, Selection, RefreshMixin]),
          columns = this.columns || {
            'id': {'label': 'id'},
            'title': {'label': 'title'},
            'type': {'label': 'type'},
            'modified': {'label': 'last modified'},
            'snippet': {'label': 'snippet'}
          };

        this._view = this.view || "gallery";
        this._query = this.query;
        this._queryOptions = this.queryOptions || {"sort":this.sort || [{ attribute: "title", descending: false }]};
        this._store = this.store ||  new Cache(new PortalItemStore({'portal': this.portal, galleryType: this.galleryType}), new Memory({data:[]}));
        this._rowsPerPage = this.rowsPerPage || 8;
        this._sort = this.sort || [{ attribute: "title", descending: false }];
        this._pagingLinks = !this.pagingLinks ? false : 8;
      
        // !!!!
        // Seems to be quite important to assign an id to the grid, and apply
        // styles to that id in css, or it wont work correctly in a dijit.layout
        // !!!!
        this._grid = new _CustomGrid({
          columns: columns,
          showHeader: false,
          selectionMode: "single",
          renderRow: this._renderers[this._view],
          store: this._store,
          query: this._query,
          loadingMessage: "Loading...",
          noDataMessage: "No results found",
          showLoadingMessage: true,
          firstLastArrows: this._pagingLinks,
          previousNextArrows: this._pagingLinks,
          rowsPerPage: this._rowsPerPage,
          pagingLinks: this._pagingLinks,
          sort: this._sort
        }, this.domNode);
        this._grid.startup();

      },

      postCreate: function() {
        this.inherited(arguments);

        this.own(
          this._grid.on(mouseUtil.enterRow, lang.hitch(this, "_showSnippet", true)),
          this._grid.on(mouseUtil.leaveRow, lang.hitch(this, "_showSnippet", false)),
          this._grid.on("refresh", lang.hitch(this, "_onGridRefresh")),
          this._grid.on(".dgrid-row:click", lang.hitch(this, "_onRowClick"))
        );
      },
      _onGridRefresh: function(evt){
        this.emit("onRefresh", {currentPage:this._grid._currentPage});
        if (this._pagingLinks){
          query(".dgrid-navigation")[this._grid._total <= this._grid.rowsPerPage ? "addClass" : "removeClass"]("hide");
          query(".dgrid-pagination")[this._grid._total === 0 ? "addClass" : "removeClass"]("hide");
        }
      },

      _onRowClick: function(evt){
        this.emit("onItemClick", {row: this._grid.row(evt)});
      },

      _showSnippet: function(show, event) {
        var row = this._grid.row(event);
        if (row){
          query(".itemGrid .itemOwner", row.element).style("display", (show ? "none": ""));
          query(".itemGrid > img", row.element).style("display", (show ? "none" : ""));
          query(".itemGrid .snippet", row.element).style("display", (show ? "" : "none"));
        }
      },

      _getGridAttr: function () {
        return this._grid;
      },

      refresh: function() {
        if (this._grid){
         this._grid.set("query", this._query, this._queryOptions);
        }
      },

      gotoPage: function(page) {

        this._grid.query = this._query;
        this._grid.queryOptions = this._queryOptions;
        this._grid._sort = this._queryOptions.sort;
        this._grid.gotoPage(page);
      },

      _setViewAttr: function (view) {
        view = array.indexOf(this._supportedViews, view) === -1 ? this._view : view;
        this._view = view;
        if (this._grid){
          this._grid.renderRow = this._renderers[view];
          put(this._grid.domNode, "!gallery!details." + view);
        }
      },

      _setStoreAttr: function (store) {
        this._store = store;
      },

      _setQueryAttr: function (query, queryOptions) {
        this._query = query || this._query;
        this._queryOptions = queryOptions || this._queryOptions;
      },

      _setItemsAttr: function (items) {
        this._store = this._store || new Observable(Memory({"data": items}));
        this._store && this._store.setData ? this._store.setData(items) : this._store = new Observable(Memory({"data": items}));
        this.set("store", this._store);
        this.set("view", this._view);
      }
    });
  });