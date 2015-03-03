CKEDITOR.plugins.add('storymapsInlineMedia', {
	icons: 'inlineMedia',
	init: function(editor) {
		
		var inlineMediaExec = function(isEditing, editingNode)
		{
			var sel = editor.getSelection();
			
			// Search for the media container node specificed in param
			// Used when clicking on the media to-right edit button
			// When adding a media or editing through the toolbar button
			if ( editingNode ) {
				var elems = editor.document.getElementsByTag('div'),
					foundIndex = null;
				
				$.each(elems.$, function(i, elem){
					if ( elem == editingNode )
						foundIndex = i;
				});
				
				if ( foundIndex != null )
					sel.selectElement(elems.getItem(foundIndex));
			}
			
			var path = editor.elementPath(),
				elemTmp = $(path.lastElement.$),
				elem = elemTmp.is("iframe") ? elemTmp.parent() : elemTmp,
				elemIsImg = elem.data("cke-display-name") == "image",
				elemIsFrame = elem.is("div") && elem.hasClass("iframe-container");
			
			require(["dojo/topic", "dojo/has"], function(topic, has){
				var media = null;
				
				if ( elemIsImg ) {
					var mediaImg = elem.children('img').eq(0),
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
							activateFullScreen: mediaImg.parents(".image-container").hasClass("activate-fullscreen")
						}
					};
				}
				else if ( elemIsFrame ) {
					var mediaContainer = elem,
						mediaIframe = mediaContainer.find("iframe").eq(0),
						isVideo = mediaContainer.hasClass("mj-video-by-url"),
						isFrameByUrl = mediaContainer.hasClass("mj-frame-by-url");
						//frameStr = decodeURIComponent(mediaIframe.data('ckeRealelement'));
					
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
						url: isVideo || isFrameByUrl ? mediaIframe.attr('src') : null,
						frameTag: isVideo || isFrameByUrl ? null : mediaIframe.prop('outerHTML'),
						display: mediaContainer.hasClass("custom") ? "custom" : "fit",
						width: mediaIframe.attr('width'),
						height: mediaIframe.attr('height')
					};
					
					if ( media.type == "webpage" )
						media[media.type].unload = mediaIframe.attr('data-unload') === undefined || mediaIframe.attr('data-unload') == "true";
				}
				
				topic.publish("EDITOR-OPEN-INLINE-MEDIA", {
					selectedMedia: media,
					editorCallback: function(cfg){
						var DEFAULT_WIDTH = '100%',
							outputEl = "",
							mediaTpl = "",
							captionTpl = "";
						
						if ( cfg.type == "image" ) {
							var fullScreenOpt = cfg.activateFullScreen ? ' activate-fullscreen' : '';
							mediaTpl = '<div class="image-container' + fullScreenOpt + '"><img src="" /></div>';
							captionTpl = '<figure class="caption">' + mediaTpl + '<figcaption></figcaption>' + '</figure>';
						}
						else {
							var editTag = " mj-video-by-url";
							
							if ( cfg.type == "webpage" && cfg.frameTag )
								editTag = " mj-frame-by-frametag";
							else if ( cfg.type == "webpage" )
								editTag = " mj-frame-by-url";
							
							// Fit or custom
							editTag += " " + (! cfg.width && ! cfg.height ? " fit" : " custom");
							
							mediaTpl = '<div class="iframe-container' + editTag + '"><iframe src="" frameborder="0" allowfullscreen="1"/></iframe></div>';
							
							if ( cfg.type == "webpage" && cfg.frameTag ) {
								mediaTpl = '<div class="iframe-container' + editTag + '">' + cfg.frameTag + '</div>';
							}
						}
						
						// Media with caption (image only)
						if ( cfg.title ) {
							outputEl = CKEDITOR.dom.element.createFromHtml(captionTpl, editor.document);
							$(outputEl.getChildren().$).eq(0).children().attr({
								'src': cfg.url,
								'width': media && media.image && media.image.width ? media.image.width : DEFAULT_WIDTH,
								'height': media && media.image && media.image.height ? media.image.height : null
							});
							outputEl.getChildren().$[1].innerHTML = cfg.title;
						}
						// Media without caption (image, video, embed)
						else {
							outputEl = CKEDITOR.dom.element.createFromHtml(mediaTpl, editor.document);
							
							if ( ! (cfg.type == "webpage" && cfg.frameTag) )
								outputEl.getChildren().$[0].setAttribute('src', cfg.url);
							
							outputEl.getChildren().$[0].setAttribute('width', DEFAULT_WIDTH);
							
							// It's an image with a width/height (resized manually)
							if ( media && media.image && media.image.width ) {
								outputEl.getChildren().$[0].setAttribute('width', media.image.width);
								outputEl.getChildren().$[0].setAttribute('height', media.image.height);
							}
							
							if ( cfg.type == "image" && cfg.titleDisplay == 'hover' )
								outputEl.getChildren().$[0].setAttribute('title', cfg.title);
							
							if ( cfg.type == "video" || cfg.type == "webpage" ) {
								outputEl.getChildren().$[0].setAttribute('width', cfg.width || DEFAULT_WIDTH);
								outputEl.getChildren().$[0].setAttribute('height', cfg.height || '');
							}
							
							if ( cfg.type == "webpage" )
								outputEl.getChildren().$[0].setAttribute('data-unload', cfg.unload);
						}
						
						var sel = editor.getSelection(),
							node = sel.getRanges()[0].getEnclosedNode(),
							wasCaption = !! (node && $(node.$).parents('figure').length);
						
						// Adding in firefox
						// TODO investigate why this seems needed
						if ( ! has("firefox") && cfg.type == "image" )
							node = sel.getRanges()[0].getCommonAncestor();
							
						// Add when editor is not focused
						if( ! editor.getData() ) {
							editor.insertElement(outputEl);
						}
						else {
							if ( wasCaption )
								node = node.getParent();
							
							if ( ! node )
								node = sel.getRanges()[0].getCommonAncestor();
							
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
			topic.subscribe("EDITOR-EDIT-INLINE-MEDIA", function(node){
				inlineMediaExec(true, node);
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