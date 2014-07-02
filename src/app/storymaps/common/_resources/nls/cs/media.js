define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Média",
				lblSelect2: "Obsah",
				lblMap: "Mapa",
				lblImage: "Obrázek",
				lblVideo: "Video",
				lblExternal: "Webová stránka",
				disabled: "Tato funkce byla zakázána administrátorem.",
				url: "Umožňuje manuálně vložit webovou adresu obrázku.",
				userLookup: "Nahrát alba",
				notImplemented: "Dosud není implementováno."
			},
			imageSelector: {
				lblStep1: "Vyberte službu.",
				lblStep2: "Vyberte svá média.",
				lblStep3: "Konfigurovat"
			},
			imageSelectorHome: {
				explain: "Nahrajte obrázky ze sociálních médií <br /> nebo přímo z adresy URL."
			},
			imageSelectorFlickr: {
				userInputLbl: "Uživatelské jméno",
				signInMsg2: "Uživatel nenalezen",
				loadingFailed: "Nahrávání se nezdařilo."
			},
			imageSelectorFacebook: {
				leftHeader: "Uživatel služby Facebook",
				rightHeader: "Stránka služby Facebook",
				pageExplain: "Stránka služby Facebook představuje veřejnou značku či službu nebo známou osobnost, jako je například <b>esrigis</b>. Název stránky začíná za prvním lomítkem (/) v URL adrese stránky.",
				pageInputLbl: "Název stránky",
				lookupMsgError: "Stránka nenalezena"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-mail nebo identifikátor Picasa/Google+",
				signInMsg2: "Účet nenalezen",
				signInMsg3: "Žádné veřejné album",
				howToFind: "Jak najít identifikátor účtu Picasa nebo Google+",
				howToFind2: "Zkopírujte číslice mezi prvním a druhým lomítkem (/) libovolné stránky služeb Picasa nebo Google+."
			},
			videoSelectorCommon: {
				check: "Kontrola",
				notFound: "Video nebylo nalezeno",
				found: "Video bylo nalezeno",
				select: "Vybrat toto video"
			},
			videoSelectorHome: {
				other: "Jiné"
			},
			videoSelectorYoutube: {
				url: "Adresa URL videa ve službě YouTube",
				pageInputLbl: "Uživatelské jméno",
				lookupMsgError: "Uživatel nenalezen",
				howToFind: "Jak najít uživatelské jméno YouTube",
				howToFind2: "Uživatelské jméno se zobrazuje pod videi",
				found: "Nalezeno",
				noData: "Nenalezena žádná veřejná videa"
			},
			videoSelectorVimeo: {
				url: "Adresa URL videa ve službě Vimeo"
			},
			videoSelectorOther: {
				explain1: "Mapový deník nedokáže přehrávat videa v původním formátu (tj. avi, mpeg), ale dokáže přehrávat hostované videosoubory s vestavěným přehrávačem (tj. YouTube nebo Vimeo).",
				explain2: "Tuto funkci nabízí většina online služeb pro hostování videa. Musíte najít možnost pro vložení videa, zkopírovat uvedený kód a použít %WEBPAGE%.",
				explain3: "Video také můžete hostovat sami. Stačí vytvořit HTML stránku, která používá videopřehrávač, jako je %EXAMPLE%, tuto stránku hostovat a také použít %WEBPAGE%.",
				webpage: "Prvek webové stránky"
			},
			webpageSelectorHome: {
				lblUrl: "Adresa URL webové stránky",
				lblEmbed: "Kód vložení",
				lblOR: "NEBO",
				lblError1: "Chyba, vymažte jedno ze dvou vstupních polí.",
				lblError2: "Kód vložení může obsahovat pouze jeden prvek <iframe>."
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Adresa URL obrázku by měla začínat řetězcem http:// a končit .jpg nebo .png.",
				lblLabel: "Titulek obrázku",
				lblLabel1: "Popisek",
				lblLabel2: "Přejeďte ukazatelem myši přes text.",
				lblLabel3: "Žádné",
				lblLabelPH: "Napište nějaký text...",
				lblMaximize: "Zobrazit v rohu obrázku tlačítko pro zvětšení",
				lblMaximizeHelp: "Doporučeno pouze pro fotografie ve vysoké kvalitě",
				lblPosition: "Pozice",
				lblPosition1: "Na střed",
				lblPosition2: "Vyplnit",
				lblPosition3: "Přizpůsobit",
				lblPosition4: "Roztáhnout",
				lblPosition5: "Vlastní",
				tooltipDimension: "Hodnotu lze uvést v 'px' nebo '%'",
				lblPosition2Explain: "(může dojít k ořezu)",
				lblPosition3Explain: "(nedojde k ořezu)",
				lblPosition3Explain2: "(šířka se vždy přizpůsobí panelu)",
				lblPosition4Explain: "(může dojít ke zkreslení)"
			},
			editorActionGeocode: {
				lblTitle: "Najít adresu nebo místo",
				mapMarkerExplain: "Uživatel při kliknutí na odkaz uvidí mapovou značku."
			},
			editorActionMedia: {
				lblTitle: "Změnit obsah hlavní úrovně"
			},
			editorInlineMedia: {
				lblTitle: "Vložit obrázek nebo video"
			}
		}
	})

);
