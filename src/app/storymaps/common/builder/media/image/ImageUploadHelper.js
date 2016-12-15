define([
  'dojo/Deferred',
  'dojo/_base/lang'

], function(Deferred, lang) {

  return {

    photoSettings: {
      maxFileSize: 10000000, // 10Mb in bytes.
      widths: [1500], // separate from thumbnail, which has HEIGHT constraint, not WIDTH constraint
      thumbHeight: 150,
      logoWidth: 250,
      logoName: 'sm_mj_logo',
      quality: 0.8
    },


    /* ----- main function to export ----- */

    // need to return
    // {
    //    type: 'image' // since this is the image helper, we shouldn't have gotten here on a different media type
    //    file: either the original file or a file blob, extracted from dataURItoBlob(scaled-image's dataUrl);
    //    thumb: same format as file
    //    width: scaled image width
    //    height: scaled image height
    //    dataUrl: used if single file for placeholder in main app while upload occurs, used if multi-file for placeholder in MP while upload occurs
    // }

    loadImageFromFile: function(file, isSingle) {
      var def = new Deferred();
      if (file.type.indexOf('gif') >= 0) {
        this.handleGifFile(file, isSingle).then(def.resolve, def.reject);
      } else {
        this.handleImageFile(file, isSingle).then(def.resolve, def.reject);
      }
      return def;
    },

    processLogo: function(file) {
      var def = new Deferred();

      var ext = this.getExt(file.name, file.type);

      this.createNewImage(file).then(lang.hitch(this, function(img) {

        if (file.type.indexOf('gif') >= 0) {
          if (!this.validateDimensions(img, {width: this.photoSettings.logoWidth})) {
            def.reject({reason: 'gif dimensions', details: this.photoSettings.logoWidth});
            return;
           }
        } else {
          var processed = this.createCanvasAndDataUrl(img, file.type, {width: this.photoSettings.logoWidth});
          file = processed.file;
        }

        if (!this.validateFileSize(file)) {
          def.reject({reason: 'filesize'});
          return;
        }

        def.resolve({
          type: 'image',
          height: img.height,
          width: img.width,
          file: file,
          logoName: this.photoSettings.logoName,
          name: this.photoSettings.logoName + '__' + (new Date().getTime()) + '.' + ext
        });

      }));
      return def;

    },

    // have to duplicate fileUploadHelper.getExt here because
    // can't import it (circular requires)
    getExt: function(fileName, fileType) {
      var lastDot = fileName.lastIndexOf('.');
      if (lastDot >= 0) {
        return fileName.substr(lastDot + 1).toLowerCase();
      }
      return fileType.substr(fileType.indexOf('/') + 1);
    },

    handleGifFile: function(file/*, isSingle*/) {
      var def = new Deferred();
      // do some client-side processing to make sure the gif isn't too big
      // (either in dimensions or filesize);

      // since we can't resample or resize gifs client-side, first check the filesize.
      // if it's too big, no sense in continuing...
      if (!this.validateFileSize(file)) {
        console.warn('gif file size too big!');
        def.reject({reason: 'filesize'});
        return def;
      }

      // we don't know the dimensions of a gif until
      // we make it into an Image object and wait for it to load...

      this.createNewImage(file).then(lang.hitch(this, function(img) {
        // now we have the dimensions, so we can validate them client-side.
        if (!this.validateDimensions(img, {width: this.photoSettings.widths[0]})) {
          def.reject({reason: 'gif dimensions'});
          return;
        }

        // we pass the dimensions back to the requesting function.
        def.resolve({
          type: 'image',
          file: file,
          width: img.width,
          height: img.height,
          dataUrl: null
        });

      }), def.reject); // pass createNewImage rejection along.

      return def;

    },

    handleImageFile: function(origFile, isSingle) {
      var def = new Deferred();
      this.createNewImage(origFile).then(lang.hitch(this, function(img) {
        var files = [];
        var biggestDataUrl;
        var sortedWidths = _.sortBy(this.photoSettings.widths).reverse();
        _.each(sortedWidths, function(thisWidth) {
          var processed = this.createCanvasAndDataUrl(img, origFile.type, {width: thisWidth});

          if (!this.validateFileSize(processed.file)) {
            def.reject({reason: 'compressed filesize'});
            return;
          }

          if (!files.length || files[files.length - 1].width !== processed.width) {
            files.push(_.omit(processed, 'dataUrl'));
          }
          biggestDataUrl = biggestDataUrl || processed.dataUrl;
        }, this);

        var processedThumb = this.createCanvasAndDataUrl(img, origFile.type, {height: this.photoSettings.thumbHeight});

        var dataUrl = isSingle ? biggestDataUrl : processedThumb.dataUrl;
        def.resolve({
          type: 'image',
          files: files,
          width: files[0].width,
          height: files[0].height,
          dataUrl: dataUrl,
          thumb: processedThumb.file
        });
      }), def.reject);
      return def;
    },

    createCanvasAndDataUrl: function(img, fileType, dims) {
      var canvas = this.createNewCanvas(img, dims);
      var dataUrl = canvas.toDataURL(fileType, this.photoSettings.quality);
      var file = this.dataURItoBlob(dataUrl);
      return {
        width: canvas.width,
        height: canvas.height,
        dataUrl: dataUrl,
        file: file
      };
    },

    /* ----- UTILITY FUNCTIONS ----- */

    validateFileSize: function(fileOrBlob) {
      return fileOrBlob.size <= this.photoSettings.maxFileSize;
    },

    validateDimensions: function(imgOrCanvas, dimensionOptions) {
      if (dimensionOptions.width) {
        return (imgOrCanvas.width <= dimensionOptions.width);
      }
      if (dimensionOptions.height) {
        return (imgOrCanvas.height <= dimensionOptions.height);
      }
      console.warn('trying to validateDimensions without dimensionOptions', dimensionOptions);
      return false;

    },

    createNewImage: function(file) {
      var def = new Deferred();
      // we don't know the dimensions of a gif until
      // we make it into an Image object and wait for it to load...

      var img = new Image();
      var URL = window.URL || window.webkitURL;

      if (!URL) {
        def.reject({reason: 'no window.URL'});
        return;
      }

      img.src = URL.createObjectURL(file);
      img.onload = function() {
        this.onload = null; // revoke onload listener
        URL.revokeObjectURL(file); // release memory
        def.resolve(this);
      };
      return def;

    },

    createNewCanvas: function(img, sizeOptions) {
      var dims = this.getPhotoSize(img, sizeOptions);
      var canvas = document.createElement('canvas');
      canvas.width = dims.width;
      canvas.height = dims.height;
      canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height, 0, 0, dims.width, dims.height);

      return canvas;
    },

    getPhotoSize: function(img, sizeOptions) {
      var height = img.height;
      var width = img.width;
      if (!this.validateDimensions(img, sizeOptions)) {
        var imgRatio = width / height;
        if (sizeOptions.width) {
          width = sizeOptions.width;
          height = width / imgRatio;
        } else if (sizeOptions.height) {
          height = sizeOptions.height;
          width = imgRatio * height;
        } else {
          console.warn('sizeOptions dont include width or height', sizeOptions);
        }
      }

      return {
        height: Math.round(height),
        width: Math.round(width)
      };

    },

    dataURItoBlob: function(dataURI) {
      var byteString;

      if (dataURI.split(',')[0].indexOf('base64') >= 0) {
        byteString = atob(dataURI.split(',')[1]);
      } else {
        byteString = unescape(dataURI.split(',')[1]);
      }

      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var ia = new Uint8Array(byteString.length);

      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      return new Blob([ia], {type: mimeString});
    }
  };
});