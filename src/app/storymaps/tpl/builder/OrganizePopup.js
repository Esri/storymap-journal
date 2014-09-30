define([
	"lib-build/tpl!./OrganizePopup",
	"lib-build/css!./OrganizePopup",
	"lib-build/tpl!./OrganizePopupEntry",
	"dojo/date/locale",
	"lib-app/jquery-ui-1.10.4.custom.min",
	"lib-app/jquery.ui.touch-punch",
	"dojo/Deferred",
	"lib-app/bootstrap-datetimepicker/js/bootstrap-datetimepicker",
	"lib-build/css!lib-app/bootstrap-datetimepicker/css/bootstrap-datetimepicker"],
	function (
		viewTpl,
		viewCss,
		entryTpl,
		locale,
		jqueryUICustom,
		jqueryTouchPunch,
		Deferred
	) {
		return function OrganizePopup(container)
		{
			var _initDone = false,
				_resultDeferred = null,
				// cfg contains all sections 
				// and sectionIndex which is the index of the current section at opening
				_cfg = null,
				_nbRowDeleted = null;

			container.append(viewTpl({
				title: i18n.builder.organizePopup.title,
				lblHeader: i18n.builder.organizePopup.lblHeader,
				/*lblAll: i18n.builder.organizePopup.lblAll,*/
				lblColTitle: i18n.builder.organizePopup.lblColTitle,
				lblColPubDate: i18n.builder.organizePopup.lblColPubDate,
				lblColStatus: i18n.builder.organizePopup.lblColStatus,
				checkDisplayReverse: i18n.builder.organizePopup.checkDisplayReverse,
				btnExport: i18n.builder.exportData.btn,
				tooltipExport: i18n.builder.exportData.tooltip,
				btnCancel: i18n.commonCore.common.cancel
			}));
			
			this.present = function(cfg)
			{
				var contentHTML = "";
				
				_resultDeferred = new Deferred();
				_cfg = cfg;
				
				if ( ! cfg || ! cfg.story || ! cfg.story.sections || cfg.sectionIndex == null )
					return _resultDeferred.reject();
					
				_nbRowDeleted = 0;
				
				if ( ! _initDone )
					initUI();
					
				// Reset filter
				//container.find('.story-filter').eq(0).click();
				
				// Table sections
				$.each(_cfg.story.sections, function (index, section) {
					contentHTML += entryTpl({
						index: index,
						title: $('<div>' + section.title + '</div>').text(),
						pubDate: unserializeDate(section.pubDate),
						statusVal: section.status,
						statusLbl: app.builderCfg.STATUS[section.status],
						helpDelete: i18n.builder.organizePopup.deleteTooltip,
						firstSectionExplain: i18n.builder.organizePopup.firstSectionExplain
					});
				});
				
				container.find('.rows').html(contentHTML);
				
				// Reverse checkbox
				container.find('input[name=displayReverse]').attr('checked', _cfg.story.reversed);
				
				// Date
				container.find('.date').datetimepicker({
					//language:  'en',
					format: 'mm dd yyyy - HH:ii P',
					weekStart: true,
					todayBtn:  true,
					autoclose: true,
					todayHighlight: true,
					startView: 2,
					forceParse: 0,
					showMeridian: true
				});
				
				// Status
				$.each(Object.keys(app.builderCfg.STATUS), function(i, status){
					container.find('.status-list').append('<li><a data-value="' + status + '">' + app.builderCfg.STATUS[status] + '</a></li>');
				});
				container.find('.status-list a').click(function(){
					$(this).parents('.btn-group').find('.status-list-btn')
						.data('value', $(this).data('value'))
						.text($(this).text());
				});
				container.find('.dropdown-toggle').dropdown();
				
				// Delete tooltip
				container.find('*[data-toggle=tooltip]').tooltip();
				
				// Edit and delete button click handlers
				container.find('.deleteSectionBtn').click(onClickDelete);

				// Make table sortable
				container.find('.rows').toggleClass("noreorder", _cfg.story.sections.length <= 2);
				if ( _cfg.story.sections.length > 2 ) {
					container.find(".organizeTable tbody").sortable({
						axis: "y",
						opacity: "0.4",
						cursor: "move", 
						helper: function (e, tr) {
							var originals = tr.children();
							var helper = tr.clone();
							helper.children().each(function (index) {
								$(this).outerWidth(originals.eq(index).outerWidth());
							});
							return helper;
						},
						items: "tr:not([data-index=0])"
					});
				}
				else {
					try {
						container.find(".organizeTable tbody").sortable("destroy");
					} catch( e ) { }
				}
					
				
				// Apply button
				updateApplyButtonStatus();

				container.modal({ keyboard:true });
				return _resultDeferred;
			};
			
			this.close = function()
			{
				container.modal('hide');
				_resultDeferred.reject();
			};
			
			function onClickDelete()
			{
				var row = $(this).closest('tr').first();
				row.fadeOut('fast', function() {
					row.remove();
					_nbRowDeleted++;
					updateApplyButtonStatus();
				});
				return false;
			}
			
			function onClickApply()
			{
				var sectionsOnApply = _cfg.story.sections.slice(0, 1),
					newSectionIndex = 0,
					displayReversed = container.find('input[name=displayReverse]').is(':checked'),
					rows = container.find('.sectionRow').get();

				$.each($(rows), function(i, r){
					// Skip the HOME section
					if ( i === 0 )
						return;
					
					var	row = $(r),
						sectionIndex = row.data('index'),
						sectionPubDate = serializeDate(row.find('.form_datetime input').val()),
						sectionStatus = row.find('.status-list-btn').data('value'),
						section = _cfg.story.sections[sectionIndex];
					
					// Save pub date and status
					section.pubDate = sectionPubDate;
					section.status = sectionStatus;
					
					sectionsOnApply.push(section);
					
					if ( sectionIndex === _cfg.sectionIndex )
						newSectionIndex = i;
				});
				
				_resultDeferred.resolve({
					sections: sectionsOnApply,
					sectionIndex: newSectionIndex,
					reversed: displayReversed
				});
				container.modal('hide');
			}
			
			function onDisplayReverseChange()
			{
				[].reverse.call(container.find('.rows tr:not([data-index=0])')).appendTo(container.find('.rows'));
			}
			
			function initUI()
			{
				// Status filter
				/*
				$.each(Object.keys(app.builderCfg.STATUS), function(i, status){
					container.find('.story-filters').append('<li><a class="story-filter" data-value="' + status + '">' + app.builderCfg.STATUS[status] + '</a></li>');
				});
				container.find('.story-filter').click(onClickFilter);
				*/
				
				container.find('.btnApply').click(onClickApply);
				container.find('input[name=displayReverse]').change(onDisplayReverseChange);
				
				container.on('hide.bs.modal', function (e) {
					if ( $(e.target).hasClass("date") )
						return;
					
					_resultDeferred.reject();
				});
				
				container.find('.exportHelp').tooltip({
					html: true
				});
				
				container.find('.btn-export').click(onClickExport);
				
				_initDone = true;
			}
			
			function updateApplyButtonStatus()
			{
				if ( _nbRowDeleted )
					container.find('.btnApply')
						.html(i18n.builder.organizePopup.btnApplyWarning.replace('%NB%', _nbRowDeleted))
						.removeClass('btn-primary')
						.addClass('btn-danger');
				else
					container.find('.btnApply')
						.html(i18n.commonCore.common.apply)
						.removeClass('btn-danger')
						.addClass('btn-primary');
			}
			
			function serializeDate(date)
			{
				return locale.parse(
					date.replace(" -", ","), 
					{
						datePattern: 'MM dd yyyy', 
						timePattern: 'hh:mm a'
					}
				).getTime();
			}
			
			function unserializeDate(date)
			{
				var dateVal = locale.format(
						new Date(date), 
						{
							datePattern: 'MM dd yyyy', 
							timePattern: 'hh:mm a'
						}
					);
				return dateVal.replace(', ', ' - ');
			}
			
			/*
			function onClickFilter()
			{
				var index = $(this).parent().index();
				$(this).tab('show');
				
				if( index === 0 ) {
					container.find('.rows tr').show();
				}
				else {
					var targetStatus = Object.keys(app.builderCfg.STATUS)[index-1];
					container.find('.rows tr').each(function(i, row){
						var status = $(row).find('td').eq(3).data('value');
						$(row).toggle(status == targetStatus);
					});
				}
			}
			*/
			
			/*
			 * Data export
			 */
			
			function onClickExport()
			{
				var win = window.open("", "_blank"),
					winHTML = "";
				
				$.each(app.data.getStorySections(), function(i, section) {
					var media = section.media[section.media.type];
					
					winHTML += "<h1>" + section.title + "</h1>";
					
					winHTML += "<strong>" + i18n.builder.organizePopup.exportMainStage + "</strong>";
					winHTML += "<table border='1' cellpadding='5'>";
					winHTML += " <tr>";
					winHTML +=    exportMediaBlock(section.media);
					winHTML += " </tr>";
					if ( media.display ) {
						winHTML += " <tr>";
						winHTML += "  <td>Position</td>";
						winHTML += "  <td>" + section.media[section.media.type].display + "</td>";
						winHTML += " </tr>";
					}
					winHTML += "</table>";
					
					winHTML += "<br /><strong>" + i18n.builder.organizePopup.exportPanel + "</strong>";
					winHTML += "<div>" + section.content + "</div>";
					
					if ( section.contentActions && section.contentActions.length ) {
						winHTML += "<br /><strong>" + i18n.builder.organizePopup.exportActions + "</strong>";
						winHTML += "<table border='1' cellpadding='5'>";
						
						$.each(section.contentActions, function(i, action) {
							var actionType = action.type;
							winHTML += "<tr>";
							if ( actionType == "media" ) {
								winHTML += exportMediaBlock(action.media);
							}
							//else if ( actionType == "zoom") { }
							winHTML += "</tr>";
						});
						
						winHTML += "</table>";
					}
					
					winHTML += "<br /><div style='text-align:center'><hr style='width: 60%'/></div><br />";
				});
				
				win.document.title = app.cfg.TPL_NAME + " - " + i18n.builder.exportData.btn;
				win.document.body.innerHTML = winHTML;
			}
				
			function exportMediaBlock(media)
			{
				var outHTML = "";
				outHTML += "<td>" + media.type[0].toUpperCase() + media.type.slice(1) + "</td>";
				
				outHTML += "<td>";
				switch(media.type) {
					case "webmap": 
						outHTML += media.webmap.id; 
						break;
					case "image": 
						outHTML += media.image.url; 
						break;
					case "video": 
						outHTML += media.video.url; 
						break;
					case "webpage": 
						outHTML += media.webpage.url || ("<textarea style='width: 450px; height: 60px'>" + media.webpage.frameTag + "</textarea>"); 
						break;
					default:
						outHTML += "";
				}
				outHTML += "</td>";
				return outHTML;
			}
		};
	}
);