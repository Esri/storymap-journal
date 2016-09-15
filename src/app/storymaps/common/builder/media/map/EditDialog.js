define([
		"lib-build/tpl!./EditDialog",
		"lib-build/css!./EditDialog",
		"./MapViewerWrapper",
		"./MapViewerWrapperUtils",
		"./NewMapDialog",
		"dojo/Deferred",
		"dojo/topic",
		"dojo/has",
		"lib-app/bootstrap-confirmation"
	],
	function (
		viewTpl,
		viewCss,
		MapViewerWrapper,
		MapViewerWrapperUtils,
		NewMapDialog,
		Deferred,
		topic,
		has
	) {
		return function EditDialog(container)
		{
			container.append(viewTpl({
				loadingLabel: i18n.commonWebmap.editor.loading
			}));

			var _resultDeferred = null,
				_newMapDialog = null,
				_mapViewerWrapper = null,
				_viewerMapIsLoaded = false,
				_isCreatingMap = false,
				_hasCreatedMap = false,
				_hasSavedMap = false,
				_newMapInfos = null,
				_params = null,
				_isSaving = false;

			initEvents();

			_mapViewerWrapper = new MapViewerWrapper({
				frameWindow: getFrameWindow(),
				onSaveSucceed: onSaveSucceed,
				onSaveError: onSaveError,
				onLoad: mapViewerLoaded,
				onError: mapViewerFatalError,
				onEnableSave: onEnableSave
			});

			this.present = function(params)
			{
				_resultDeferred = new Deferred();
				_viewerMapIsLoaded = false;
				_isCreatingMap = false;
				_hasCreatedMap = false;
				_hasSavedMap = false;
				_newMapInfos = null;
				_params = params;

				initUI();

				var viewerURL = "";
				try {
					viewerURL = _mapViewerWrapper.load(params.newMap, params.id);
				} catch( e ) {
					mapViewerFatalError(e);
					_resultDeferred.reject(e);
					return _resultDeferred;
				}

				if ( params.newMap ) {
					if ( ! _newMapDialog ) {
						_newMapDialog = new NewMapDialog($('#mapEditPopupNewMap'));
					}

					/*
					var tags = app.data.getWebAppItem().tags || [];
					tags.push('map');
					tags = $.grep(tags, function(tag, index) {
						return index == $.inArray(tag, tags);
					});
					tags = tags.join(', ');
					*/

					var title = params.title || "";
					/*
					if ( title ) {
						title += ' - ' + 'Map';
					}
					*/

					_newMapDialog.present({
						title: title,
						tags: ['map'],
						folderId: app.data.getWebAppItem().ownerFolder
					}).then(
						onNewMapDialogSuccess,
						onNewMapDialogError
					);

					// Firefox don't let MV load properly if it's container is not visible
					// So display but hide the dialog
					if ( has("ff") ) {
						container
							.addClass("firefox-hide-fix")
							.modal({ keyboard: false });
					}
				}
				else {
					container.modal({ keyboard: false });
				}

				mapViewerLoading();

				// Slightly delay loading so that modal animation aren't delayed
				setTimeout(function(){
					container.find('.webmap-builder').attr('src', viewerURL);
				}, 50);

				return _resultDeferred;
			};

			function onNewMapDialogSuccess(result)
			{
				console.log('New map dialog saved', result);

				_newMapInfos = result;

				var sendCreateMap = function()
				{
					_isCreatingMap = true;

					_mapViewerWrapper.send({
						type:"saveNewMap",
						title: result.title,
						tags: result.tags,
						folderId: result.folderId
					});
				};

				if ( _viewerMapIsLoaded ) {
					sendCreateMap();
				}
				else {
					var interval = setInterval(function(){
						console.log('MV - Waiting for the map viewer to load to create the map');

						if ( _viewerMapIsLoaded ) {
							sendCreateMap();
							clearInterval(interval);
						}
					}, 500);
				}
			}

			function onNewMapDialogError()
			{
				MapViewerWrapperUtils.cancelLoading();
				if ( has("ff") ) {
					container.modal('hide');
				}
			}

			//
			// UI
			//

			function initUI()
			{
				container.removeClass("firefox-hide-fix");
				container.find('.modal-footer .error').hide();
				container.find('.modal-title').html(i18n.commonWebmap.editor.editTitle);
				container.find('.btnSubmit').addClass('disabled');
				createCancelButton();
				container.find('.btn-close').html(i18n.commonCore.common.close);
			}

			function mapViewerLoading()
			{
				container.find('.webmap-builder-container').addClass('hide');
				container.find('.loading-container').removeClass('hide');
				container.find('.btnSubmit')
					.removeClass('hide')
					.addClass('disabled')
					.html(i18n.commonCore.common.save);

				createCancelButton();
			}

			function mapViewerLoaded()
			{
				container.find('.webmap-builder-container').removeClass('hide');
				container.find('.loading-container').addClass('hide');

				_viewerMapIsLoaded = true;
			}

			function mapViewerFatalError(message)
			{
				console.error(message);

				container.find('.error-container').removeClass('hide');
				container.find('.error-msg').html('Fatal error, the map editor cannot be loaded' + '<br />' + message);
				container.find('.loading-container').addClass('hide');
				container.find('.webmap-builder-container').addClass('hide');
			}

			function onEnableSave()
			{
				// Avoid conflict if enabling save button while saved confirmation is displayed
				if ( _isSaving ) {
					return;
				}

				container.find('.btnSubmit')
					.removeClass('disabled')
					.html(i18n.commonCore.common.save);

				createCancelButton(true);
			}

			function createCancelButton(enableConfirmation)
			{
				if ( container.find('.btnCancel').hasClass('open') ) {
					return;
				}

				if ( enableConfirmation && container.find('.btnCancel').hasClass('has-confirmation') ) {
					return;
				}

				container.find('.btnCancel')
					.off('click')
					.confirmation('destroy');

				if ( enableConfirmation ) {
					container.find('.btnCancel').confirmation({
						container: '.mapEditPopup .modal-dialog',
						placement: 'top',
						title: i18n.commonWebmap.editor.cancelTitle,
						btnOkLabel: i18n.commonCore.common.yes,
						btnCancelLabel: i18n.commonCore.common.no,
						onConfirm: function() { onClickClose(true); },
						btnCancelClass: 'btn btn-sm btn-default btn-cancel-popover'
					});

					container.find('.btnCancel').addClass('has-confirmation');
				}
				else {
					container.find('.btnCancel')
						.click(onClickClose)
						.removeClass('has-confirmation');
				}
			}

			function onSave()
			{
				if ( ! _viewerMapIsLoaded ) {
					return;
				}

				if ( container.find('.btnSubmit').hasClass('disabled') ) {
					return;
				}

				_isSaving = true;

				container.find('.btnSubmit')
					.addClass('disabled')
					.html('<span class="small-loader"></span>' + i18n.commonWebmap.editor.saving);

				createCancelButton();

				container.find('.modal-footer .error').html('').hide();

				_mapViewerWrapper.send({
					type:"saveMap"
				});
			}

			function onClickClose(discardChanges)
			{
				container.modal('hide');

				// If closing from Close > Discard reset the frame so if user edit the map back
				//   his unsaved changes won't be there
				if ( discardChanges === true ) {
					container.find('.webmap-builder').attr('src', 'about:blank');
				}
			}

			function onClose()
			{
				_mapViewerWrapper.close();

				if ( _resultDeferred ) {
					// TODO: this should happen in WebMapSelector
					if ( _hasSavedMap ) {
						topic.publish("ADDEDIT_RELOAD_CURRENT_WEBMAP");
					}

					if ( _hasSavedMap || _hasCreatedMap ) {
						_resultDeferred.resolve({
							newMap: _hasCreatedMap,
							newMapInfos: _newMapInfos
						});
					}
					else {
						_resultDeferred.reject();
					}
				}
			}

			function onSaveSucceed(id, title)
			{
				if ( _isCreatingMap ) {
					_newMapInfos.id = id;
					_isCreatingMap = false;
					_hasCreatedMap = true;

					_newMapDialog.saveSuccess().then(function(){
						if ( has("ff") ) {
							container.removeClass("firefox-hide-fix");
						}
						else {
							container.modal({ keyboard: false });
						}
					});
				}
				// Save as
				else if ( _params.id && _params.id != id ) {
					_params.id = id;
					_newMapInfos = {
						id: id,
						title: title || ''
					};
					_hasCreatedMap = true;

					onSaveSuccessStep2();
				}
				else {
					_hasSavedMap = true;
					onSaveSuccessStep2();
					// Check the story
					topic.publish("BUILDER-MY-STORIES-CHECK");
				}
			}

			function onSaveSuccessStep2()
			{
				container.find('.btnSubmit')
					.addClass('disabled')
					.html('<span class="glyphicon glyphicon-ok"></span> ' + i18n.commonWebmap.editor.success);

				setTimeout(function(){
					container.find('.btnSubmit').html(i18n.commonCore.common.save);
					container.find('.btnSubmit').toggleClass('disabled', true);
					_isSaving = false;
				}, 2000);
			}

			function onSaveError(error)
			{
				if ( _isCreatingMap ) {
					_newMapDialog.saveError(error).then(
						onNewMapDialogSuccess,
						onNewMapDialogError
					);
				}
				else {
					container.find('.btnSubmit').removeClass('disabled').html(i18n.commonCore.common.save);
					container.find('.modal-footer .error').html(i18n.commonWebmap.editor.errorSave).show();
				}
			}

			function initEvents()
			{
				container.find('.btnSubmit').click(onSave);

				/*
				// Save button is enabled when entering or leaving the MV
				if ( ! has("touch") ) {
					container.find('.webmap-builder').mouseleave(enableSaveButton);
					container.find('.webmap-builder').mouseenter(enableSaveButton);
				}
				*/

				container.on('hide.bs.modal', onClose);
			}

			function getFrameWindow()
			{
				return container.find('.webmap-builder')[0].contentWindow;
			}
		};
	}
);
