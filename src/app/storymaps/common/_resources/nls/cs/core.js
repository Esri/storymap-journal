define(
	 ({
		commonCore: {
			common: {
				add: "Přidat",
				edit: "Editovat",
				save: "Uložit",
				next: "Další",
				cancel: "Storno",
				back: "Zpět",
				apply: "Použít",
				close: "Zavřít",
				open: "Otevřít",
				start: "Spustit",
				loading: "Načítání",
				disabledAdmin: "Tato funkce byla zakázána administrátorem",
				width: "Šířka",
				height: "Výška",
				create: "Vytvořit",
				yes: "Ano",
				no: "Ne",
				mystories: "Moje příběhy"
			},
			inlineFieldEdit: {
				editMe: "Edituj mě!"
			},
			builderPanel: {
				panelHeader: "Nástroj pro tvorbu %TPL_NAME%",
				buttonSaving: "Ukládání",
				buttonSaved: "Uloženo",
				buttonShare: "Sdílet",
				buttonSettings: "Nastavení",
				buttonHelp: "Nápověda",
				buttonPreview: "Zobrazit příběh",
				tooltipFirstSave: "Tato funkce není k dispozici, dokud aplikaci neuložíte.",
				tooltipNotShared: "Tato funkce není k dispozici, dokud aplikaci nenasdílíte.",
				tooltipNotShared2: "Váš příběh není sdílen, máte k němu přístup jenom vy.",
				noPendingChange: "Žádná neuložená změna",
				unSavedChangePlural: "Neuložené změny",
				closeWithPendingChange: "Opravdu chcete potvrdit tuto akci? Vaše změny budou ztraceny.",
				saveError: "Uložení se nezdařilo, zkuste to znovu.",
				status1: "Příběh je sdílený, ale obsahuje problémy",
				status2: "Příběh není sdílený, ale obsahuje problémy",
				status3: "Příběh je veřejný",
				status4: "Příběh je sdílen v rámci vaší organizace",
				status5: "Příběh je soukromý",
				status6: "Příběh ještě není uložen",
				checking: "Kontrola",
				fix: "Opravit"
			},
			saveError: {
				title: "Chyba při ukládání příběhu",
				err1Div1: "Příběh nelze uložit, protože již máte uloženou jinou položku se stejným názvem.",
				err1Div2: "Změňte název příběhu a poté ho uložte.",
				btnOk: "Změňte název příběhu"
			},
			saveErrorSocial: {
				title: "Aktualizace sdílení na sociálních sítích",
				panel1: "Vzhled vašeho příběhu na sociálních médiích byl aktualizován, název vaší položky webové aplikace ArcGIS se však neshoduje s názvem vašeho příběhu.",
				panel1tooltip: "Pokud definujete název, shrnutí a náhledový obrázek, váš příběh bude vypadat následovně:",
				panel2:	"Název, který chcete použít na sociálních sítích:",
				panel2q1: "Název příběhu (doporučeno)",
				panel2q1tooltip: "Pokud zvolíte tuto možnost, název položky se změní tak, aby se shodoval s názvem příběhu, a následující změny provedené v nástroji pro tvorbu se synchronizují.",
				panel2q2: "Název položky",
				panel3: "Chcete-li dále vylepšit vzhled příběhu na sociálních sítích, přejděte na ${MYSTORIES} a přidejte shrnutí a náhledový obrázek.",
				panel4: "Příště již neupozorňovat u tohoto příběhu"
			},
			share: {
				shareTitle: "Sdílejte svůj příběh",
				preview: "Náhled",
				viewlive: "Zobrazit příběh",
				btnPrivate: "Soukromé",
				btnPrivateTooltip: "Příběh můžete vidět pouze vy",
				btnOrg: "Organizace",
				btnOrgTooltip: "Příběh mohou vidět pouze členové vaší organizace",
				btnPublic: "Veřejné",
				btnPublicTooltip: "Příběh mohou vidět všichni",
				loadingMessage: "Probíhá kontrola případných problémů s vaším příběhem...",
				viewToggle1: "Zobrazit obsah příběhu",
				viewToggle2: "Zavřít obsah příběhu",
				socialize: "Socializovat",
				statusPrivate: "Váš příběh je soukromý, vidíte ho pouze vy.",
				statusError: "Obsah vašeho příběhu obsahuje problémy, které budou čtenářům viditelné. Tyto problémy můžete identifikovat a napravit níže.",
				statusNoErrPrivate: "Až budete připraveni, sdílejte svůj příběh!",
				mystoriesinvite: "Spravujte všechny své příběhy",
				notavailable1: "Je nám líto, sdílení vašeho příběhu z nástroje pro tvorbu není podporováno, jelikož tato aplikace není hostována v %PRODUCT%.",
				notavailable2: "Je nám líto, sdílení vašeho příběhu z nástroje pro tvorbu není podporováno v této verzi Portal for ArcGIS (vyžaduje 10.4 nebo novější).",
				notavailable3: "Tento příběh můžete sdílet z %LINK%.",
				notavailable4: "Moje příběhy",
				notavailable5: "stránku položky",
				notavailable6: "Je nám líto, tato funkce není v režimu vývoje plně podporována. V závislosti na vašem scénáři nasazení může být tato funkce podporována při nasazení.",
				notavailable7: "Nezapomeňte v %MYCONTENT% ověřit, že mapy a vrstvy použité ve vašem příběhu jsou také sdílené.",
				notavailable8: "Můj obsah",
				mystoriesinvite2: "Chcete-li vylepšit vzhled příběhu na sociálních sítích, přejděte na ${MYSTORIES} a přidejte shrnutí a náhledový obrázek."
			},
			settings: {
				header: "Nastavení",
				tabError: "Zkontrolujte prosím, nejsou-li v záložkách chyby."
			},
			settingsLayout: {
				title: "Rozvržení",
				explain: "Jaké rozvržení chcete použít?",
				explainInit: "Rozvržení můžete kdykoli změnit v dialogu nastavení.",
				viewExample: "Zobrazit živý příklad"
			},
			settingsTheme: {
				title: "Téma"
			},
			settingsHeader: {
				title: "Záhlaví",
				logoEsri: "Logo Esri",
				logoNone: "Bez loga",
				logoCustom: "Vlastní logo",
				logoCustomPlaceholder: "Adresa URL (max 250×50 pixelů)",
				logoCustomTargetPlaceholder: "Odkaz při kliknutí na obrázek",
				logoSocialExplain: "Odkaz v záhlaví si můžete přizpůsobit.",
				logoSocialText: "Text",
				logoSocialLink: "Odkaz",
				lblSmallHeader: "Použít kompaktní záhlaví (bez podnázvu)"
			},
			header: {
				title: "Změňte název šablony %TPL_NAME%.",
				subtitle: "Změňte podnázev šablony %TPL_NAME%."
			}
		}
	})
);
