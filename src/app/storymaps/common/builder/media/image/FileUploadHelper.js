define([
  'dojo/Deferred',
  'dojo/promise/all',
  'dojo/_base/lang',
  'esri/request',
  './ImageUploadHelper'

], function(Deferred, all, lang, esriRequest, imageUploadHelper) {

  return {

    uploadTypesAccepted: {
      image: ['png', 'jpeg', 'jpg', 'gif', 'bmp']
    },
    ignoreNames: [imageUploadHelper.photoSettings.logoName],


    checkDnD: function() {
      // check for dnd capabilities up front, not on every render
      return !navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) &&
                    'draggable' in document.createElement('span') &&
                    typeof(window.FileReader) !== 'undefined';

    },

    disableWindowDnD: function() {
      if (window.dndDisabled) {
        return;
      }
      // prevent drag and drop anywhere in the window
      // (by default, would open file and lose place in app configuration)
      window.dndDisabled = true;
      window.addEventListener('dragover', this.preventEvent);
      window.addEventListener('drop', this.preventEvent);

    },

    preventEvent: function(evt) {
      if (evt) {
        evt.preventDefault();
      }
    },

    preventAndStopEvent: function(evt) {
      if (evt) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },

    findFilesFromDrop: function(evt) {
      // jquery event doesn't contain dataTransfer property, so use originalEvent.
      evt = evt.originalEvent || evt;
      if (evt.dataTransfer && evt.dataTransfer.files && evt.dataTransfer.files.length) {
        return evt.dataTransfer.files;
      }
      return false;

    },

    validateTypeOnDrag: function(items) {
      var i = 0, matching = true;
      while (i < items.length && matching) {
        var simplifiedType = this.getSimplifiedType(items[i].type);
        matching = _.has(this.uploadTypesAccepted, simplifiedType);
        i++;
      }
      return matching;
    },

    validateFile: function(file) {
      var ext = this.getExt(file.name, file.type);
      var simplifiedType = this.getSimplifiedType(file.type);
      var comparison = _.flatten(_.map(this.uploadTypesAccepted, function(extensions) {
        return extensions;
      }));
      return comparison.some(function(filetype) {
        return filetype === ext || filetype === file.type || filetype === simplifiedType;
      });
    },

    getSimplifiedType: function(originalType) {
      return originalType.substring(0, originalType.indexOf('/'));
    },

    getExt: function(fileName, fileType) {
      var lastDot = fileName.lastIndexOf('.');
      if (lastDot >= 0) {
        return fileName.substr(lastDot + 1).toLowerCase();
      }
      return fileType.substr(fileType.indexOf('/') + 1);
    },

    getNameWithoutExtension: function(fileName) {
      var lastDot = fileName.lastIndexOf('.');
      if (lastDot >= 0) {
        return fileName.substr(0, lastDot);
      }
      return fileName;
    },

    getStrippedName: function(resourceName) {
      resourceName = this.getNameWithoutExtension(resourceName);
      return resourceName.replace('__thumb', '').replace(/__[0-9]{13}/, '').replace(/__w[0-9]+/, '');
    },

    getResourceWidth: function(resourceName) {
      var width = resourceName.match(/__w[0-9]+/);
      if (width) {
        return parseInt(width[0].slice(3), 10);
      }
      return null;
    },

    getDateNum: function(resourceName) {
      var dateNum = resourceName.match(/__[0-9]{13}/);
      if (dateNum) {
        return parseInt(dateNum[0].slice(2), 10);
      }
      return '';
    },

    getFileIdFromUrl: function(url) {
      var resourcesUrl = this.getResourcesUrl().replace(/http[s]?\:\/\//, '').replace(/^\/\//, '').replace('//', '/');
      var noProtocolUrl = url.replace(/http[s]?\:\/\//, '').replace(/^\/\//, '').replace('//', '/');
      if (noProtocolUrl.indexOf(resourcesUrl) < 0) {
        return '';
      }
      var fileName = decodeURIComponent(noProtocolUrl.substr(noProtocolUrl.lastIndexOf('/') + 1));
      return this.getStrippedName(fileName) + '_' + this.getDateNum(fileName);
    },

    getUploadBaseName: function(file, offset) {
      var name = this.getNameWithoutExtension(file.name);
      var ext = this.getExt(file.name, file.type);
      var baseName = name + '__' + (new Date().getTime() + (offset || 0));
      return baseName + '.' + ext;
    },

    processFile: function(file, isSingle) {
      var simplifiedType = this.getSimplifiedType(file.type);
      switch (simplifiedType) {
        case 'image':
          return imageUploadHelper.loadImageFromFile(file, isSingle);
        case 'audio':
        case 'video':
          console.warn('unhandled file type', simplifiedType);
          return;
        default:
          console.warn('unknown file type', file);
          return;
      }
    },

    uploadSingleResource: function(fileDetails) {
      var def = new Deferred();

      var uploadUrl = this.getUploadUrl();

      if (!uploadUrl) {
        def.reject();
        return def;
      }

      var startingName = fileDetails.baseName || fileDetails.name;

      var nameWithoutExt = this.getNameWithoutExtension(startingName);
      var ext = this.getExt(startingName);
      if (fileDetails.thumb) {
        fileDetails.thumbName = nameWithoutExt + '__thumb' + '.' + ext;
      }

      _.each(fileDetails.files, function(fd) {
        fd.name = nameWithoutExt + '__w' + fd.width + '.' + ext;
      });

      var formdata = this.getFormDataFromFileDetails(fileDetails);

      esriRequest({
        url: uploadUrl,
        handleAs: 'json',
        form: formdata
      }, {
        usePost: true
      }).then(lang.hitch(this, function(result) {
        if (result.success) {
          var resourcesUrl = this.getResourcesUrl();
          if (!resourcesUrl) {
            def.reject('No resourcesUrl');
            return;
          }

          if (fileDetails.files) {
            result.sizes = _.map(fileDetails.files, function(f) {
              return this.getSizesObj(f.name);
            }, this);
          } else if (fileDetails.file) {
            result.picUrl = this.getSizesObj(startingName).url;
            result.name = startingName;
          }

          if (fileDetails.baseName) {
            result.displayName = this.getStrippedName(fileDetails.baseName) + '.' + ext;
          }

          if (fileDetails.thumb) {
            result.thumbUrl = resourcesUrl + '/' + encodeURIComponent(fileDetails.thumbName);
          }

          def.resolve(result);
        }

      }));

      return def;
    },

    getSizesObj: function(fileName) {
      return {
        name: fileName,
        url: this.getResourcesUrl() + '/' + encodeURI(fileName),
        width: this.getResourceWidth(fileName)
      };
    },

    getAppItem: function() {
      return app.data && app.data.getWebAppItem && app.data.getWebAppItem();
    },

    getUploadUrl: function() {
      var ownerItemUrl = this.getOwnerItemUrl();
      if (!ownerItemUrl) {
        return false;
      }
      return ownerItemUrl + '/addResources';
    },

    getRemoveUrl: function() {
      var ownerItemUrl = this.getOwnerItemUrl();
      if (!ownerItemUrl) {
        return false;
      }
      return ownerItemUrl + '/removeResources';
    },

    getOwnerItemUrl: function() {
      var appItem = this.getAppItem();
      var portalSharingUrl = this.getSharingUrl();
      if (!appItem || !portalSharingUrl) {
        return false;
      }

      var ownerUrl = portalSharingUrl + '/content/users/' + appItem.owner;
      var folder = appItem.ownerFolder;
      return ownerUrl + (folder ? '/' + folder : '') + '/items/' + appItem.id;
    },

    getSharingUrl: function() {
      var portal = app.portal;
      if (!portal) {
        return false;
      }
      return '//' + portal.portalHostname.replace(/\//g, '') + '/sharing/rest';
    },

    getResourcesUrl: function() {
      var appItem = this.getAppItem();
      var portalSharingUrl = this.getSharingUrl();
      if (!appItem || !portalSharingUrl) {
        return false;
      }
      return portalSharingUrl + '/content/items/' + appItem.id + '/resources';
    },

    getPlainResources: function() {
      var def = new Deferred();

      var resourcesUrl = this.getResourcesUrl();
      if (!resourcesUrl) {
        def.reject();
        return def;
      }

      return esriRequest({
        url: resourcesUrl,
        handleAs: 'json',
        content: {
          num: 1000,
          f: 'json'
        }
      });
    },

    getStoryResources: function() {
      var def = new Deferred();

      this.getPlainResources()
        .then(lang.hitch(this, this.handleResourceReturn, def), lang.hitch(this, this.handleQueryError));

      return def;
    },

    handleResourceReturn: function(def, response) {
      var results = this.formatResults(response.resources);
      def.resolve(results);
    },

    removeResources: function(resource) {
      // note: this itemData comes from jquery's .data() function,
      // which lowercases all properties. so fileName becomes filename.
      var def = new Deferred();

      var removeUrl = this.getRemoveUrl();

      if (!removeUrl) {
        def.reject();
        return def;
      }

      var defArr = [];

      if (resource.file) {
        defArr.push(this.removeResource(resource.file));
      }
      if (resource.thumbFile) {
        defArr.push(this.removeResource(resource.thumbFile));
      }
      if (resource.sizes) {
        _.map(resource.sizes, function(size) {
          defArr.push(this.removeResource(size.name));
        }, this);
      }

      all(defArr).then(function(results) {
        var allSuccess = _.every(results, function(result) {
          return result.success;
        });
        if (!allSuccess) {
          def.reject();
        } else {
          def.resolve();
        }
      });

      return def;
    },

    removeResource: function(fileName) {
      return esriRequest({
        url: this.getRemoveUrl(),
        handleAs: 'json',
        content: {
          resource: fileName,
          f: 'json'
        }
      }, {
        usePost: true
      });
    },

    cleanupLogos: function(currentLogoUrl) {
      currentLogoUrl = currentLogoUrl || '';
      var fileName = currentLogoUrl.slice(currentLogoUrl.lastIndexOf('/') + 1);
      this.removeResourcesWithPrefix(imageUploadHelper.photoSettings.logoName, fileName);
    },

    removeResourcesWithPrefix: function(filePrefix, excludedName) {
      var def = new Deferred();
      var appItem = this.getAppItem();
      if (!appItem || !appItem.id) {
        def.resolve();
        return def;
      }
      excludedName = excludedName || '';
      this.getPlainResources().then(lang.hitch(this, function(results) {
        var removeArr = [];
        _.each(results.resources, function(r) {
          var fileName = r.resource;
          if (fileName.match('^' + filePrefix) && fileName !== excludedName) {
            removeArr.push(this.removeResource(r.resource));
          }
        }, this);
        if (removeArr.length) {
          all(removeArr).then(def.resolve, def.reject);
        }
        def.resolve();
      }), def.reject);

      return def;
    },

    formatResults: function(resources) {
      var resourcesUrl = this.getResourcesUrl();
      var self = this;

      var lookup = {};

      resources.forEach(lang.hitch(this, function(resource) {
        // resource is currently an object with a single
        // property, "resource", which is the file name. make a shortcut to it.

        var r = resource.resource;
        var ignore = _.some(this.ignoreNames, function(name) {
          return r.indexOf(name) === 0;
        });
        if (ignore) {
          return;
        }
        if (_.contains(this.ignoreNames, r)) {}
        var ext = self.getExt(r);
        // skip the unsupported resource types
        if (!self.getResourceType(ext)) { // generic 'image' or 'video'
          return;
        }

        var strippedName = self.getStrippedName(r);
        var dateNum = self.getDateNum(r);

        var fileId = strippedName + '_' + dateNum;

        if (!lookup[fileId]) {
          lookup[fileId] = {
            fileId: fileId,
            sizes: [],
            displayName: strippedName + '.' + ext,
            modified: dateNum ? new Date(dateNum) : '',
            thumbFile: '',
            resourcesUrl: resourcesUrl
          };
        }

        if (r.match('__thumb')) {
          lookup[fileId].thumbFile = r;
        } else {
          lookup[fileId].sizes.push({
            name: r,
            url: resourcesUrl + '/' + r,
            width: self.getResourceWidth(r) || 0
          });
        }

      }));
      _.each(lookup, function(fileDetails, fileId) {
        if (!fileDetails.sizes.length) {
          delete lookup[fileId];
        }
      });
      return _.toArray(lookup);
    },

    getResourceType: function(fileExt) {
      if (!fileExt) {
        return false;
      }
      fileExt = fileExt.toLowerCase();
      var fileType;
      _.some(this.uploadTypesAccepted, function(extensions, type) {
        if (_.contains(extensions, fileExt)) {
          fileType = type;
          return true;
        }
      });
      return fileType || false;
    },

    handleQueryError: function(def, err) {
      def.reject(err);
    },

    getFormDataFromFileDetails: function(fileDetails) {
      var formdata = new FormData();
      formdata.append('f', 'json');
      this.addFilesToFormData(formdata, fileDetails);

      return formdata;

    },

    addFilesToFormData: function(formdata, fileDetails) {
      if (fileDetails.files) {
        _.each(fileDetails.files, function(fd, i) {
          formdata.append('file' + i, fd.file, fd.name);
        });
      } else {
        formdata.append('file', fileDetails.file, fileDetails.baseName || fileDetails.name);
      }
      if (fileDetails.thumb) {
        formdata.append('thumb', fileDetails.thumb, fileDetails.thumbName);
      }
    }

  };
});