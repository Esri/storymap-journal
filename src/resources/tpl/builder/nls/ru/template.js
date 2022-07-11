define({
  "builder": {
    "layouts": {
      "mainStage": "Основная площадка",
      "sideTitle": "Боковая панель",
      "sideDescr": "Компоновка с доминированием текста, содержащая фотографии, видео и карты, чтобы обратить основное внимание на тему.",
      "floatTitle": "Открепленная панель",
      "floatDescr": "Компоновка, которая делает акцент на картографию, предоставляя прозрачную панель краткого текста, помогающего передать историю."
    },
    "common": {
      "lblStatus1": "Опубликованные",
      "lblStatus2": "Черновой",
      "lblStatus3": "Скрытый"
    },
    "settingsLayoutOptions": {
      "title": "Параметры компоновки",
      "cfgLeft": "Слева",
      "cfgRight": "Справа",
      "cfgSmall": "Малый",
      "cfgMedium": "Средний",
      "cfgLarge": "Большой",
      "socialLinksLabel": "Отображать ссылки на публикацию в нижней части каждого раздела",
      "socialLinksDescr": "Это дает возможность читателям, делать ссылки и повышать популярность отдельных разделов %TPL_NAME%.  Например, если вы используйте в разделе значок поделиться, читатели скорее обратятся к этому разделу %TPL_NAME%, чем  к началу. Они могут с помощью ссылок на социальные сети, расположенных у названия раздела, сделать известным весь %TPL_NAME% (закладка названия) и выполнить переход в начало %TPL_NAME%.",
      "socialDisabled": "Этот объект доступен только с компоновкой Floating Panel",
      "socialWarning": "Ваша история использует компоновку Side Panel, но мы рекомендуем использовать эту опцию только с компоновкой Floating Panel, чтобы избежать ситуации, когда панель не сможет отобразить нужный раздел повествования с изображениями. Вы можете продолжать использовать эту опцию, но в случае ее отключения она будет доступна только при использовании компоновки Floating Panel."
    },
    "settingsLayoutFonts": {
      "title": "Шрифты",
      "defaultLbl": "По умолчанию",
      "sectionTitleLbl": "Название раздела",
      "sectionContentLbl": "Содержание раздела"
    },
    "settingsThemeOptions": {
      "lblOrgTheme": "Тема организации",
      "lblModTheme": "Текущая тема"
    },
    "initPopup": {
      "title": "Добро пожаловать"
    },
    "addEditPopup": {
      "disabled": "Функция Добавить раздел отключена, поскольку достигнуто максимально допустимое число разделов.",
      "titleAdd": "Добавить раздел",
      "titleAddHome": "Добавить домашний раздел",
      "titleEdit": "Изменить раздел",
      "step": "Шаг",
      "stepMainStageExplain": "Ресурсы главной площадки",
      "stepPanelExplain": "Ресурсы",
      "stepMainStageNextTooltip": "Введите название раздела и выберите ресурсы основной площадки",
      "stepMainStageNextTooltip2": "Выберите ресурсы главной площадки",
      "step2NextTooltip": "Введите название раздела и ресурсы %LAYOUT-TYPE%",
      "stepNextTooltipNext": "чтобы перейти к следующему шагу",
      "stepNextTooltipAdd": "чтобы добавить раздел",
      "firstAddExplain": "Первый раздел является вашим Главным (стартовым) разделом, как обложка для вашей истории. Указанный заголовок будет отображаться крупным шрифтом.",
      "firstAddLeanMore": "Подробнее",
      "titlePlaceholder": "Название раздела..."
    },
    "addEditViewText": {
      "editorPlaceholder": "Добавьте здесь текст, ссылки и небольшие графики.",
      "editorActionsTitle": "Действия в истории",
      "editorActionsHelpDescr": "Создайте ссылки в описании, которые помогут раскрыть историю. Действия в истории могут ссылаться на другой раздел или менять основной содержание. Например, можно настроить действие, чтобы карты переместилась в другое местоположение, включить/выключить слои на карте, изменить источник основного содержания на другое изображение, видео, карту или веб-страницу.",
      "mainStageDisabled": "Если редактор отображается в максимальном размере, действия в истории отключены"
    },
    "organizePopup": {
      "title": "Организовать",
      "lblHeader": "Для организации секций в истории вы можете просто перетаскивать разделы.",
      "lblColTitle": "Название",
      "lblColPubDate": "Дата публикации",
      "lblColStatus": "Статус",
      "checkDisplayReverse": "Отображать разделы в обратном порядке",
      "btnApplyWarning": "Подтвердите удаление разделов %NB%",
      "deleteTooltip": "Удалить",
      "firstSectionExplain": "(Главный раздел нельзя переместить)",
      "exportMainStage": "Ресурсы главной площадки",
      "exportPanel": "Панель ресурсов",
      "exportActions": "Действия в истории"
    },
    "exportData": {
      "btn": "Экспорт ресурсов",
      "tooltip": "Экспорт ваших ресурсов позволяет просматривать и создавать резервные копии ресурсов, которые могут случайно быть удалены. Просто скопируйте и вставьте содержимое страницы в любой текстовый процессор."
    },
    "help": {
      "lblHelp": "Справка",
      "lblAdd": "Добавить раздел",
      "lblSettings": "Настройки",
      "lblOrga": "Организовать ресурсы",
      "lblEdit": "Изменения",
      "lblPublish": "Общий доступ",
      "lblTips": "Подсказки",
      "lblMore": "Хотите узнать больше?",
      "lblLink": "Посетите веб-сайт Esri Story Maps.",
      "content1Div1": "В процессе создания вашей истории вы можете интегрировать множество стилей. Компоновка <strong>%LAYOUT_TITLE%</strong> обычно содержит текст, изображения и видео, а для карт применяется <strong>Основная площадка</strong>. Однако %TPL_NAME% позволяет встраивать также изображения, таблицы и видео в основную площадку.",
      "content1Div2": "Добавление разделов позволяет чётко настроить представление вашей истории. Читатели просматривают текст  %LAYOUT_TITLE%, карту на основной площадке можно масштабировать и перемещать, новые карты и изображения автоматически переключаются для поддержки вашего сообщения.",
      "content2Div1": "В диалоговом окне настройки можно изменить вид вашего %TPL_NAME%. Вы можете изменить компоновку, выбрать другую цветовую схему, изменить шрифт и т.д.",
      "content2Div2": "Вы также можете заменить логотип Esri на собственный, отражающий ваш бренд. Также, можно настроить веб-сайт, который будет запускаться при щелчке по логотипу, чтобы пользователь мог получить дополнительные сведения.",
      "content3Div1": "Ваши ресурсы организованны по разделам. Вы можете создавать любое количество разделов (глав истории). Последовательность изложения этих глав не менее важна; с помощью инструмента Организовать вы можете задать любой порядок следования и удалить ненужные главы.",
      "content4Div1": "Нашли ошибку или хотите изменить свой материал? Не волнуйтесь. Найдите значок редактирования в приложении, чтобы внести изменения в свой ресурс. Вы будете многократно использовать функции редактирования по мере разработки %TPL_NAME%!",
      "content5Div1": "Первоначально %TPL_NAME% сохраняется как частный. Используйте кнопку Общий доступ, чтобы опубликовать его. Вы можете опубликовать %TPL_NAME% с доступом для всех.",
      "content5Div2": "В зависимости от учетной записи может быть доступна опция настройки доступа к %TPL_NAME% только для участников вашей организации, так что прочие пользователи не будут иметь доступа.",
      "content6Div1": "Заголовок вашего Главного раздела также является заголовком журнала; главный раздел можно сравнить с обложкой вашей истории. Заголовок Главного раздела виден с любой страницы журнала.",
      "content6Div2": "В вашем %LAYOUT_TITLE% может быть не только текст, но и фотографии и видео, чтобы сделать историю более красочной и оживить длинные тексты разделов."
    },
    "landing": {
      "lblAdd": "Как вы хотите назвать свой Map Journal?",
      "phAdd": "Введите ваш заголовок...",
      "lblOR": "Или",
      "lblHelp": "Ознакомительный тур",
      "quote0": "Всегда можно придумать историю, которая перенесет читателя в другое место.",
      "quote1": "Карты-истории – самый эффективный способ воплотить свои идеи прямо сейчас.",
      "quote2": "Истории, которые мы рассказываем, создают другой мир. Если вы хотите изменить мир, вам нужно изменить свою историю. Это применимо как к отдельным лицам, так и к учреждениям.",
      "quote3": "История предоставляет человеку кратчайший путь к правдивым знаниям.",
      "quote4": "Людям не требуется большего объема информации. У них ее и так уже слишком много. Они должны поверить вам, вашим задачам и их успешному решению в вашей истории.",
      "quote5": "Я искренне верю, что люди ищут истории, которые действительно важны, которые вдохновляют и интересны многим.",
      "quote6": "Если вы хотите повлиять на человека или группу людей, чтобы повлиять на нечто важное в их повседневной жизни, расскажите им свою интересную историю.",
      "quote7": "Когда вы рассказываете мне что-то, это эссе. А когда показываете - история.",
      "quote8": "Если вы не отличаете между собой деревья, вы можете заблудиться в лесу, а если вы не изучаете истории, вы можете потеряться в жизни.",
      "quote9": "Истории - это творческое переложение реальной жизни, позволяющее показать ее ярко и четко. Истории помогают межличностному взаимодействию.",
      "quote10": "Нет ничего хуже, чем носить внутри себя не рассказанную историю.",
      "quote11": "Возможно, истории - это просто контакт с вашей душой.",
      "quote12": "Истории - одно из самых мощных орудий в арсенале настоящего лидера.",
      "quote13": "Истории устроены так, что они способны включить в себя далеко не все, что есть на самом деле."
    },
    "firstAddSplash": {
      "thisis": "Это",
      "lblMain": "Это главная площадка %BR%"
    }
  }
});