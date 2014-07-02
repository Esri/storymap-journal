Map Journal
===========

The Story Map Journal is ideal when you want to combine narrative text with maps and other embedded content. A Map Journal contains entries, or sections, that users simply scroll through. Each section in a Map Journal has an associated map, image, video or web page. Actions can also be defined in journal sections so that, for example, clicking a word automatically zooms the section’s map to a particular location.

![App](https://raw.github.com/Esri/map-journal-storytelling-template-js/master/map-journal-storytelling-template-js.png)

[View it live](http://links.esri.com/storymaps/map_journal_example_side_panel) | 
[Details on Story Maps website](http://storymapsdev.arcgis.com/en/app-list/map-journal/) |
[User Download (source code not included)](http://links.esri.com/storymaps/map_tour_template_zip)

**Latest release is version 1.0.0**, if you want to be informed of new releases, we recommend you to watch these repository. See the [release page](https://github.com/Esri/map-journal-storytelling-template-js/releases) for release notes.

Readme content:
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

A Map Journal application can be created from [ArcGIS Online](http://arcgis.com), from the [Esri Story Maps website](http://storymaps.arcgis.com/) or from an [Portal for ArcGIS](http://www.esri.com/software/arcgis/arcgisserver/extensions/portal-for-arcgis) deployment. See [FAQ](#deployment) for more detail about deployment scenarios.
This repository provide the application source code for user that wants to host it themselves or developer that wants further customization.

For more information about the Map Journal, including a gallery of examples and a step-by-step tutorial, please see the [Map Journal](http://storymaps.arcgis.com/en/app-list/map-journal/) page on the [Esri Story Maps website](http://storymaps.arcgis.com/).
 
## Instructions

First create your Map Journal in ArcGIS Online using the [step-by-step tutorial](http://storymaps.arcgis.com/en/app-list/map-tour/tutorial/)

1. [Download the application](http://links.esri.com/storymaps/map_tour_template_zip)
2. Deploy the application on your webserver. See [FAQ: how to deploy on a webserver](#) if needed
3. Edit index.html and look for the configuration section (line 38) and copy/paste your application ID
4. Navigate to index.html and enjoy (e.g., http://127.0.0.1/MapJournal/index.html)

## Feedback

We would love to hear from you!
* [StoryMaps Website](http://storymaps.arcgis.com/)
* [@EsriStoryMaps](http://twitter.com/EsriStoryMaps)
* [ArcGIS Blog](http://blogs.esri.com/esri/arcgis/)

## FAQ

### Can I deploy Map Tour on Portal for ArcGIS?
Yes, just deploy the application in the following folder `ArcGIS\Portal\webapps\arcgis#home\webmap\templates\MapJournal`. If this folder already contain files, make sure to clear it before. Then refer your Portal documentation for instructions on publishing a new web application item and adding it to the web application gallery. If you choose to deploy the template in any other folder, some configuration will be required (see index.html configuration). Also note that the web application gallery preview feature won't be functional and give a 404 error.

### Can the template be used offline?
Yes, by using Portal for ArcGIS. When deployed on a Portal for ArcGIS instance, the application doesn't require any external service to function. But by default the template will still include the header social buttons and Journal author are able to import pictures and videos from the some online pictures hosting services. These options can be disabled individually through the configuration file app/config.js.

### Can I use the builder with the downloadable without Portal for ArcGIS?
No, not at this time. Let us know if you are interested.

## Support

Please check out [Story Maps forum](http://forums.arcgis.com/forums/264-Story-Maps

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

A copy of the license is available in the repository's [license.txt](https://raw.github.com/Esri/map-journal-storytelling-template-js/master/license.txt) file.

Some open-source components of this project are licensed under other License terms, see src/lib-app/ folder for respective licence files.

| Library               | License   |
| --------------------- | --------- |
| Bootstrap 			| MIT 		|
| CKEditor 				| LGPL		|
| jQuery 				| MIT 		|
| jQuery Colorbox 		| MIT 		|
| Spectrum 				| MIT 		|
| iDangero.us swiper 	| MIT 		|
| ZeroClipboard 		| MIT 		|
| History 				| BSD 		|
| jQuery UI 			| MIT 		|
| FastClick 			| MIT 		|
| Hammer.JS 			| MIT 		| 
| jQuery mousewheel 	| MIT 		|
| jQuery UI Touch Punch | MIT 		|
| Spin.js 				| MIT 		|

[](Esri Tags: Storytelling MapJournal ArcGIS-Online Template Map Journal)
[](Esri Language: JavaScript)
