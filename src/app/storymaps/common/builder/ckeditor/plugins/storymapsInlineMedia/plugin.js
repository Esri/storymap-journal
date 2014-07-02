CKEDITOR.plugins.add('storymapsInlineMedia', {
	icons: 'inlineMedia',
	init: function(editor) {
		
		var inlineMediaExec = function(isEditing)
		{
			var path = editor.elementPath(),
				elemIsImg = path.lastElement.getName() == "span" && $(path.lastElement.$).data('cke-display-name') == 'image',
				elemIsFrame = path.lastElement.getName() == "img" && $(path.lastElement.$).data('ckeRealElementType') == 'iframe';
			
			require(["dojo/topic"], function(topic){
				var media = null;
				
				if ( elemIsImg ) {
					var mediaImg = $(path.lastElement.$).children('img').eq(0),
						caption = mediaImg.parents('figure').children('figcaption'),
						title = caption && caption.length ? caption.html() : mediaImg.attr('title');
					
					media = {
						type: "image",
						image: {
							url: mediaImg.attr('src'),
							//titleDisplay: caption && caption.length ? 'caption' : 'hover',
							title: title,
							width: mediaImg.attr('width'),
							height: mediaImg.attr('height'),
							activateFullScreen: mediaImg.parents("image-container").hasClass("activate-fullscreen")
						}
					};
				}
				else if ( elemIsFrame ) {
					var mediaIframe = $(path.lastElement.$),
						mediaContainer = mediaIframe.parent(),
						isVideo = mediaContainer.hasClass("mj-video-by-url"),
						isFrameByUrl = mediaContainer.hasClass("mj-frame-by-url"),
						frameStr = decodeURIComponent(mediaIframe.data('ckeRealelement'));
					
					if ( isVideo ) {
						media = {
							type: "video",
							video: { }
						};
					}
					else {
						media = {
							type: "webpage",
							webpage: { }
						};
					}
					
					media[media.type] = {
						url: isVideo || isFrameByUrl ? $(frameStr).attr('src') : null,
						frameTag: isVideo || isFrameByUrl ? null : frameStr,
						display: mediaContainer.hasClass("custom") ? "custom" : "fit",
						width: $(frameStr).attr('width'),
						height: $(frameStr).attr('height')
					};
				}
				
				topic.publish("EDITOR-OPEN-INLINE-MEDIA", {
					selectedMedia: media,
					editorCallback: function(cfg){
						var DEFAULT_WIDTH = '100%',
							outputEl = "",
							mediaTpl = "",
							captionTpl = "";
						
						if ( cfg.type == "image" ) {
							var fullScreenOpt = cfg.activateFullScreen ? 'activate-fullscreen' : '';
							mediaTpl = '<div class="image-container ' + fullScreenOpt + '"><img src="" /></div>';
							captionTpl = '<figure class="caption">' + mediaTpl + '<figcaption></figcaption>' + '</figure>';
						}
						else {
							var editTag = "mj-video-by-url";
							
							if ( cfg.type == "webpage" && cfg.frameTag )
								editTag = "mj-frame-by-frametag";
							else if ( cfg.type == "webpage" )
								editTag = "mj-frame-by-url";
							
							// Fit or custom
							editTag += " " + (! cfg.width && ! cfg.height ? "fit" : "custom");
							
							mediaTpl = '<div class="iframe-container ' + editTag + '"><iframe src="" frameborder="0" allowfullscreen="1"/></iframe></div>';
							
							if ( cfg.type == "webpage" && cfg.frameTag ) {
								mediaTpl = '<div class="iframe-container ' + editTag + '">' + cfg.frameTag + '</div>';
							}
						}
						
						// Media with caption (image only)
						if ( cfg.title ) {
							outputEl = CKEDITOR.dom.element.createFromHtml(captionTpl, editor.document);
							$(outputEl.getChildren().$).eq(0).children().attr({
								'src': cfg.url,
								'width': DEFAULT_WIDTH
								//'height': cfg.height
							});
							outputEl.getChildren().$[1].innerHTML = cfg.title;
						}
						// Media without caption (image, video, embed)
						else {
							outputEl = CKEDITOR.dom.element.createFromHtml(mediaTpl, editor.document);
							
							if ( ! (cfg.type == "webpage" && cfg.frameTag) )
								outputEl.getChildren().$[0].setAttribute('src', cfg.url);
							
							outputEl.getChildren().$[0].setAttribute('width', DEFAULT_WIDTH);
							
							if ( cfg.type == "image" && cfg.titleDisplay == 'hover' )
								outputEl.getChildren().$[0].setAttribute('title', cfg.title);
							
							if ( cfg.type == "video" || cfg.type == "webpage" ) {
								outputEl.getChildren().$[0].setAttribute('width', cfg.width || DEFAULT_WIDTH);
								outputEl.getChildren().$[0].setAttribute('height', cfg.height || '');
							}
						}
						
						var sel = editor.getSelection(),
							node = sel.getRanges()[0].getCommonAncestor(),
							wasCaption = !! $(node.$).parents('figure').length;
						
						// Add when editor is not focused
						if( ! editor.getData() ) {
							editor.insertElement(outputEl);
						}
						else {
							if ( wasCaption )
								node = node.getParent();
							
							node.insertBeforeMe(outputEl);
							
							// Add an empty line when adding a media to not mess with the caption
							if ( isEditing !== true )
								node.insertBeforeMe(CKEDITOR.dom.element.createFromHtml('<br/>', editor.document));
							
							node.remove();
						}
						
						// TODO must be a better way to refresh the editor
						// Something like that seems needed for the resize plugin to detect the new image
						CKEDITOR.instances.addEditRTE.setData(CKEDITOR.instances.addEditRTE.getData());
					}
				});
			});
		};
		
		// Double click event (trigger in ckeditor/plugins/image2/dialogs/image2.js > onShow (around line 400)
		require(["dojo/topic"], function(topic){
			topic.subscribe("EDITOR-DOUBLE-CLICK-IMAGE", function(){
				inlineMediaExec(true);
			});
		});
		
		CKEDITOR.inlineMediaCommand = function(){ };
		CKEDITOR.inlineMediaCommand.prototype = {
			exec: inlineMediaExec,
			startDisabled: 0
		};
		
		editor.addCommand('inlineMediaCommand', new CKEDITOR.inlineMediaCommand());
		editor.ui.addButton( 'InlineMedia', {
			label: i18n.commonMedia.editorInlineMedia.lblTitle,
			command: 'inlineMediaCommand',
			toolbar: 'storymapsInlineMedia'
		});
	}
});