define([
		"lib-build/tpl!./NewMapDialog",
		"lib-build/css!./NewMapDialog",
		"dojo/Deferred"
    ],
	function (
		viewTpl,
		viewCss,
		Deferred
	) {
		return function NewMapDialog(container)
		{
			var _resultDeferred = null,
				_params = null;

			container.append(viewTpl({
				newTitle: i18n.commonWebmap.editor.newTitle,
				titleLbl: i18n.commonWebmap.editor.titleLbl,
				titlePh: i18n.commonWebmap.editor.titlePh,
				lblFolder: i18n.commonWebmap.editor.folderLbl,
				btnCancel: i18n.commonCore.common.cancel
			}));

			initEvents();

			this.present = function(params)
			{
				_resultDeferred = new Deferred();
				_params = params;

				container.find('#inputNewMapTitle').val(params.title);
				container.find('#inputNewMapTags').val(params.tags);
				container.find('.folder-label').toggle(!! params.folderId);
				container.find('.btnSubmit').html(i18n.commonCore.common.create);

				updateSaveButton();

				container.bind("keydown", enterEvent);

				container.modal({ keyboard:true });

				return _resultDeferred;
			};

			this.saveSuccess = function()
			{
				var resultDeferred = new Deferred();

				container.find('.btnSubmit')
					.addClass('disabled')
					.html('<span class="glyphicon glyphicon-ok"></span> ' + i18n.commonWebmap.editor.successCreate);
				setTimeout(function(){
					container.modal('hide');
					resultDeferred.resolve();
				}, 800);

				return resultDeferred;
			};

			this.saveError = function(error)
			{
				container.find('.btnSubmit').removeClass('disabled').html(i18n.commonCore.common.create);

				var message = i18n.commonWebmap.editor.errorCreate;
				if ( error.messageCode == "VIEWER_0001" ) {
					message = i18n.commonWebmap.editor.errorDuplicate;
				}

				container.find('.modal-footer .error').html(message).show();

				_resultDeferred = new Deferred();
				return _resultDeferred;
			};

			function onSave()
			{
				if ( ! container.find('#inputNewMapTitle').val() ) {
					return;
				}

				if ( container.find('.btnSubmit').hasClass('disabled') ) {
					return;
				}

				_resultDeferred.resolve({
					title: container.find('#inputNewMapTitle').val(),
					tags: container.find('#inputNewMapTags').val(),
					folderId: _params.folderId
				});

				container.find('.btnSubmit')
					.addClass('disabled')
					.html('<span class="small-loader"></span>' + i18n.commonWebmap.editor.creating);
				container.find('.modal-footer .error').html('').hide();
			}

			function onCancel()
			{
				_resultDeferred.reject();

				container.modal('hide');
			}

			function updateSaveButton()
			{
				var enableSave = container.find('#inputNewMapTitle').val();
				container.find('.btnSubmit').toggleClass('disabled', ! enableSave);
			}

			function enterEvent(e)
			{
				e.keyCode == 13 && onSave();
			}

			function initEvents()
			{
				container.find('.btnSubmit').click(onSave);
				container.find('.btnCancel').click(onCancel);

				container.find('#inputNewMapTitle').bind('input propertychange', updateSaveButton);

				container.on('show.bs.modal', function () {
					$('#addEditPopup .backdrop').show();
				});

				container.on('shown.bs.modal', function () {
					container.find('#inputNewMapTitle').focus();
				});

				container.on('hide.bs.modal', function () {
					$('#addEditPopup .backdrop').hide();
					container.unbind("keydown", enterEvent);
				});
			}
		};
	}
);
