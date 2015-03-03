define(["lib-build/css!./ViewConfigure",
		"lib-build/tpl!./ViewConfigure",
		"../../utils/CommonHelper",
		"dojo/_base/lang",
		"dojo/Deferred"
	], 
	function (
		viewCss,
		viewTpl,
		CommonHelper,
		lang,
		Deferred
	){
		return function ViewConfigure(container, cfg) 
		{
			var displayMode = ["center", "fill", "fit", "stretch", "custom"];
			//maxImgDim = [300, 500];
			
			var _media = null,
				_mediaType = null,
				_params = null;
			
			container.append(viewTpl({
				mode: cfg.mode,
				lblURL: i18n.commonMedia.mediaConfigure.lblURL,
				lblURLPH: i18n.commonMedia.mediaConfigure.lblURLPH,
				lblURLError: i18n.commonMedia.mediaConfigure.lblURLError,
				lblLabel: i18n.commonMedia.mediaConfigure.lblLabel,
				lblLabelPH: i18n.commonMedia.mediaConfigure.lblLabelPH,
				lblMaximize: i18n.commonMedia.mediaConfigure.lblMaximize,
				lblMaximizeHelp: i18n.commonMedia.mediaConfigure.lblMaximizeHelp,
				lblPosition: i18n.commonMedia.mediaConfigure.lblPosition,
				lblPosition1: i18n.commonMedia.mediaConfigure.lblPosition1,
				lblPosition2: i18n.commonMedia.mediaConfigure.lblPosition2,
				lblPosition3: i18n.commonMedia.mediaConfigure.lblPosition3,
				lblPosition4: i18n.commonMedia.mediaConfigure.lblPosition4,
				lblPosition5: i18n.commonMedia.mediaConfigure.lblPosition5,
				phWidth: i18n.commonCore.common.width,
				phHeight: i18n.commonCore.common.height,
				lblPosition2Explain: i18n.commonMedia.mediaConfigure.lblPosition2Explain,
				lblPosition3Explain: i18n.commonMedia.mediaConfigure.lblPosition3Explain,
				lblPosition3Explain2: i18n.commonMedia.mediaConfigure.lblPosition3Explain2,
				lblPosition4Explain: i18n.commonMedia.mediaConfigure.lblPosition4Explain,
				unloadLbl: i18n.commonMedia.mediaConfigure.unloadLbl,
				unloadHelp: i18n.commonMedia.mediaConfigure.unloadHelp
			}));
			
			initEvents();
			
			this.present = function(params)
			{
				var media = params.media,
					imgCfg = null;

				// Convert the generic structure of service connector
				if ( params.fromService ) {
					if ( params.media.is_video )
						media = {
							type: 'video',
							video: {
								title: params.media.name,
								titleDisplay: 'caption',
								url: params.media.pic_url
							}
						};
					else 
						media = {
							type: 'image',
							image: {
								title: params.media.description || params.media.name,
								titleDisplay: 'caption',
								url: params.media.pic_url
							}
						};
				}
				
				// Get image cfg in edit mode
				if ( media && media.type == 'image' && media.image ) {
					imgCfg = {
						width:  params.fromService ? null : media[media.type].width,
						height: params.fromService ? null : media[media.type].height
					};
				}
				
				_mediaType = media ? media.type : 'image';
				_media = media;
				_params = params;
				
				// URL
				container.find('.mediaURL')
					.val(media ? media[media.type].url : '')
					.keyup(function(){
						container.find('.mediaURLError').fadeOut();
					})
					.parent().toggle(
							params.fromService === false && _mediaType == "image"
					);
				container.find('.mediaURLError').hide();
				
				// Frame trick
				var isFrame = _mediaType == 'webpage' && media[media.type].frameTag;
				if ( isFrame )
					container.find('.mediaURL').val(media[media.type].frameTag);
				
				//
				// Mode Main Stage
				//
				
				container.find('.position-image').toggle(_mediaType == 'image');
				container.find('.position-video').toggle(_mediaType == 'video' || _mediaType == 'webpage');
				container.find(".media-configure-position").removeClass("selected");
				
				var display = _mediaType == 'image' ? displayMode[1] : displayMode[2],
					width = null,
					height = null;
				
				if ( params.media && params.media.type ) {
					var displayTmp = params.media[params.media.type].display;
					width = params.media[params.media.type].width;
					height = params.media[params.media.type].height;
					
					if ( $.inArray(displayTmp, displayMode) != -1 )
						display = displayTmp;
				}
				
				var displayContainer = _mediaType == 'image' ? '.position-image' : '.position-video';
				if ( cfg.mode == "inlineText" && (_mediaType == 'video' || _mediaType == 'webpage') ) {
					displayContainer = ".inline-video";
					if ( ! width && ! height )
						display = "fit";
				}
				
				// Make sure that width 100% isn't displayed for fit video & webpage
				if ( _mediaType == 'video' || _mediaType == 'webpage' ) {
					if ( display == "fit" ) {
						width = "";
						height = "";
					}
				}
				
				container.find(displayContainer)
					.find(".media-configure-position[data-val=" + display + "]")
					.addClass("selected").click();
				
				container.find('.posCustomW').val(width || '');
				container.find('.posCustomH').val(height || '');
			
				//
				// Mode Inline
				//
				
				container.find('.inline-image').toggle(_mediaType == 'image');
				container.find('.inline-video').toggle(_mediaType == 'video' || _mediaType == 'webpage');
				
				container.find('.mediaTitle').val(media ? media[media.type].title : '');
				container.find('[value="opt-maximize"]').prop('checked', media ? media[media.type].activateFullScreen : false);
				

				// Image information (inline)
				/*
				if ( imgCfg )
					fillImageInformation(media[media.type].url, imgCfg);
				*/
				
				// Web Page Unload strategy
				container.find(".mediaUnloadStrategy").toggle(_mediaType == 'webpage');
				container.find(".navigateOutUnload").prop('checked', ! params.media || ! params.media[params.media.type] || params.media[params.media.type].unload === undefined || params.media[params.media.type].unload);
				
				container.show();
				container.find('.mediaURL').focus();
			};
			
			this.checkError = function(saveBtn)
			{
				var error = false;
				
				container.find('.mediaURLError').fadeOut();
				
				if ( _params.fromService === false && _mediaType == "image" ) {
					var resultDeferred = new Deferred();
					
					var saveBtnLbl = saveBtn.html();
					saveBtn.html(i18n.commonMedia.mediaConfigure.lblURLCheck);
					
					var img = new Image();
					img.src =  CommonHelper.prependURLHTTP(container.find('.mediaURL').val().trim());
					
					img.onload = function(){
						saveBtn.html(saveBtnLbl);
						resultDeferred.resolve(false);
					};
					
					img.onerror = function(){
						container.find('.mediaURLError').fadeIn();
						saveBtn.html(saveBtnLbl);
						resultDeferred.resolve(true);
					};
					
					return resultDeferred;
				}
				
				return error;
			};
			
			this.getData = function()
			{
				var display = container.find('.media-configure-position.selected').data('val'),
					data = {
						url: container.find('.mediaURL').val().trim(),
						type: _mediaType
					};
				
				if ( cfg.mode == "inlineText" ) {
					if ( _mediaType == "image" ) {
						lang.mixin(data, {
							title: container.find('.mediaTitle').val(),
							//titleDisplay: container.find('input[name="mediaTitleDisplay"]:checked').val(),
							width: container.find('.imgActualWidth').val(),
							height: container.find('.imgActualHeight').val(),
							type: _mediaType,
							activateFullScreen: container.find('[value="opt-maximize"]').prop('checked')
						});
					}
					else {
						lang.mixin(data, {
							display: display
						});

						if ( display == "custom" ) {
							lang.mixin(data, {
								width: container.find('.inline-video .posCustomW').val(),
								height: container.find('.inline-video .posCustomH').val()
							});
						}
					} 
				}
				else {
					lang.mixin(data, {
						display: display
					});
				
					if ( display == "custom" ) {
						lang.mixin(data, {
							width: container.find('.position-video .posCustomW').val(),
							height: container.find('.position-video .posCustomH').val()
						});
					}
				}
				
				if ( _mediaType == "webpage" )
					data.unload = container.find(".navigateOutUnload").prop('checked');
				
				if ( _mediaType == "webpage" && _media.webpage.frameTag ) {
					data.frameTag = data.url;
					data.url = '';
					data.ts = new Date().getTime();
				}
				else
					data.url = CommonHelper.prependURLHTTP(data.url);
					
				return data;
			};
			
			/*
			function fillImageInformation(url, cfg)
			{
				var imageDim = getImageDimension(url),
					newImageDim = [];
				
				container.find(".imgNatWidth").html(imageDim[0]);
				container.find(".imgNatHeight").html(imageDim[1]);
				container.find(".imgNatRatio").html(round(imageDim[0] / imageDim[1], 2));
				
				// Edit
				if ( cfg.width && cfg.height )
					newImageDim = [cfg.width, cfg.height];
				// Add
				else {
					if ( imageDim[0] > maxImgDim[0] ) {
						newImageDim[0] = maxImgDim[0];
						newImageDim[1] = newImageDim[0] / (imageDim[0] / imageDim[1]);
					}
					
					if ( imageDim[1] > maxImgDim[1] ) {
						newImageDim[1] = maxImgDim[1];
						newImageDim[0] = newImageDim[1] * (imageDim[0] / imageDim[1]);
					}
				}
				
				container.find(".imgActualWidth").val(round(newImageDim[0], 0));
				container.find(".imgActualHeight").val(round(newImageDim[1], 0));
				container.find(".imgActualRatio").html(round(newImageDim[0] / newImageDim[1], 2));
				
				container.find(".btn-lockratio").addClass("locked");
			}
			
			function ratioIsLocked()
			{
				return container.find(".btn-lockratio").hasClass("locked");
			}
			*/
			
			function initEvents()
			{
				/*
				container.find("input[name=mediaTitleDisplay]").change(function(){
					if ( $(this).val() != "none" )
						container.find('.mediaTitle').removeAttr("disabled");
					else
						container.find('.mediaTitle').attr("disabled", "disabled");
				});
				*/
				
				/*
				container.find(".btn-reset").click(function(){
					container.find(".imgActualWidth").val(container.find(".imgNatWidth").html());
					container.find(".imgActualHeight").val(container.find(".imgNatHeight").html());
					container.find(".imgActualRatio").html(container.find(".imgNatRatio").html());
				});
				
				container.find(".btn-lockratio").click(function(){
					$(this).toggleClass('locked');
				});
				
				container.find(".imgActualWidth").change(function(){
					if ( ratioIsLocked() )
						container.find(".imgActualHeight").val(round(parseInt($(this).val(), 10) / parseFloat(container.find(".imgNatRatio").html()), 0));
					
					updateActualRatio();
				});
				
				container.find(".imgActualHeight").change(function(){
					if ( ratioIsLocked() ) 
						container.find(".imgActualWidth").val(round(parseInt($(this).val(), 10) * parseFloat(container.find(".imgNatRatio").html()), 0));
					
					updateActualRatio();
				});
				*/
				
				container.find(".imageDetailsLbl").click(function(){
					container.find(".imageDetailsContainer").toggleClass('expanded');
				});
				
				// Position
				container.find(".media-configure-position").off('click').click(function(){
					var val = $(this).data('val');
					
					container.find(".media-configure-position").removeClass("selected");
					$(this).addClass("selected");
					
					container.find('.media-configure-position[data-val="custom"]').find(".position-params").toggleClass("disabled", val != "custom");
				});
				
				container.find('.dimHelp').tooltip('destroy').tooltip({
					title: i18n.commonMedia.mediaConfigure.tooltipDimension,
					html: true
				});
				
				container.find('.dimHelp2').tooltip('destroy').tooltip({
					title: i18n.commonMedia.mediaConfigure.tooltipDimension2,
					html: true
				});
				
				container.find('.maximizeHelp, .unloadHelp').tooltip({
					html: true
				});
			}
			
			/*
			function updateActualRatio()
			{
				container.find(".imgActualRatio").html(round(
					parseInt(container.find(".imgActualWidth").val(), 10) / parseInt(container.find(".imgActualHeight").val(), 10),
					2)
				);
			}
			
			function getImageDimension(url)
			{
				var img = new Image();
				img.src = url;
				return [img.width, img.height];
			}
			
			function round(number, precision)
			{
				return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
			}
			*/
		};
	}
);