CKEDITOR.plugins.add('storymapsAction', {
	icons: 'geocode,media,removeAction,previewAction',
	init: function(editor) {
		
		var getSelectedActionId = function(path)
		{
			var elem = path.lastElement && path.lastElement.getAscendant( 'a', true ),
				elemIsAction = elem && elem.getName() == 'a' && elem.getAttribute('data-storymaps') && elem.getChildCount();
				
			return elemIsAction ? {
				elem: elem,
				id: elem.getAttribute('data-storymaps')
			} : null;
		};
		
		var getLink = function(path)
		{
			var elem = path.lastElement && path.lastElement.getAscendant('a', true );
			return  elem && elem.getName() == 'a' && elem.getAttribute('href') && elem.getChildCount() ? elem.getAttribute('href') : null;
		};
		
		/*
		 * Geocode
		 */
		CKEDITOR.geocodeCommand = function(){ };
		CKEDITOR.geocodeCommand.prototype = {
			exec: function(editor) {
				var action = getSelectedActionId(editor.elementPath());

				require(["dojo/topic"], function(topic){
					topic.publish("EDITOR-OPEN-GEOCODE", {
						selectedActionId: action ? action.id : null,
						text: action ? action.elem.getHtml() : editor.getSelection().getSelectedText(),
						editorCallback: function(cfg){
							var link = editor.document.createElement('a');
							link.setAttribute('data-storymaps', cfg.id);
							link.setAttribute('data-storymaps-type', 'zoom');
							link.setHtml(cfg.text);
							editor.insertElement(link);
						}
					});
				});
			},
			refresh: function(/*editor, path*/) {
				/*
				var elem = path.lastElement && path.lastElement.getAscendant( 'a', true ),
					elemIsLink = elem && elem.getName() == 'a',
					elemIsZoom = elem && elem.getAttribute('data-storymaps-type') == "zoom";
				
				if (elemIsLink && ! elemIsZoom || this.forceDisabled)
					this.setState(CKEDITOR.TRISTATE_DISABLED);
				else
					this.setState(CKEDITOR.TRISTATE_OFF);
				*/
			},
			contextSensitive: 1,
			startDisabled: 1
		};
		
		editor.addCommand('geocodeCommand', new CKEDITOR.geocodeCommand());
		editor.ui.addButton( 'Geocode', {
			label: i18n.commonMedia.editorActionGeocode.lblTitle,
			command: 'geocodeCommand',
			toolbar: 'storymaps'
		});
		
		/*
		 * Change Main Stage media
		 */
		CKEDITOR.mediaCommand = function(){ };
		CKEDITOR.mediaCommand.prototype = {
			exec: function(editor) {
				var action = getSelectedActionId(editor.elementPath());

				require(["dojo/topic"], function(topic){
					topic.publish("EDITOR-OPEN-MEDIA", {
						selectedActionId: action ? action.id : null,
						text: action ? action.elem.getHtml() : editor.getSelection().getSelectedText(),
						editorCallback: function(cfg){
							var link = editor.document.createElement('a');
							link.setAttribute('data-storymaps', cfg.id);
							link.setAttribute('data-storymaps-type', 'media');
							link.setHtml(cfg.text);
							editor.insertElement(link);
						}
					});
				});
			},
			refresh: function(/*editor, path*/) {
				/*
				var elem = path.lastElement && path.lastElement.getAscendant( 'a', true ),
					elemIsLink = elem && elem.getName() == 'a',
					elemIsMedia = elem && elem.getAttribute('data-storymaps-type') == "media";
				
				if (elemIsLink && ! elemIsMedia)
					this.setState(CKEDITOR.TRISTATE_DISABLED);
				else
					this.setState(CKEDITOR.TRISTATE_OFF);
				*/
			},
			contextSensitive: 1,
			startDisabled: 1
		};
		
		editor.addCommand('mediaCommand', new CKEDITOR.mediaCommand());
		editor.ui.addButton('Media', {
			label: i18n.commonMedia.editorActionMedia.lblTitle,
			command: 'mediaCommand',
			toolbar: 'storymaps'
		});
		
		/*
		 * Remove map action or unlink
		 */
		
		CKEDITOR.removeCommand = function(){ };
		CKEDITOR.removeCommand.prototype = {
			exec: function(editor) {
				var style = new CKEDITOR.style({ element: 'a', type: CKEDITOR.STYLE_INLINE, alwaysRemoveElement: 1 });
				editor.removeStyle(style);
			},
			refresh: function(editor, path) {
				if ( getSelectedActionId(path) || getLink(path) )
					this.setState(CKEDITOR.TRISTATE_OFF);
				else
					this.setState(CKEDITOR.TRISTATE_DISABLED);
			},
			contextSensitive: 1,
			startDisabled: 1,
			requiredContent: 'a[href]'
		};
		
		editor.addCommand('removeCommand', new CKEDITOR.removeCommand());
		editor.ui.addButton('RemoveAction', {
			label: 'Remove action',
			command: 'removeCommand',
			toolbar: 'storymaps'
		});
		
		/*
		 * Preview
		 */
		
		CKEDITOR.previewCommand = function(){ };
		CKEDITOR.previewCommand.prototype = {
			exec: function(editor) {
				var path = editor.elementPath();
				
				if ( getSelectedActionId(path) ) {
					require(["dojo/topic"], function(topic){
						topic.publish("EDITOR-PREVIEW", {
							actionId: getSelectedActionId(path).id
						});	
					});
				}
				else if ( getLink(path) )
					window.open(getLink(path), '_blank');
			},
			refresh: function(editor, path) {
				if ( getSelectedActionId(path) || getLink(path) )
					this.setState(CKEDITOR.TRISTATE_OFF);
				else
					this.setState(CKEDITOR.TRISTATE_DISABLED);
			},
			contextSensitive: 1,
			startDisabled: 1,
			requiredContent: 'a[href]'
		};
		
		editor.addCommand('previewCommand', new CKEDITOR.previewCommand());
			editor.ui.addButton('PreviewAction', {
			label: 'Preview action',
			command: 'previewCommand',
			toolbar: 'storymapsAction'
		});
	}
});