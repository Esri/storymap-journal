Story Map Journal
=================

This is the IK Wrapper version of ESRI's storymap-journal. This will be deployed for LEAF's implementation. This code introduces a Wrapper module, among many other changes, which displays a predetermined list of Story Maps.

## Installing
`yarn install`

Copy `.env.example` as `.env`

## Environment Variables
 - `BACKEND_URL`: the drupal back-end url
 - `BUILD_TARGET`: Set to electron to build a successful electron application
 - `ELECTRON_HEIGHT`, `ELECTRON_WIDTH`: the electron window height and width
 - `ELECTRON_FULLSCREEN`: 1 to turn on, 0 for windowed mode
 - `KIOSK_REGION`: The region content a cdi kiosk will highlight. Current examples `Americas`, `Caribbean`, `Africa`.
 - `KIOSK_VERSION`: `llc` or `cdi`
 - `KIOSK_UUID`: The drupal node uuid for the kiosk content. You must obtain this UUID from the Drupal back-end or else this wrapper won't know from where to populate its content.

## Scripts
### Development
- `yarn run start-dev`: runs the server in development mode. Access the application through the browser.
- `yarn run start-electron-dev`: Runs the application in development mode and opens it in an Electron window.
### Building Application
- `yarn run build-release[-{mac,windows}]`: Build electron package for mac, windows, or both.
### Scripts of note
- `yarn run build`: executes the grunt cli builder which will create deploy code (compresses and compiles JS).
- `yarn run build-sass`: recompile the scss files.
- `yarn run set-env`: Prepares the build.json configuration file for electron-builder.

## Filesystem
- `src/app/storymaps`: Files specific to the ESRI Story Map Journal.
- `src/app/wrapper`: Files which belong to the wrapper/kiosk application
- `src/app/wrapper/styles`: The SCSS files. **Please update wrapper styles here**
- `src/index.html`: The html file which is loaded.
- `src/app/{main-app.js,main-config.js}`: The javascript files which bootstrap the Dojo application.
- `api`: Contains the JSON files which are accessed by the Wrapper. They are created or updated when the application is started.
- `server`: Scripts which must be run serverside to populate data accessible in the Browser/Electron window Javascript application.
- `static`: Static files referenced by the Wrapper applications and downloaded from Drupal back-end.

## Developing on the browser
If you choose to develop in the browser use `yarn run start-dev` and visit `https://localhost:3000?version={KIOSK_VERSION}` in the browser. `KIOSK_VERSION` should be specified so that environment variables are passed into the browser window Javascript application.

Use Google Chrome for development since Electron is based on Chrome. Chromium will work up to the point of testing MP4/H.264 videos (it can not decode the video). Firefox and Safari are fine but unnecessary since we don't really need to worry about support them.

The best way to emulate the Electron application is to use the Developer Tools and the Device Emulator. Set the width and height to 1080 x 1920 or the values specified in your .env file.

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
