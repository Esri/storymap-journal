define(["lib-build/tpl!./ViewMaptiks",
		"lib-build/css!./ViewMaptiks"
	],
	function (
		viewTpl
	){
		return function ViewMaptiks()
		{
			var	_titleContainer = null,
				_contentContainer = null,
				_settings = null;

			this.init = function(titleContainer, contentContainer)
			{
				_titleContainer = titleContainer;
				_contentContainer = contentContainer;

				_contentContainer.append(viewTpl({
					maptiksTrackcodeLbl: 'Maptiks Trackcode',
					maptiksIDLbl: 'Maptiks ID'
				}));
			};

            this.present = function(settings) 
			{	
				settings = settings || {};
                _contentContainer.find("#maptiks-trackcode").prop("value", settings.maptiksTrackcode);
                _contentContainer.find("#maptiks-id").prop("value", settings.maptiksId);
				_settings = settings;
			};
			
			this.show = function()
			{
				//
			};

            this.save = function()
			{			
				return {
					maptiksTrackcode: _contentContainer.find("#maptiks-trackcode").prop("value"),
                    maptiksId: _contentContainer.find("#maptiks-id").prop("value")
				};
			};
          
			this.initLocalization = function()
			{
				_titleContainer.html('Maptiks');
			};
		};
	}
);
