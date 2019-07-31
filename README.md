Story Map Journal
=================

This is the IK Wrapper version of ESRI's storymap-journal. This will be deployed for LEAF's implementation. This code introduces a Wrapper module, among many other changes, which displays a predetermined list of Story Maps.

## Installing

`yarn install`

## Running

 - `yarn run start-dev` - runs the server in development mode. Access the application through the browser.
 - `yarn run build` - executes the grunt cli builder which will create deploy code (compresses and compiles JS).
 - `yarn run start` - Runs the server in production mode. Access the application through the browser.
 - `yarn run start-electron-dev` - Runs the application in development mode and opens it in an Electron window.
 - `yarn run start-electron` - Runs the application in production and opens it in an Electron window.
 - `yarn run build-release[-{mac,windows}]` - Build electron package for mac, windows, or both.

## Licensing
Copyright 2014-2018 Esri

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

Some open-source components of this project are licensed under other License terms. See the `src/lib-app/` folder for respective licence files.

| Library               | License   |
| --------------------- | --------- |
| Bootstrap       | MIT     |
| CKEditor        | LGPL    |
| jQuery        | MIT     |
| jQuery Colorbox     | MIT     |
| iDangero.us swiper  | MIT     |
| History.js      | BSD     |
| jQuery UI       | MIT     |
| FastClick       | MIT     |
| Hammer.JS       | MIT     |
| jQuery mousewheel   | MIT     |
| jQuery UI Touch Punch | MIT     |
| Clipboard.js          | MIT       |
