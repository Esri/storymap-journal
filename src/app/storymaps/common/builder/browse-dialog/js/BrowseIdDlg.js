define([
  "require",
  "dojo/_base/declare",
  "dojo/_base/connect",
  "dojo/_base/lang",
  "dojo/_base/event",
  "dojo/dom",
  "dojo/keys",
  "dijit/registry",
  "dojo/on",
  "dojo/i18n!commonResources/nls/webmap.js?v=" + app.version,
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dijit/_WidgetsInTemplateMixin",
  "./Grid",
  "esri/arcgis/Portal",
  "text!./templates/BrowseIdDlg.html",
  "dijit/Dialog",
  "dijit/form/Select",
  "dijit/form/Button"
], function(
  require,declare,connect,lang, dojoEvent, dom, keys, registry, on, i18n, _WidgetBase,
  _TemplatedMixin,_WidgetsInTemplateMixin,Grid, esriPortal, template
) {
  return declare([_WidgetBase,_TemplatedMixin, _WidgetsInTemplateMixin], {
    templateString: template,


    constructor: function(args){

        lang.mixin(this,args);
    },
    postMixInProperties: function() {

      this.inherited(arguments);
      this.i18n = {};
      if(this.galleryType === "webmap"){
        this.i18n = i18n.configure.mapdlg;
      }else{
        this.i18n = i18n.configure.groupdlg;
      }
      this.selected = null;
    },

    postCreate: function() {

      //Populate the query dropdown box. This dropdown is used to determine the scope of the search.
      var items = [];
      items.push({
        label: this.i18n.items.contentLabel,
        value: "content"
      },{
        label: this.i18n.items.organizationLabel,
        value: "org"
      }, {
        label: this.i18n.items.onlineLabel,
        value: "online"
      });
      //add my favorites to the dropdown for web maps
      if(this.galleryType === "webmap"){
        items.push({
          label: this.i18n.items.favoritesLabel,
          value: "favorites"
        });
      }
      this._filterSelect.set("options", items);
      this._filterSelectHandler = on(this._filterSelect, "change", lang.hitch(this, "doSearch"));
      
      var query = {};
      var portalUser = this.portal.user;
      if(portalUser.username){
        query.q = "owner: " + portalUser.username;
      }
      if(this.galleryType === "webmap"){
        query.q +=  ' type:"Web Map" -type:"Web Mapping Application"';
      }
      this._grid = new Grid({
        "portal": this.portal,
        "query": query,
        "pagingLinks": true,
        "galleryType": this.galleryType,
        "view": "gallery" //gallery or details
      }, "gallery");
      this._grid.refresh();
      //Set the web map as the selected item
      on(this._grid, "onItemClick",lang.hitch(this, function(e){
        var row = e.row;
        if(e.row.data && e.row.data.id){
          //this.selected = row.data.id;
			this.selected = row.data;
        }

      }));
      // Attempt to fix fast click conflict
      // Works fine for cancel button but not so much for the dropdown
      // The dropdown is populated when item is clicked but can't find the good event to catch
      // or i think I found it but still doesn't works
      $("#dijit_form_Button_2_label, .dijitSelectLabel, .dijitButtonText, .dijitButtonContents, .dijitArrowButtonInner, .dijitArrowButtonContainer, .dijitMenuItem, .dijitMenuItemLabel").addClass("needsclick")
      
    },
    destroy: function(){
      this._filterSelectHandler.remove();
      this.inherited(arguments);

    },

    doSearch: function() {
      var filter = this._filterSelect.get("value"),
        portalUser = this.portal.user;

       var parameters = [];
       
       // If the value looks to be a WebMap ID -> no filter applied on the user or org
       if(this.searchText.getValue() && this.searchText.getValue().match(/^[A-Fa-f0-9]{32}$/)){
        parameters["id"] = this.searchText.getValue();
       }
       else {
	       // Look for title
    	   if(this.searchText.getValue()){
	        parameters["title"] = this.searchText.getValue();
	       }
	
    	   // Apply regular filter
    	   
	       if(filter === "org"){
	        parameters["orgid"] = portalUser.orgId;
	       }
	       if(filter === "content"){
	        parameters["owner"] = portalUser.username;
	       }
	       if(filter === "favorites"){
	          parameters["group"] = portalUser.favGroupId;
	       }
	       if(filter === "online" && this.galleryType === "group"){
	        var search = this.searchText.getValue();
	        if(search === ""){
	          //Return all online groups. We need to provide a query param we can't just return all groups
	          //so let's set the access to public in this case so we only see public groups.
	          parameters["access"] = "public";
	        }
	       }
       }
       if(this.galleryType === "webmap"){
        parameters["type"] = '"Web Map" -type:"Web Mapping Application"';
       }
       var qs = "";
       for(var key in parameters){
        var val = parameters[key];
        qs += key + ":" + val + " ";
       }

        var query = {};
        query.q = lang.trim(qs);
        
        
        console.log(query.q)
        
        this._grid.set("query", query);
        this._grid.refresh();

    },

    _onSearchClick: function(e) {
       dojoEvent.stop(e);
      if (e != null && e.prefentDefault) {
        e.preventDefault();
      }

      this.doSearch();
    },
    _onSearchBoxFocus: function(e) {
    },

    _onSearchBoxBlur: function(e) {
      if (this.searchText.getValue() == "") {

      }
    },

    _onSearchKeyPress: function(e) {
      if (e.keyCode == keys.ENTER) {
        dojoEvent.stop(e);
        this._onSearchClick(e);
      }

      this.onSearchFieldKeyPress(e);
    },

    // event
    onSearchFieldKeyPress: function(event) {
      // do nothing
    },

    onClose: function() {
      registry.byId('browse-id-dialog').hide();
    },
    onCancel: function(){
      //clear the dgrid selection and close the dialog
      this.set("selected", null);
      registry.byId('browse-id-dialog').hide();
    },
    show: function(params){
      registry.byId('browse-id-dialog').show();
      this._grid.refresh();
    }
  });
});