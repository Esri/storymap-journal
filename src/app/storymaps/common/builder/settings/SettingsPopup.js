define(["lib-build/tpl!./SettingsPopup",
		"lib-build/css!./SettingsPopup",
		"storymaps/common/utils/CommonHelper",
		"dojo/topic"],
	function (
		viewTpl,
		viewCss,
		CommonHelper,
		topic
	) {
		var _lastDisplayedTab = null;

		return function SettingsPopup(container)
		{
			container.append(viewTpl({}));

			var _tabs = [],
				_tabsBar = null,
				_tabContent = container.find(".tab-content"),
				_btnSave = container.find(".btnSave"),
				_btnClose = container.find(".btnClose");

			this.init = function(builderView)
			{
				_tabs = builderView.getSettingsTab();

				container.find('.settingsPopupHeader').empty();
				container.find('.modal-body').empty();

				$.each(_tabs, function(){
					container.find('.settingsPopupHeader').append('<li class="tab"><a></a></li>');
					container.find('.modal-body').append('<div class="tab-content"></div>');
				});

				_tabsBar = container.find(".tab");
				_tabContent = container.find(".tab-content");

				$.each(_tabs, function(i, tab){
					tab.init(_tabsBar.eq(i).find("a"), _tabContent.eq(i));
					tab.initLocalization();
				});

				_tabsBar.click(onTabClick);
				_btnSave.click(save);
			};

			this.present = function(settings, lockOnTabIndex)
			{
				var targetIndex = 0,
					debugTabIndex = ! app.isProduction && CommonHelper.getUrlParams().debugParam ? CommonHelper.getUrlParams().debugParam : null;

				_tabsBar.removeClass("disabled");
				_btnClose.removeAttr("disabled");

				$(".error-msg", container).hide();
				$(".modal-header .close", container).attr("data-dismiss", "modal");
				$(".modal-footer .error", container).hide();

				$.each(_tabs, function(i, tab){
					tab.present(settings[i], i == lockOnTabIndex);
				});

				if ( lockOnTabIndex )
					targetIndex = lockOnTabIndex;
				else if ( debugTabIndex)
					targetIndex = debugTabIndex;
				else if ( _lastDisplayedTab )
					targetIndex = _lastDisplayedTab;

				displayTab(targetIndex);

				if( lockOnTabIndex ) {
					_tabsBar.addClass("disabled");
					_tabsBar.eq(lockOnTabIndex).removeClass("disabled");

					_btnClose.attr("disabled", "disabled");
					$(".modal-header .close", container).attr("data-dismiss", "none");
				}

				container.modal({keyboard: ! lockOnTabIndex});
			};

			function onTabClick()
			{
				if ( $(this).hasClass("disabled") )
					return;

				displayTab($(this).index());
			}

			function save()
			{
				var settings = [];
				var tabError = -1;

				$.each(_tabs, function(i, tab){
					var result = tab.save();

					if( result === false )
						tabError = i;

					settings.push(result);
				});

				if (tabError == -1)
					topic.publish("SETTINGS_POPUP_SAVE", { settings: settings });
				else {
					displayTab(tabError);
					return false;
				}
			}

			function displayTab(index)
			{
				_tabsBar.removeClass("active disabled");
				_tabContent.hide();

				_tabsBar.eq(index).addClass("active");
				_tabs[index].show();
				_tabContent.eq(index).show();

				_lastDisplayedTab = index;
			}

			this.initLocalization = function()
			{
				container.find('.modal-title').html(i18n.commonCore.settings.header);

				container.find('.btnClose').html(i18n.commonCore.common.cancel);
				container.find('.btnSave').html(i18n.commonCore.common.apply);
				container.find('.error').html(i18n.commonCore.settings.tabError);
			};
		};
	}
);
