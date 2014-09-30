define(["lib-build/tpl!./MediaSelector",
		"lib-build/css!./MediaSelector",
		"./map/WebMapSelector",
		"./image/Selector",
		"./video/Selector",
		"./webpage/Selector"
	],
	function (
		viewTpl,
		viewCss,
		WebMapSelector,
		ImageSelector,
		VideoSelector,
		WebpageSelector
	){
		return function MediaSelector(container, mapCfg, smallSize, onDataChangeCallback, backButton) 
		{
			// TODO params with boolean for each media type
			container.append(viewTpl({
				hasMap: !! mapCfg,
				lblMap: i18n.commonMedia.mediaSelector.lblMap,
				lblImage: i18n.commonMedia.mediaSelector.lblImage,
				lblVideo: i18n.commonMedia.mediaSelector.lblVideo,
				lblExternal: i18n.commonMedia.mediaSelector.lblExternal,
				lblSelect: smallSize ? i18n.commonMedia.mediaSelector.lblSelect1 : i18n.commonMedia.mediaSelector.lblSelect2,
				notImplemented: i18n.commonMedia.mediaSelector.notImplemented
			}));
			
			var _this = this,
				_mediaType = ["webmap", "image", "video", "webpage"],
				_selectedMediaType = null,
				_mapSelector = null,
				_imageSelector = new ImageSelector(
					container.find('.imageMediaContainer'),
					{
						configure: {
							mode: !! mapCfg ? 'mainMedia' : 'inlineText'
						}
					},
					onDataChangeCallback,
					backButton
				),
				_videoSelector = new VideoSelector(
					container.find('.videoMediaContainer'),
					{
						configure: {
							mode: !! mapCfg ? 'mainMedia' : 'inlineText'
						}
					},
					onDataChangeCallback,
					backButton
				),
				_webpageSelector = new WebpageSelector(
					container.find('.webpageMediaContainer'),
					{
						configure: {
							mode: !! mapCfg ? 'mainMedia' : 'inlineText'
						}
					},
					onDataChangeCallback,
					backButton
				);
			
			if ( mapCfg ) {
				_mapSelector = new WebMapSelector(
					container.find('.mapMediaContainer'),
					mapCfg.onOpenConfigure,
					mapCfg.onCloseConfigure,
					onDataChangeCallback
				);
			}
			
			container.find('.mediaSelector').toggleClass('smallSize', smallSize);
			
			initEvents();
			
			this.present = function(cfg) 
			{			
				_mapSelector && _mapSelector.present(cfg);
				_imageSelector.present(cfg);
				_videoSelector.present(cfg);
				_webpageSelector.present(cfg);
				
				if ( cfg.mode == "add" )
					initUIAdd(cfg);
				else
					initUIEdit(cfg);
			};
			
			this.getData = function()
			{
				var selectedMedia = container.find('.mainMediaTypeContainer.current').index();
				
				if ( selectedMedia === 0 )
					return {
						media: {
							type: "webmap",
							webmap: _mapSelector.getData()
						}
					};
				else if ( selectedMedia == 1 )
					return {
						media: {
							type: "image",
							image: _imageSelector.getData()
						}
					};
				else if ( selectedMedia == 2 )
					return {
						media: {
							type: "video",
							video: _videoSelector.getData()
						}
					};
				else if ( selectedMedia == 3 )
					return {
						media: {
							type: "webpage",
							webpage: _webpageSelector.getData()
						}
					};
				
				return { };
			};
			
			this.checkError = function(saveBtn)
			{
				var selectedMedia = container.find('.mainMediaTypeContainer.current').index();
				
				if ( selectedMedia === 0 )
					return _mapSelector.checkError();
				else if ( selectedMedia == 1  )
					return _imageSelector.checkError(saveBtn);
				else if ( selectedMedia == 2 )
					return _videoSelector.checkError();
				else if ( selectedMedia == 3 )
					return _webpageSelector.checkError();
				
				return true;
			};
			
			this.activate = function()
			{
				//_mapSelector.deactivate();
				_imageSelector.deactivate();
				_videoSelector.deactivate();
				_webpageSelector.deactivate();
				
				//if ( mediaType == "map" )
					//_mapSelector.activate();
				if ( _selectedMediaType == "image" )
					_imageSelector.activate();
				else if ( _selectedMediaType == "video" )
					_videoSelector.activate();
				else if ( _selectedMediaType == "webpage" )
					_webpageSelector.activate();
			};
			
			function initUIAdd()
			{
				// Click/focus/click weirdness seems needed for ipad
				container.find('.media-type').eq(_mapSelector ? 0 : 1).click().focus().click();
			}
			
			function initUIEdit(cfg)
			{
				var typeIndex = $.inArray(cfg.media.type, ['webmap', 'image', 'video', 'frame']);
				container.find('.media-type').eq(typeIndex).click().focus().click();
			}

			function initEvents()
			{
				container.find('.media-type').click(function () {
					_selectedMediaType = _mediaType[$(this).parents('.media-type-wrapper').index()];
					
					container.find('.media-type-wrapper').removeClass("current");
					$(this).parents('.media-type-wrapper').addClass("current");
					
					container.find('.mainMediaTypeContainer')
						.hide().removeClass('current')
						.eq($(this).parents('.media-type-wrapper').index()).addClass('current').show();
					
					_this.activate();
					
					onDataChangeCallback && onDataChangeCallback(_selectedMediaType);
				});
			}
		};
	}
);