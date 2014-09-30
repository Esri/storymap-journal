define(["lib-build/tpl!./Selector",
		"lib-build/css!./Selector",
		"./ViewHome",
		"./ViewFlickr",
		"./ViewFacebook",
		"./ViewPicasa",
		"../ViewPicker",
		"../ViewConfigure"], 
	function (
		viewTpl,
		viewCss,
		ViewHome,
		ImageSelectorFlickr,
		ImageSelectorFacebook,
		ImageSelectorPicasa,
		ViewPicker,
		ViewConfigure
	){
		return function Selector(container, params, onDataChangeCallback, backButton) 
		{
			container.append(viewTpl({
				lblStep1: i18n.commonMedia.imageSelector.lblStep1,
				lblStep2: i18n.commonMedia.imageSelector.lblStep2,
				lblStep3: i18n.commonMedia.imageSelector.lblStep3
			}));
			
			var _selectedView = null,
				_selectedViewParams = null,
				_previousViews = null,
				_mediaView = null,
				_hasPreviouslyImported = false,
				_views = {
					home: new ViewHome(
						container.find('.viewHomeContainer'), 
						showView
					),
					flickr: new ImageSelectorFlickr(
						container.find('.viewFlickrContainer'), 
						showView
					),
					facebook: new ImageSelectorFacebook(
						container.find('.viewFacebookContainer'), 
						showView
					),
					picasa: new ImageSelectorPicasa(
						container.find('.viewPicasaContainer'), 
						showView
					),
					picker: new ViewPicker(
						container.find('.mediaSelectorPickerContainer'),
						showView
					),
					configure: new ViewConfigure(
						container.find('.mediaSelectorConfigureContainer'),
						params.configure,
						showView
					)
				};
				
			init();
			
			this.present = function(cfg)
			{
				_previousViews = [];
				_selectedView = null;
				_selectedViewParams = null;
				
				if ( cfg.mode == "edit" && cfg.media && cfg.media.type == "image" ) {
					showView('configure', {
						mode: cfg.mode,
						media: cfg.media
					});
				}
				else if (cfg.keepLastDataSource && _hasPreviouslyImported && _mediaView != null) {
					showView(_mediaView, { isReturning: true });
				}
				else
					showView('home');
			};
			
			this.checkError = function(saveBtn)
			{
				var hasError = false;
				
				if ( _selectedView == 'configure' )
					hasError = _views[_selectedView].checkError(saveBtn);
				else
					hasError = true;
				
				container.toggleClass('error', hasError);
				
				_hasPreviouslyImported = ! hasError;
				
				return hasError;
			};
			
			this.getData = function()
			{
				if ( _selectedView == 'configure' )
					return _views[_selectedView].getData();
				return null;
			};
			
			this.activate = function()
			{
				backButton.toggle(_selectedView != 'home');
				if ( _selectedView != 'home' ) {
					backButton.off('click').click(function(){
						var previousView = _previousViews.pop() || { name: 'home' };
						showView(previousView.name || 'home', previousView.params, true);
					});
				}
			};
			
			this.deactivate = function()
			{
				backButton.hide().off('click');
			};
			
			function showView(view, params, isReturning)
			{
				if ( ! _views[view] )
					return;
				
				if ( view == 'home' )
					_hasPreviouslyImported = false;
				else if ( view != 'configure' )
					_mediaView = view;
				
				if ( ! isReturning )
					_previousViews.push({
						name: _selectedView,
						params: _selectedViewParams
					});
				
				_selectedView = view;
				_selectedViewParams = params;
				
				backButton.toggle(_selectedView != 'home');
				
				if ( view != 'home' ) {
					backButton.off('click').click(function(){
						var previousView = _previousViews.pop() || { name: 'home' };
						showView(previousView.name || 'home', previousView.params, true);
					});
				}
				
				container.find('.selectorView').hide();
				_views[view].present(params);
				
				onDataChangeCallback && onDataChangeCallback();
			}
			
			function init()
			{
				//
			}
		};
	}
);