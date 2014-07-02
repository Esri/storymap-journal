# TOC Widget

## Features
The TableOfContents widget provides a table of contents that allows the toggling of layer visibility and sublayers.  The style can be completely changed and skinned to match your own map design.

[View it live](http://esri.github.io/arcgis-dijit-table-of-contents/)

## Quickstart
	var map = response.map;
    var layers = response.itemInfo.itemData.operationalLayers;
  
    myWidget = new TableOfContents({
      map: map,
      layers: layers
    }, "TableOfContents");
    myWidget.startup();

 [New to Github? Get started here.](https://github.com/)
 

## Setup
Set your dojo config to load the module.

	var package_path = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
	var dojoConfig = {
		// The locationPath logic below may look confusing but all its doing is 
		// enabling us to load the api from a CDN and load local modules from the correct location.
		packages: [{
			name: "application",
			location: package_path + '/js'
		}]
	};

## Require module
Include the module for the TOC.

	require(["application/TableOfContents", ... ], function(TableOfContents, ... ){ ... });

## Constructor

TableOfContents(options, srcNode);

### Options (Object)
|property|required|type|value|description|
|---|---|---|---|---|
|theme||string|TableOfContents|CSS Class for uniquely styling the widget.|
|map|x|Map|null|ArcGIS JS Map|
|layers|x|Array|null|Array of layers|
|visible||Boolean|true|Show the widget|

#### Layers Object
This is what the layers array should look like. It follows the response from a webmap's operational layers.

	layers = [
    	{
     	   layer: LayerObject
    	    defaultSymbol: Symbol
    	    title: String
    	},
    	{
    		...
    	}
	];


## Properties
|property|type|description|
|---|---|---|
|theme|string|CSS Class for uniquely styling the widget.|
|map|Map|ArcGIS JS Map|
|layers|Array|Array of layers|
|visible|Boolean|Show the widget|
|loaded|Boolean|If the widget has been loaded.|

## Methods
### startup
startup(): Start the widget.
### destroy
destroy(): Destroy the widget.
### show
show(): Show the widget.
### hide
hide(): hide the widget.
### refresh
refresh(): reload all layers and properties that may have changed.

## Events
### load
#### Example
	on(widget, 'load', function(evt){…})
#### Event Object
	{}
	
	
### toggle
#### Example
	on(widget, 'toggle', function(evt){…})
#### Event Object
	{
		expand: <Boolean>,
        index: <integer>
	}
	


## Requirements

* Notepad or HTML editor
* A little background with Javascript
* Experience with the [ArcGIS Javascript API](http://www.esri.com/) would help.

## Resources

* [ArcGIS for JavaScript API Resource Center](http://help.arcgis.com/en/webapi/javascript/arcgis/index.html)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)
* [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Anyone and everyone is welcome to contribute.

## Licensing
Copyright 2012 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/arcgis-dijit-table-of-contents/master/license.txt) file.

[](Esri Tags: ArcGIS JavaScript API Layer TOC Table of Contents Public)
[](Esri Language: JavaScript)
