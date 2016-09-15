define(["lib-build/tpl!./Selector",
		"lib-build/css!./Selector",
		"./ViewHome",
		"./ViewYoutube",
		"./ViewVimeo",
		"./ViewOther",
		"../ViewConfigure"],
	function (
		viewTpl,
		viewCss,
		ViewHome,
		VideoSelectorYoutube,
		VideoSelectorVimeo,
		VideoSelectorOther,
		ViewConfigure
	){
		return function Selector(container, params, onDataChangeCallback, backButton)
		{
			container.append(viewTpl({}));

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
					youtube: new VideoSelectorYoutube(
						container.find('.viewYoutubeContainer'),
						showView
					),
					vimeo: new VideoSelectorVimeo(
						container.find('.viewVimeoContainer'),
						showView
					),
					other: new VideoSelectorOther(
						container.find('.viewOtherContainer'),
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

				if ( cfg.mode == "edit" && cfg.media && cfg.media.type == "video" )
					showView('configure', { mode: cfg.mode, media: cfg.media });
				else if (cfg.keepLastDataSource && _hasPreviouslyImported && _mediaView != null)
					showView(_mediaView, { isReturning: true });
				else
					showView('home');
			};

			this.checkError = function()
			{
				var hasError = false;

				if ( _selectedView == 'configure' )
					hasError = _views[_selectedView].checkError();
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
