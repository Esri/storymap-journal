Map Journal
===========

The Story Map Journal is ideal when you want to combine narrative text with maps and other embedded content. A Map Journal contains entries, or sections, that users simply scroll through. Each section in a Map Journal has an associated map, image, video or web page. Actions can also be defined in journal sections so that, for example, clicking a word automatically zooms the section’s map to a particular location.

![App](map-journal-storytelling-template-js.png)

[View it live](http://links.esri.com/storymaps/map_journal_example_side_panel) | 
[Map Journal page on Esri Story Maps website](http://storymaps.arcgis.com/en/app-list/map-journal/) |
[User Download (source code not included)](http://links.esri.com/storymaps/map_journal_template_zip)

**Latest release is version 1.0.1**, if you want to be informed of new releases, we recommend you to watch this repository. See the [release page](https://github.com/Esri/map-journal-storytelling-template-js/releases) for release notes.

## Help content

 * [Introduction](#introduction)
 * [Instructions](#instructions)
 * [Feedback](#feedback)
 * [FAQ](#faq)
 * [Support](#support)
 * [Customize the look and feel](#customize-the-look-and-feel)
 * [Developer guide](#developer-guide)
 * [Issues](#issues)
 * [Contributing](#contributing)
 * [Licensing](#licensing)

## Introduction

A Map Journal application can be created from [ArcGIS Online](http://arcgis.com), from the [Esri Story Maps website](http://storymaps.arcgis.com/) or from a [Portal for ArcGIS](http://www.esri.com/software/arcgis/arcgisserver/extensions/portal-for-arcgis) deployment. The Journal's data are stored in a Web Application Item (this include the narrative content, reference to the webmap(s), pictures, videos and the settings).
This repository provide the application source code for developers that wants to implement UI customization.
See [FAQ](#deployment) for more details.

For more information about the Map Journal, including a gallery of examples and a step-by-step tutorial, please see the [Map Journal](http://storymaps.arcgis.com/en/app-list/map-journal/) page on the [Esri Story Maps website](http://storymaps.arcgis.com/).

## Instructions

First create your Map Journal in ArcGIS Online using the [step-by-step tutorial](http://storymaps.arcgis.com/en/app-list/map-journal/tutorial/).
Once your story is ready, you have to find its ID in ArcGIS Online. The ID is a 32 characters strings that you will find in your browser bar when you are consulting your journal.

![App ID](map-journal-help-application-id.png)

1. [Download the application](http://links.esri.com/storymaps/map_journal_template_zip)
2. Deploy the application on your webserver. See [FAQ](#how-to-deploy-the-application-on-a-webserver) for details
3. Edit index.html, find look for the configuration section on line 38 and paste your application ID
4. Navigate to index.html (e.g., `http://127.0.0.1/MapJournal/index.html`)

Enjoy!
You can continue to use the builder in ArcGIS Online to modify your story.
See [customize the look and feel section](#customize-the-look-and-feel) or [developer guide](#developer-guide) if you want to modify the app.

## Feedback

We would love to hear from you!
* [StoryMaps Website](http://storymaps.arcgis.com/)
* [Let us know about your application](http://storymapsdev.arcgis.com/en/gallery/submission-form/)
* [@EsriStoryMaps](http://twitter.com/EsriStoryMaps)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)

## FAQ

### Deployment

Deploying a Map Journal require to use ArcGIS Online or Portal for ArcGIS. The Journal content have to be created using the Map Journal builder and will live in a Web Application Item.

#### Can I use the template without ArcGIS Online or Portal for ArcGIS?
This is not a supported use case at that time. Please let us know if you are interested by that scenario. 
Map Journal rely heavily on the Portal for ArcGIS API but it is doable to modify the application to support other scenario.

#### Where is the data stored?
The Journal's data are stored in a Web Application Item in ArcGIS Online or Portal for ArcGIS. This include the narrative content, reference to the webmap(s), reference to the pictures, videos, web page and the settings.

The image and videos that you include in your Journal using the builder are not copied in ArcGIS Online. You have to make sure that these medias as well as the webmaps you are using are accessible to your audience without unneeded authentication.

#### Can I deploy Map Journal on Portal for ArcGIS?
Yes, just deploy the application in the following folder `ArcGIS\Portal\webapps\arcgis#home\webmap\templates\MapJournal`. If this folder already contain a previous version, make sure to first clear the folder. Then refer your Portal documentation for instructions on publishing a new web application item and adding it to the web application gallery. If you choose to deploy the template in another folder, some configuration will be required (see index.html). 


Then you should configure Map Journal to use the JavaScript API deployed on your Portal and not the one in ArcGIS Online. This is optional but strongly recommended as some incompatibility may occur. To change the JS API, edit `index.html` and locate `pathJSAPI` around line 100.


Also note that the web application gallery preview feature redirect to StoryMaps website, the target page can be modified in `app/config.js > HELP_URL`.

#### Can the template be used offline?
Yes, by using Portal for ArcGIS. When deployed on a Portal for ArcGIS instance, the application doesn't require any external service to function. But by default the template will still include the header social buttons and Journal author are able to import pictures and videos from the some online pictures hosting services. These options can be disabled individually through the configuration file app/config.js.

#### Can I use the builder without Portal for ArcGIS?
No, for technical reason at this time the builder can only be used in ArcGIS Online or Portal for ArcGIS. 
Let us know if you are interested, we can give you the technical details and help you modify the application to enable the builder.

#### How to deploy the application on a webserver?
Coming soon.

## Support

Please check out [Story Maps space on GeoNet](https://geonet.esri.com/community/gis/web-gis/storymaps/content).

## Customize the look and feel

Coming soon.

## Developer guide

Coming soon.

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing
Copyright 2013 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE.txt](LICENSE.txt) file.

Some open-source components of this project are licensed under other License terms, see `src/lib-app/` folder for respective licence files.

| Library               | License   |
| --------------------- | --------- |
| Bootstrap 			| MIT 		|
| CKEditor 				| LGPL		|
| jQuery 				| MIT 		|
| jQuery Colorbox 		| MIT 		|
| Spectrum 				| MIT 		|
| iDangero.us swiper 	| MIT 		|
| ZeroClipboard 		| MIT 		|
| History.js			| BSD 		|
| jQuery UI 			| MIT 		|
| FastClick 			| MIT 		|
| Hammer.JS 			| MIT 		| 
| jQuery mousewheel 	| MIT 		|
| jQuery UI Touch Punch | MIT 		|
| Spin.js 				| MIT 		|

[](Esri Tags: Storytelling MapJournal ArcGIS-Online Template Map Journal)
[](Esri Language: JavaScript)
