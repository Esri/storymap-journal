define(["lib-build/css!./LoadingIndicator", "dojo/dom", "lib-app/spin"], 
	function(viewCss, dom, Spinner)
	{
		return function LoadingIndicator(spinnerSelectorOrNode, messageSelectorOrNode)
		{
			var spinner = null,
				itemCount = 0,
				spinnerNode = typeof spinnerSelectorOrNode == "string" ? dom.byId(spinnerSelectorOrNode) : spinnerSelectorOrNode,
				messageNode = typeof messageSelectorOrNode == "string" ? dom.byId(messageSelectorOrNode) : messageSelectorOrNode;

			this.init = function()
			{
				if( this.spinner != null )
					return;

				var spinnerConfig = {
					lines: 16,
					length: 7,
					width: 7,
					radius: 30,
					rotate: 0,
					color: '#000',
					speed: 1.1,
					trail: 25,
					shadow: true,
					hwaccel: true,
					className: 'spinner',
					top: 4,
					left: 6
				};
				// Fix for IE9 in dev mode
				//spinner = {start: function(){}, stop: function(){}, spin: function(){}};
				spinner = new Spinner(spinnerConfig).spin(spinnerNode);
			};

			this.start = function()
			{
				! spinner && this.init();

				if ( ! spinnerNode )
					return;

				if( ! this.itemCount ) {
					spinner.spin(spinnerNode);
					spinnerNode.style.visibility = "visible";
				}
				// Alternative to allow multiple simultaneous task to share the same spinner
				// itemCount++;
				itemCount = 1;
			};

			this.stop = function()
			{
				itemCount--;

				if ( ! spinnerNode )
					return;

				if( itemCount <= 0 ){
					spinner.stop();
					spinnerNode.style.visibility = "hidden";
					itemCount = 0;
				}

				if( messageNode )
					messageNode.style.visibility = "hidden";
			};

			this.setMessage = function(message, isFail)
			{
				if ( ! spinnerNode )
					return;

				spinnerNode.style.display = "block";

				if( messageNode ) {
					if( isFail )
						messageNode.style.marginTop = "-50px";

					messageNode.innerHTML = message;
					messageNode.style.visibility = "visible";
					messageNode.style.display = "block";
				}
			};

			this.forceHide = function()
			{
				if ( ! spinnerNode )
					return;

				spinnerNode.style.display = "none";

				if( messageNode )
					messageNode.style.display = "none";
			};
		};
	}
);
