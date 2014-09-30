define(["lib-build/tpl!./Media",
		"lib-build/css!./Media",
		"lib-build/css!../../Common",
		"storymaps/common/builder/media/MediaSelector",
		"dojo/Deferred"], 
	function (
		viewTpl,
		viewCss,
		commonCss,
		MediaSelector,
		Deferred
	){
		return function Media(container) 
		{
			container.append(viewTpl({
				lblTitle: i18n.commonMedia.editorInlineMedia.lblTitle,
				btnOk: i18n.commonCore.common.apply,
				btnCancel: i18n.commonCore.common.cancel,
				btnBack: i18n.commonCore.common.back
			}));

			var _cfg = null,
				_dialogDeferred = null,
				_viewMediaSelector = new MediaSelector(
					container.find('.viewMediaSelectorContainer'),
					null,
					true,
					updateSubmitButton,
					container.find('.btn-back')
				);
			
			initEvents();
			
			this.present = function(cfg, contentHeight) 
			{			
				_cfg = cfg;
				_dialogDeferred = new Deferred();
				
				_viewMediaSelector.present({
					mode: cfg.mode,
					webmaps: null,
					media: cfg.mode == "edit" ? cfg.edit.media : null,
					keepLastDataSource: true
				}, function(){});
				
				container.find(".modal-content").css("min-height", contentHeight);
				
				container.modal({keyboard: true});
				return _dialogDeferred;
			};
			
			function updateSubmitButton()
			{
				var data = _viewMediaSelector.getData();
				container.find(".btnSubmit").attr(
					"disabled",
					! (data.media && data.media.type && data.media[data.media.type])
				);
			}
			
			function onClickSubmit()
			{
				var hasError = _viewMediaSelector.checkError(container.find(".btnSubmit"));
				
				var postErrorCheck = function()
				{
					var media = _viewMediaSelector.getData().media;
					_dialogDeferred.resolve(media[media.type]);
					container.modal('toggle');
				};
				
				if ( hasError instanceof Deferred ) {
					hasError.then(function(hasError){
						if ( ! hasError )
							postErrorCheck();
					});
				}
				else if ( ! hasError )
					postErrorCheck();
			}
			
			function initEvents()
			{
				container.find(".btnSubmit").click(onClickSubmit);
			}
	
			this.initLocalization = function()
			{
				//
			};
		};
	}
);