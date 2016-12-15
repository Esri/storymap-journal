define([
  'dojo/_base/declare',
  'dojo/_base/lang',

  './FileUploadHelper',

  'storymaps/tpl/core/Helper',
  'storymaps/common/utils/CommonHelper',

  'lib-build/tpl!./ViewUpload',
  'lib-build/tpl!./ViewResourceItem',
  'lib-build/css!./ViewUpload'

], function(declare, lang,
   fileUploadHelper,
   Helper, CommonHelper,
   viewTemplate, viewResourceTemplate) {

  return declare([], {

    uploadEnabled: false,
    dragging: false,
    fileError: false,
    canCheckFileOnDrag: false,
    hasDnD: false,

    constructor: function(container, showView) {
      this.showView = showView;
      this.setupUI(container);
    },

    present: function(/*params*/) {
      if (!this.uploadEnabled) {
        // try again to see if the app has been saved...
        this.setupUI(this.container);
      } else {
        this.showAppResources();
      }
      this.container.show();
      this.toggleLoadingIndicator(false);
    },

    /* ----- setup functions ----- */

    setupUI: function(container) {
      this.container = container;
      if (!this.uploadEnabled && !CommonHelper.getItemId()) {
        return;
      }
      // find and store some elements...
      this.container.html(viewTemplate(i18n.commonMedia.imageSelectorUpload));
      this.uploader = this.container.find('.uploader');
      this.fileInput = this.container.find('.file-input');
      this.resourcesContainer = this.container.find('.resources');
      this.warningText = this.container.find('.warning-text');

      this.container.find('.uploadHelp').tooltip({
        trigger: 'hover'
      });


      this.showAppResources();
      this.uploadEnabled = true;
      this.setupDnD();
    },

    setupDnD: function() {
      this.hasDnD = fileUploadHelper.checkDnD();
      if (this.hasDnD) {
        fileUploadHelper.disableWindowDnD();
        this.uploader.on('dragover', lang.hitch(this, this.onDragOver));
        this.uploader.on('dragleave', lang.hitch(this, this.onDragLeave));
        this.uploader.on('drop', lang.hitch(this, this.onDrop));
      }
      this.fileInput.on('change', lang.hitch(this, this.onFileChange));
    },

    showAppResources: function() {
      var self = this;
      fileUploadHelper.getStoryResources().then(function(resources) {
        var storyImageUrls = app.data.getAllImageUrls();
        var storyImageIds = _.map(storyImageUrls, function(url) {
          return fileUploadHelper.getFileIdFromUrl(url).toLowerCase();
        });
        self.resourcesContainer.empty();

        _.each(resources, function(resource) {
          var isUsed = _.contains(storyImageIds, resource.fileId.toLowerCase());
          resource.usedClass = isUsed ? '' : 'unused';
          resource.tokenizedThumbUrl = self.getTokenizedThumbUrl(resource);

          var resourceHtml = $(viewResourceTemplate(resource));
          resourceHtml.on('click', lang.hitch(self, self.selectImage, resource));
          resourceHtml.find('.remove').on('click', lang.hitch(self, self.removeResource, resource));
          resourceHtml.on('dragstart', function() {return false;});
          self.resourcesContainer.append(resourceHtml);
        });

        self.container.find('.tooltip').tooltip('hide');
        self.resourcesContainer.find('.remove').tooltip({
          html: true,
          trigger: 'hover',
          container: self.container,
          placement: 'left',
          title: i18n.commonMedia.imageSelectorUpload.tooltipRemove,
          delay: {show: 500, hide: 200}
        });

      });
    },

    getTokenizedThumbUrl: function(resource) {
      var fileName;
      if (resource.thumbFile) {
        fileName = resource.thumbFile;
      } else if (resource.file) {
        fileName = resource.file;
      } else if (resource.sizes) {
        fileName = _.min(resource.sizes, 'width').name;
      }
      if (!fileName) {
        console.warn('no thumbFile?', resource);
      }
      return Helper.possiblyAddToken(resource.resourcesUrl + '/' + encodeURIComponent(fileName));

    },


    /* ----- drag functions ----- */

    onDragOver: function(evt) {
      fileUploadHelper.preventAndStopEvent(evt);
      // if this.dragging is true, this is a repeat dragging event.
      // no need to re-check something we checked on the first drag event.
      // (but remember to set this.dragging to false on drop)
      // we also set this.dragging = false on dragleave, which causes
      // a file validation every time a drag event enters this area, but
      // otherwise we'd have to attach an event to the window here, and meh.
      if (this.dragging) {
        return;
      }
      this.dragging = true;
      evt = evt.originalEvent || evt;
      var dt = evt.dataTransfer, options;
      if (dt) {
        if (dt.files && dt.files.length) {
          options = this.getDragClassAndMsg(dt.files);
        } else if (dt.items && dt.items.length) {
          options = this.getDragClassAndMsg(dt.items);
        }
      }
      this.setUploaderTimerOrClass(options);
    },

    getDragClassAndMsg: function(items) {
      // validate item types. may as well validate the whole list
      // even though this only accepts single files.
      var itemTypeValidation = fileUploadHelper.validateTypeOnDrag(items);

      if (!itemTypeValidation) {
        return {dragClass: 'drag-error', msg: i18n.commonMedia.imageSelectorUpload.warningFileTypes};
      }
      // if the user dragged more than one file, warn that
      // only the first will be uploaded and used.
      if (itemTypeValidation && items.length > 1) {
        return {dragClass: 'drag-warning', msg: i18n.commonMedia.imageSelectorUpload.warningOneFile};
      }
      return {dragClass: 'drag-success'};
    },

    onDragLeave: function(evt) {
      fileUploadHelper.preventAndStopEvent(evt);

      this.dragging = false;
      this.setUploaderClass();
    },

    onDrop: function(evt) {
      this.dragging = false;
      this.setUploaderClass();
      var files = fileUploadHelper.findFilesFromDrop(evt);
      if (files) {
        fileUploadHelper.preventAndStopEvent(evt);
        this.onFileChange(files);
      }
    },

    onFileChange: function(arg) {
      // onFileChange is called from both onDrop and the file input, so first we need to find the files.
      var files = arg.target ? arg.target.files : arg;
      if (!files || !files.length) {
        return;
      }
      // only process the first file. TODO later, support multiple uploads
      var file = files[0];
      this.processFile(file);
    },

    processFile: function(file) {
      if (!fileUploadHelper.validateFile(file)) {
        this.setUploaderTimerOrClass({dragClass: 'drag-error', msg: i18n.commonMedia.imageSelectorUpload.warningFileTypes});
        return;
      }
      this.toggleLoadingIndicator(true);
      this.setUploaderClass();

      // get baseName here so you can possibly have loading placeholders
      // while the files process. this is original name + datestamp + .extension.
      // the second argument is a time offset, in case you're processing
      // multiple files at once and want a coherent sort order.
      var baseName = fileUploadHelper.getUploadBaseName(file, 0);

      fileUploadHelper.processFile(file, true).then(lang.hitch(this, function(result) {
        // result is an object with type, file to upload, width and height, possibly thumb, and dataurl.
        // if there are multiple files (because of multiple sizes), they'll be
        // listed as files, not file. in any case, the fileUploadHelper will know
        // what to do with these. they're just returned here so you can use the dataUrl
        // at this point if you want to.
        _.extend(result, {baseName: baseName});
        this.uploadFile(result);

      }), lang.hitch(this, function(err) {
        this.toggleLoadingIndicator(false);
        console.warn('errback', err);
        var msg;
        if (err.reason === 'filesize') {
          msg = i18n.commonMedia.imageSelectorUpload.warningFileSize;
        }
        this.setUploaderTimerOrClass({dragClass: 'drag-error', msg: msg});
      }));

    },

    toggleLoadingIndicator: function(showWait) {
      this.container.find('.uploadWait').toggleClass('hidden', !showWait);
    },

    uploadFile: function(fileDetails) {
      fileUploadHelper.uploadSingleResource(fileDetails).then(lang.hitch(this, function(uploadResult) {
        uploadResult.name = uploadResult.displayName || fileDetails.baseName;
        // try doing this to eliminate load time after configured...
        var img = new Image();
        img.src = Helper.possiblyAddToken(uploadResult.picUrl || uploadResult.sizes[0].url);
        this.toggleLoadingIndicator(false);
        this.showView('configure', {media: uploadResult, fromService: true});
      }));
    },

    setUploaderTimerOrClass: function(options) {
      if (options.dragClass && options.dragClass.indexOf('error') >= 0 || options.dragClass.indexOf('warning') >= 0) {
        this.setUploaderClass(options.dragClass);
        this.setWarningText(options.msg);
        setTimeout(lang.hitch(this, function() {
          // only return to default state if user isn't still dragging
          if (!this.dragging) {
            this.setUploaderClass();
            this.setWarningText();
          }
        }), 3000);
      } else {
        this.setUploaderClass(options.dragClass);
      }
    },

    setWarningText: function(msg) {
      msg = msg || '';
      this.warningText.text(msg);
    },

    setUploaderClass: function(newClass) {
      if (!newClass) {
        this.setWarningText();
        if (this.uploader.hasClass('drag-default')) {
          return;
        }
      }
      this.uploader.removeClass('drag-default drag-error drag-warning drag-success')
                   .addClass(newClass || 'drag-default');
    },

    removeResource: function(resource, evt) {
      fileUploadHelper.preventAndStopEvent(evt);
      fileUploadHelper.removeResources(resource).then(lang.hitch(this, this.showAppResources));
    },

    selectImage: function(resourceData) {
      _.extend(resourceData, {name: resourceData.displayName});
      this.showView('configure', {media: resourceData, fromService: true});
    }


  });

});
