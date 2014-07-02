define(["lib-build/css!./ViewPicker",
		"lib-build/tpl!./ViewPickerItem"], 
	function (
		viewCss,
		viewTplItem
	){
		return function ViewPicker(container, showView) 
		{
			this.present = function(params)
			{
				if ( ! params.isReturning ) {
					var outHTML = "";
				
					$.each(params.data, function(i, media){
						outHTML += viewTplItem({
							id: i,
							title: media.name,
							thumb: media.thumb_url,
							style: (i%2 === 0) ? "clear:both" : ""
						});
					});
					
					container.html(outHTML);
					
					container.off('click').click(function(e){
						var index = $(e.target).parents(".mediaItem").index();
						if ( index != -1 ) {
							showView('configure', {
								mode: params.mode,
								fromService: true,
								media: params.data[index]
							});
						}
					});
				}
				container.show();
			};
		};
	}
);