define(["lib-build/tpl!./Media",
		"lib-build/css!./Media",
		"lib-build/css!../../Common",
		"storymaps/common/builder/media/MediaSelector",
		"dojo/Deferred",
		"dojo/topic"], 
	function (
		viewTpl,
		viewCss,
		commonCss,
		MediaSelector,
		Deferred,
		topic
	){
		return function Media(container) 
		{
			container.append(viewTpl({
				lblTitle: i18n.commonMedia.editorActionMedia.lblTitle,
				btnOk: i18n.commonCore.common.apply,
				btnCancel: i18n.commonCore.common.cancel,
				btnBack: i18n.commonCore.common.back
			}));

			var _cfg = null,
				_dialogDeferred = null,
				_viewMediaSelector = new MediaSelector(
					container.find('.viewMediaSelectorContainer'),
					{
						onOpenConfigure: onOpenConfigure,
						onCloseConfigure: onCloseConfigure
					},
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
					webmaps: cfg.webmaps,
					media: cfg.media,
					disableMapExtras: cfg.disableMapExtras
				}, function(){});
				
				container.find(".modal-content").css("min-height", contentHeight);
				
				container.modal({keyboard: true});
				return _dialogDeferred;
			};
			
			function onOpenConfigure()
			{
				container.modal('toggle');
				topic.publish("TOGGLE-ADD-EDIT");
			}
			
			function onCloseConfigure()
			{
				container.modal('toggle');
				topic.publish("TOGGLE-ADD-EDIT");
			}
			
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
					_dialogDeferred.resolve({
						id: _cfg.mode == "add" ? "MJ-ACTION-" + Date.now() : null,
						text: _cfg.text,
						media: _viewMediaSelector.getData().media
					});
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