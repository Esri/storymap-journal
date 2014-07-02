define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Медиа",
				lblSelect2: "Ресурсы",
				lblMap: "Карта",
				lblImage: "Изображение",
				lblVideo: "Видео",
				lblExternal: "Веб-страница",
				disabled: "Объект был отключен администратором",
				url: "Чтобы вручную ввести веб-адрес изображения",
				userLookup: "Загрузить альбомы",
				notImplemented: "Еще не реализовано."
			},
			imageSelector: {
				lblStep1: "Выберите услугу",
				lblStep2: "Выберите ваши средства массовой информации",
				lblStep3: "Настроить"
			},
			imageSelectorHome: {
				explain: "Загрузка изображения из социальных средств массовой информации,<br>или прямо из URL-адреса"
			},
			imageSelectorFlickr: {
				userInputLbl: "Имя пользователя",
				signInMsg2: "Пользователь не найден",
				loadingFailed: "Загрузка не удалась"
			},
			imageSelectorFacebook: {
				leftHeader: "Пользователь Facebook",
				rightHeader: "Страница Facebook",
				pageExplain: "Страница Facebook - это публичный продукт, как <b>esrigis</b>. Вы можете взять имя страницы, расположенное после первой косой черты \'/\' в URL страницы.",
				pageInputLbl: "Имя страницы",
				lookupMsgError: "Страница не найдена"
			},
			imageSelectorPicasa: {
				userInputLbl: "Электронная почта или Picasa / ID Google +",
				signInMsg2: "Учетная запись не найдена",
				signInMsg3: "Не общедоступный альбом",
				howToFind: "Как найти ID учетной записи Picasa или Google+",
				howToFind2: "Скопируйте цифры, расположенные между первой и второй косой чертой \'/\' любой страницы Picasa или G+"
			},
			videoSelectorCommon: {
				check: "Проверить",
				notFound: "Видео не найдено",
				found: "Видео найдено",
				select: "Выбрать это видео"
			},
			videoSelectorHome: {
				other: "Другие"
			},
			videoSelectorYoutube: {
				url: "URL видео на Youtube",
				pageInputLbl: "Имя пользователя",
				lookupMsgError: "Пользователь не найден",
				howToFind: "Как найти имя пользователя YouTube",
				howToFind2: "Имя пользователя отображается под видео",
				found: "Найдено",
				noData: "Общедоступных видео не найдено"
			},
			videoSelectorVimeo: {
				url: "URL видео на Vimeo"
			},
			videoSelectorOther: {
				explain1: "Map Journal не может проигрывать необработанное видео (например, формата avi, mpeg), но он может проигрывать размещенные видео-файлы, которые содержат встроенные видео-плейеры (YouTube или Vimeo).",
				explain2: "Большинство сервисов для размещения видео-роликов позволяют использовать эту функцию. Вам необходимо найти соответствующую опцию, скопировать код и использовать в %WEBPAGE%.",
				explain3: "Или вы можете разместить видео самостоятельно, затем создать страницу HTML, которая использует видео-плейер, например %EXAMPLE% и разместить ссылку на эту страницу на %WEBPAGE%.",
				webpage: "Функция веб-страницы"
			},
			webpageSelectorHome: {
				lblUrl: "URL веб-страницы",
				lblEmbed: "Встроенный код",
				lblOR: "ИЛИ",
				lblError1: "Ошибка, очистите одно из двух входных полей.",
				lblError2: "Внедренный код может содержать только один <iframe>"
			},
			mediaConfigure: {
				lblURL: "URL-адрес",
				lblURLPH: "URL-адрес изображения должен начинаться с http:// и заканчиваться .jpg или .png",
				lblLabel: "Заголовок изображения",
				lblLabel1: "Заголовок",
				lblLabel2: "Наведите курсор на текст",
				lblLabel3: "Нет",
				lblLabelPH: "Введите текст...",
				lblMaximize: "Добавить кнопку увеличения размера до максимального в угол изображения",
				lblMaximizeHelp: "Рекомендуется только для фотографий высокого качества",
				lblPosition: "Положение",
				lblPosition1: "По центру",
				lblPosition2: "Заливка",
				lblPosition3: "Разместить",
				lblPosition4: "Растяжка",
				lblPosition5: "Настраиваемый",
				tooltipDimension: "Значение можно задать в 'px' или '%'",
				lblPosition2Explain: "(может быть урезано)",
				lblPosition3Explain: "(не будет урезаться)",
				lblPosition3Explain2: "(ширина всегда будет соответствовать панели)",
				lblPosition4Explain: "(может исказиться)"
			},
			editorActionGeocode: {
				lblTitle: "Найдите адрес или место",
				mapMarkerExplain: "При нажатии на ссылку пользователь увидит маркер карты"
			},
			editorActionMedia: {
				lblTitle: "Изменить ресурсы основной площадки"
			},
			editorInlineMedia: {
				lblTitle: "Вставить изображение или видео"
			}
		}
	})

);
