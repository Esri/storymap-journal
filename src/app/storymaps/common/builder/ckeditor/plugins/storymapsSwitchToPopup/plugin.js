CKEDITOR.plugins.add('storymapsSwitchToPopup', {
	icons: 'switchToPopup',
	init: function(editor) {
		CKEDITOR.switchToPopupCommand = function(){ };
		CKEDITOR.switchToPopupCommand.prototype = {
			exec: function() {
				require(["dojo/topic"], function(topic){
					topic.publish("EDITOR-OPEN-EDIT");
				});
			}
		};
		
		editor.addCommand('switchToPopupCommand', new CKEDITOR.switchToPopupCommand());
		editor.ui.addButton( 'SwitchToPopup', {
			label: 'Insert a media',
			command: 'switchToPopupCommand',
			toolbar: 'storymapsSwitchToPopup'
		});
	}
});