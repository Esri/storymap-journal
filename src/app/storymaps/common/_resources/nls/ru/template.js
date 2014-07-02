define(
	 ({
		common: {
			common: {
				edit: "Редактировать"
			},
			inlineFieldEdit: {
				editMe: "Отредактируйте меня !"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Конструктор",
				buttonSave: "СОХРАНИТЬ",
				buttonShare: "ОБЩИЙ ДОСТУП",
				buttonSettings: "НАСТРОЙКИ",
				buttonHelp: "СПРАВКА",
				noPendingChange: "Нет предполагаемых изменений",
				unSavedChangeSingular: "1 несохраненное изменение",
				unSavedChangePlural: "несохраненных изменений",
				popoverSaveWhenDone: "Не забудьте сохранить изменения, когда закончите",
				closeWithPendingChange: "Вы действительно хотите подтвердить это действие? Все изменения будут потеряны.",
				ok: "Ok",
				savingApplication: "Сохранение приложения",
				saveError: "Сохранение не удалось, попробуйте еще раз",
				saveError3: "Заголовок не может быть пустым",
				// TODO
				signIn: "Войдите с помощью учетной записи в",
				shareStatus1: "Приложение не сохранено",
				shareStatus2: "К приложению предоставлен общий доступ",
				shareStatus3: "Приложение опубликовано в пределах организации",
				shareStatus4: "Приложение не опубликовано"
			},
			// TODO
			addEditPopup: {
				// Add
				addEditPopupInputTitleLabel: "Название",
				addPopupTitle: "Добавить",
				addPopupDescription: "Добавить новый вид для ваших серий.",
				addPopupButton: "ДОБАВИТЬ",
				// Edit
				editPopupTitle: "Редактировать",
				editPopupDescription: "Изменить выбранный вид",
				editPopupButton: "ПРИМЕНИТЬ",
				// Add/Edit
				addEditPopupCancelButton: "ОТМЕНА",
				addEditPopupMyContentBtn: "Выбрать из моих ресурсов",
				addEditPopupConfigureWebMapBtn: " Настроить"
			},
			share: {
				firstSaveTitle: "Приложение успешно сохранено",
				firstSaveHeader: "Ваше приложение успешно сохранено в ArcGIS Online. Прочитайте следующие ответы на часто задаваемые вопросы.",
				firstSaveA1: "Если вы не знакомы с ArcGIS Online или хотите получить ссылку на интерфейс построения, сохраните эту ссылку: %LINK1%",
				firstSaveA1bis: "Приложение также можно найти в вашей <a href='%LINK2%' target='_blank'>директории ресурсов ArcGIS Online</a>.",
				firstSaveQ2: "Опубликовано ли мое приложение?",
				firstSaveA2: "В данный момент ваше приложение не опубликовано в общий доступ. Чтобы опубликовать его, используйте кнопку ОПУБЛИКОВАТЬ.",
				shareTitle: "Включить общий доступ к приложению",
				sharePrivateHeader: "Приложение не опубликовано, хотите опубликовать его?",
				sharePrivateBtn1: "Общий доступ",
				sharePrivateBtn2: "Доступ только для моей организации",
				sharePrivateWarning: "Доступ к %WITH%  был отключен, потому что вы не являетесь владельцем <a href='%LINK%' target='_blank'>webmap</a>.",
				sharePrivateWarningWith1: "общедоступно",
				sharePrivateWarningWith2: "общедоступно и с Организацией",
				sharePrivateProgress: "Публикация...",
				sharePrivateErr: "Публикация не удалась, повторите попытку или",
				sharePrivateOk: "Тип публикации успешно изменен, загрузка...",
				sharePreviewAsUser: "Просмотр",
				shareHeader1: "Ваше приложение имеет <strong>общий доступ</strong>.",
				shareHeader2: "Ваше приложение доступно для сотрудников вашей организации (требуется учетная запись).",
				shareLinkHeader: "Опубликовать приложение для вашей аудитории",
				shareLinkOpen: "ОТКРЫТЬ",
				shareQ1Opt1: "Как сохранить приложение частным?",
				shareQ1Opt2: "Как я могу сохранить частный доступ к приложению или предоставить к нему общий доступ?",
				shareA1: "Используйте %SHAREIMG% на <a href='%LINK1%' target='_blank'>странице элемента приложения </a>. Если вы желаете закрыть общий доступ к веб-карте, обратитесь к <a href='%LINK2%' target='_blank'>странице элемента веб-карты</a>.",
				shareA1bis: "Если вы желаете убрать из общего доступа сервис объектов, используйте <a href='%LINK1%' target='_blank'>страницу элемента сервиса объектов</a>.",
				shareQ2: "Как позже отредактировать приложение?",
				shareQ2bis: "Как мне вернуться к интерфейсу создания?",
				shareA2div1: "Сохраните и используйте повторно следующую ссылку %LINK1% или обратитесь к<a href='%LINK2%' target='_blank'>странице элемента приложения</a>.",
				shareA2div2: "Как владелец приложения, при входе на ArcGIS.com вы увидите в приложении кнопку для открытия интерактивного конструктора:",				
				shareQ3: "Где хранятся данные?",
				shareA3: "Конфигурация приложения хранится в <a href='%LINK1%' target='_blank'>этом элементе веб-карты</a> и <a href='%LINK2%' target='_blank'>этом элементе веб-приложения</a>. Если вы использовали импорт из Flickr, Picasa, Facebook или YouTube, изображения и видео остаются там же, они не дублируются в ArcGIS Online.",
				learnMore: "Подробнее",
				close: "Закрыть"
			},
			settings: {
				header: "Настройки приложения",
				cancel: "Отмена",
				apply: "Применить",
				tabError: "Проверьте все закладки на наличие ошибок"
			},
			settingsLayout: {
				title: "Компоновка",
				explain: "Какой формат вы хотите использовать?",
				explainInit: "Изменение будет возможно с помощью диалога настроек.",
				selected: "Выбранная компоновка",
				select: "Выбрать эту компоновку"
			},
			settingsTheme: {
				title: "Тема",
				explain: "Выберите тему приложения либо укажите собственные цвета.",
				label: "Фоновые цвета заголовка и боковой панели"
			},
			settingsHeader: {
				title: "Заголовок",
				explain: "Настройка логотипа заголовка (максимум 250 x 50px).",
				logoEsri: "Логотип Esri",
				logoNone: "Без логотипа",
				logoCustom: "Собственный логотип",
				logoCustomPlaceholder: "URL-адрес изображения",
				logoCustomTargetPlaceholder: "Переход по ссылке",
				logoSocialExplain: "Настроить верхнюю правую ссылку заголовка.",
				logoSocialText: "Текст",
				logoSocialLink: "Ссылка",
				logoSocialDisabled: "Объект был отключен администратором"
			},
			mediaSelector: {
				lblMap: "Карта",
				lblPicture: "Изображение",
				lblVideo: "Видео",
				lblExternal: "Внешняя страница"
			},
			webMapSelector: {
				radioCurrentWebMap: "Текущая веб-карта",
				radioWebmapApp: "Одна из других веб-карт, используемых в приложении",
				radioAnotherWebmap: "Другая веб-карта",
				btnSelect: "Выбрать",
				lblOr: "или",
				fieldEnterWebmapId: "Введите id веб-карты",
				btnConfigure: "Настроить карту"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "Моя организация",
					onlineLabel: "ArcGIS Online",
					contentLabel: "Мои ресурсы",
					favoritesLabel: "Мое избранное"
				},
				title: "Выберите веб-карту",
				searchTitle: "Поиск",
				ok: "Ok",
				cancel: "Отмена",
				placeholder: "Введите текст поиска"
			}
		}
	})
);
