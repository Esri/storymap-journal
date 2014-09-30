define(["lib-build/tpl!./Popup",
		"lib-build/css!./Popup",
		"storymaps/common/builder/media/MediaSelector",
		"storymaps/common/utils/CommonHelper",
		"../../core/WebApplicationData",
		"./ViewText",
		"dojo/Deferred",
		"dojo/topic",
		"lib-app/bootstrap-datetimepicker/js/bootstrap-datetimepicker",
		"lib-build/css!lib-app/bootstrap-datetimepicker/css/bootstrap-datetimepicker"], 
	function (
		viewTpl,
		viewCss,
		MediaSelector,
		CommonHelper,
		WebApplicationData,
		AddEditPopupViewText,
		Deferred,
		topic
	){
		return function Popup(container) 
		{
			container.append(viewTpl({
				titlePlaceholder: i18n.builder.addEditPopup.titlePlaceholder,
				lblMainStage: i18n.builder.layouts.mainStage,
				firstAddExplain: i18n.builder.addEditPopup.firstAddExplain 
					+ ' <a onclick="app.builder.firstAddLearnMore()">' + i18n.builder.addEditPopup.firstAddLeanMore + '</a>.',
				btnCancel: i18n.commonCore.common.cancel,
				btnBack: i18n.commonCore.common.back
			}));

			var _popupDeferred = null,
				_cfg = null,
				_visitedViews = null,
				_btnSubmit = container.find(".btnSubmit"),
				_viewMainStage = new MediaSelector(
					container.find('.viewMediaSelectorContainer'), 
					{
						onOpenConfigure: toggle,
						onCloseConfigure: toggle
					},
					false,
					onViewMainStageDataChange,
					container.find('.btn-back')
				),
				_viewContentPanel = new AddEditPopupViewText(
					container.find('.viewTextContainer'),
					onViewTextDataChange
				),
				_isTemporaryHide = null,
				_ckeditorReady = false,
				_ckeEditorReadyListener = null;
			
			initEvents();
			
			this.present = function(cfg) 
			{			
				_popupDeferred = new Deferred();
				_cfg = cfg;
				_visitedViews = [];
				
				_isTemporaryHide = false;
				app.isAddEditInProgress = true;
				
				var sectionName = "Home Section";
				if ( cfg.sectionIndex > 0 || (cfg.mode == "add" && app.data.getStoryLength() > 0) )
					sectionName = "Section " + (cfg.mode == "add" ? app.data.getStoryLength() : cfg.sectionIndex);
				
				// Title / submit
				if ( cfg.mode == "add" ) {
					container.find('.modal-logo').removeClass("edit");
					container.find('.modal-title').html(cfg.title ? i18n.builder.addEditPopup.titleAddHome : i18n.builder.addEditPopup.titleAdd);
					container.find('.modal-subtitle').html(sectionName);
					_btnSubmit.html(i18n.commonCore.common.add);
				}
				else {
					container.find('.modal-logo').addClass("edit");
					container.find('.modal-title').html(i18n.builder.addEditPopup.titleEdit);
					container.find('.modal-subtitle').html(sectionName);
					_btnSubmit.html(i18n.commonCore.common.save);
				}
				
				// TODO
				container.toggleClass("isAdding", cfg.mode == "add");
				container.toggleClass("isEditing", cfg.mode != "add");
				
				// Submit
				updateSubmitButton();
				
				/* TODO alternative*/
				container.find(".navigation-add").toggle(cfg.mode == "add");
				container.find(".navigation-edit").toggle(cfg.mode != "add");
				
				// Label of the panel tab depend on layout
				container.find('.tab-panel-lbl').html(app.data.getCurrentLayoutStaticConfig().title);
				
				//
				// Title
				//
				if ( cfg.mode == "add" ) {
					container.find('.titleContainerAdd')
						.removeClass('has-feedback has-error')
						.find('.title').val(cfg.title || "");
				}
				else {
					container.find('.titleContainerEdit').html(cfg.section.title);
				}
				
				container.find('.titleContainerAdd').toggle(cfg.mode == "add" && ! cfg.title);
				container.find('.titleContainerFirstAdd').toggle(cfg.mode == "add" && !! cfg.title);
				container.find('.titleContainerEdit').toggle(cfg.mode != "add");
				
				var appColors = WebApplicationData.getColors();
				container.find('.titleContainerAdd .title, .titleContainerEdit').css({
					"backgroundColor": appColors.panel,
					"color": appColors.text
				});
				
				// Navigation bar tooltip
				container.find('.navHelp').tooltip('destroy').tooltip({
					title: app.appCfg.getLayoutThumnail({ 
						layout: WebApplicationData.getLayoutId(),
						options: WebApplicationData.getLayoutOptions().layoutCfg,
						theme: WebApplicationData.getTheme().colors,
						contentLabel: true
					}),
					html: true
				});
				
				_viewMainStage.present(
					{
						mode: cfg.mode,
						webmaps: cfg.webmaps,
						media: cfg.section ? cfg.section.media : null
					}					
				);
				
				_viewContentPanel.present(cfg, WebApplicationData.getColors());
				
				var debugIndex = ! app.isProduction && CommonHelper.getUrlParams().debugParam ? CommonHelper.getUrlParams().debugParam : null;
				showTab(debugIndex || (cfg.mode == "add" ? 0 : (cfg.displayTab == "content" ? 1 : 0)));
				
				// TODO
				app.builder.firstAddLearnMore = function()
				{
					app.builder.openHelpPopup("tips", toggle);
					toggle();
				};
				
				container.modal({keyboard: true});
				return _popupDeferred;
			};
			
			this.close = function()
			{
				container.modal('hide');
				_popupDeferred.reject();
			};
			
			function initEvents()
			{
				// TODO don't do that and only require a title
				container.find('.tab-btn').click(function () {
					var index = $(this).parent().index();
					_visitedViews.push(index);
					setTimeout(updateSubmitButton, 100);
					showTabEvents(index);
				});
				
				container.find('.title').bind('input propertychange', updateSubmitButton);
				
				container.find('.btnCancel').click(function () {
					container.modal('hide');
					_popupDeferred.reject();
				});
				
				_ckeEditorReadyListener = CKEDITOR.on('instanceReady', function(){
					_ckeditorReady = true;
				});
				
				container.on('shown.bs.modal', function () {
					if ( _ckeditorReady )
						postDisplay();
					else {
						_ckeEditorReadyListener.removeListener();
						CKEDITOR.on('instanceReady', function(){
							if ( ! _ckeditorReady )
								postDisplay();
							_ckeditorReady = true;
						});
					}
				});
				
				container.on('hide.bs.modal', function () {
					if ( ! _isTemporaryHide ) {
						app.isAddEditInProgress = false;
						// Need to be done here as can't catch keyboard ESC event
						try {
							_popupDeferred.reject();
						} catch(e){ }
						
						container.removeClass("temporaryHide");
					}
					else
						_isTemporaryHide = false;
				});
				
				_btnSubmit.click(onClickSubmit);
				
				topic.subscribe("TOGGLE-ADD-EDIT", toggle);
			}
			
			function postDisplay()
			{
				_viewContentPanel.postDisplay();
				
				// Title editing in Edit
				if ( _cfg.mode == "edit" ) {
					if ( ! CKEDITOR.instances.AddEditTitleEditor ) {
						CKEDITOR.inline(container.find('.titleContainerEdit')[0], {
							toolbar: [
								{ name: 'basicstyles', groups: ['basicstyles'], items: ['Bold', 'Italic'] },
								{ name: 'styles', items: ['FontSize'] },
								{ name: 'colors', items: ['TextColor'] }
							],
							uiColor: '#FCFCFC',
							floatSpaceDockedOffsetX: $("#AddEditTitleEditor").width() - 194,
							floatSpaceDockedOffsetY: - 1
						});
					}
				}
				
				if ( _cfg.mode == "add" )
					container.find('.title').focus();
				
				updateSubmitButton();
			}
			
			function toggle()
			{
				if ( container.hasClass("in") ){
					_isTemporaryHide = true;
					container.addClass("temporaryHide");
				}
				else {
					container.removeClass("temporaryHide");
				}
				
				container.modal('toggle');
			}
			
			function showTab(index)
			{
				container.find('.tab-btn').eq(index).click();
				
				if ( _cfg.mode == "add" ) {
					if ( index === 0 ) 
						container.find(".navigation-explain").html(i18n.builder.addEditPopup.stepMainStageExplain);
					else 
						container.find(".navigation-explain").html(app.data.getCurrentLayoutStaticConfig().title + " " + i18n.builder.addEditPopup.stepPanelExplain);
					
					container.find(".navigation-step").html(i18n.builder.addEditPopup.step + " " + (index+1) + ":");
					container.find(".navigation-thumbnail").html(app.appCfg.getLayoutThumnail({ 
						layout: WebApplicationData.getLayoutId(),
						options: WebApplicationData.getLayoutOptions().layoutCfg,
						theme: WebApplicationData.getTheme().colors,
						contentStep: true,
						contentStepIdx: index + 1
					}));
				}
				
				showTabEvents(index);
			}
			
			// Lame
			function showTabEvents(index)
			{
				if ( ! index ) 
					_viewMainStage.activate();
				else if ( _cfg.mode == "add" )
					container.find('.btn-back').show().off('click').click(function () { showTab(0); });
				else
					container.find('.btn-back').hide();
			}
			
			function onViewMainStageDataChange(type)
			{
				if ( type )
					_viewContentPanel.applyMediaRules(type);
				
				updateSubmitButton();
			}
			
			function onViewTextDataChange()
			{
				updateSubmitButton();
			}
			
			function onClickSubmit()
			{
				if ( _btnSubmit.html() == "NEXT" ) {
					showTab(1);
					return;
				}
				
				var errorInStep = [],
					sectionTitle = "",
					viewMediaData = _viewMainStage.getData(),
					viewTextData = _viewContentPanel.getData();
				
				if ( _cfg.mode == "add" ) {
					var fontSize = ! app.data.getStoryLength() ? "36px" : "22px";
					sectionTitle = '<strong><span style="font-size: ' + fontSize + '">' + container.find('.title').val() + '</span></strong>';
				}
				else
					sectionTitle = CKEDITOR.instances.AddEditTitleEditor.getData();
				
				var postErrorCheck = function() {
					if ( ! sectionTitle )
						container.find('.titleContainer').addClass('has-feedback has-error');
					else if ( $.inArray(0, errorInStep) != -1 )
						showTab(0);
					else if ( $.inArray(1, errorInStep) != -1 )
						showTab(1);
					else {
						_popupDeferred.resolve({
							title: sectionTitle,
							content: viewTextData.text,
							contentActions: viewTextData.actions,
							creaDate: Date.now(),
							pubDate: Date.now(),
							status: 'PUBLISHED',
							media: viewMediaData.media 
						});
						container.modal('hide');
					}
				};
				
				if ( _viewContentPanel.checkError() )
					errorInStep.push(1);
				
				var mainStageError = _viewMainStage.checkError(_btnSubmit);
				
				if ( mainStageError instanceof Deferred ) {
					mainStageError.then(function(hasError){
						if ( hasError )
							errorInStep.push(0);
						postErrorCheck();
					});
					return;
				}
				else if ( mainStageError )
					errorInStep.push(0);
				
				postErrorCheck();
			}
			
			function updateSubmitButton()
			{
				var currentStep = container.find('.nav-tabs li.active').index(),
					sectionTitle = "",
					viewMediaData = _viewMainStage.getData(),
					viewTextData = _viewContentPanel.getData(),
					disableButton = true;
				
				if ( _cfg.mode == "add" )
					sectionTitle = container.find('.title').val();
				else if ( CKEDITOR.instances.AddEditTitleEditor ) 
					sectionTitle = CKEDITOR.instances.AddEditTitleEditor.getData();
				
				if ( currentStep <= 0 ) {
					if ( sectionTitle && viewMediaData.media && viewMediaData.media.type && viewMediaData.media[viewMediaData.media.type] )
						disableButton = false;
				}
				else if ( sectionTitle && viewTextData.text )
					disableButton = false;
				
				if ( _cfg.mode == "edit" )
					_btnSubmit.html(i18n.commonCore.common.save);
				else if ( currentStep <= 0 )
					_btnSubmit.html(i18n.commonCore.common.next);
				else 
					_btnSubmit.html(i18n.commonCore.common.add);
				
				_btnSubmit.attr("disabled", disableButton);
				if ( disableButton ) {
					var tooltip = "";
					if ( currentStep <= 0 ) {
						tooltip = app.data.getStoryLength() ? i18n.builder.addEditPopup.stepMainStageNextTooltip : i18n.builder.addEditPopup.stepMainStageNextTooltip2;
						if ( _cfg.mode == "add" )
							tooltip += " " + i18n.builder.addEditPopup.stepNextTooltipNext;
					}
					else {
						tooltip = i18n.builder.addEditPopup.step2NextTooltip.replace('%LAYOUT-TYPE%',  app.data.getCurrentLayoutStaticConfig().title);
						if ( _cfg.mode == "add" )
							tooltip += " " + i18n.builder.addEditPopup.stepNextTooltipAdd;
					}
						
					container.find('.btnSubmitWrapper').tooltip({
						container: '.btnSubmitTooltipContainer',
						title: tooltip
					});
				}
				else
					container.find('.btnSubmitWrapper').tooltip('destroy');
			}
	
			this.initLocalization = function()
			{
				//
			};
		};
	}
);