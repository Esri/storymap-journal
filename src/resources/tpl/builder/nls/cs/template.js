define({
  "builder": {
    "layouts": {
      "mainStage": "Hlavní úroveň",
      "sideTitle": "Postranní panel",
      "sideDescr": "Rozvržení pro příběh s velkým množstvím textu, které umožňuje snadno zkombinovat fotografie, videa a mapy do jasně zaměřeného sdělení.",
      "floatTitle": "Plovoucí panel",
      "floatDescr": "Rozvržení, které soustředí pozornost na vaše mapy a zároveň díky krátkému, průhlednému textovému panelu pomáhá porozumět obsahu mapy."
    },
    "common": {
      "lblStatus1": "Publikované",
      "lblStatus2": "Návrh",
      "lblStatus3": "Skryté"
    },
    "settingsLayoutOptions": {
      "title": "Možnosti rozvržení",
      "cfgLeft": "Vlevo",
      "cfgRight": "Vpravo",
      "cfgSmall": "Malé",
      "cfgMedium": "Střední",
      "cfgLarge": "Velké",
      "socialLinksLabel": "Zobrazit na konci každé části odkazy pro sdílení",
      "socialLinksDescr": "Tato možnost čtenářům umožňuje se odkazovat na konkrétní části %TPL_NAME% a šířit je. Pokud například použijete ikonu pro sdílení částí, čtenáři se dostanou přímo na danou část %TPL_NAME% a nikoli na začátek příběhu. K šíření celého %TPL_NAME% mohou čtenáři použít odkaz na sociální média v titulní části (karta záhlaví), který vede na začátek %TPL_NAME%.",
      "socialDisabled": "Tato funkce je k dispozici pouze u rozvržení Plovoucí panel",
      "socialWarning": "Váš příběh používá rozvržení Postranní panel, nyní však tuto možnost doporučujeme používat pouze s rozvržením Plovoucí panel, aby nedošlo k problému, kdy se panel nemusí u příběhů s obrázky umístit do požadované části. Můžete tuto možnost nadále používat, ale pokud ji vypnete, bude již k dispozici pouze při použití rozvržení Plovoucí panel."
    },
    "settingsLayoutFonts": {
      "title": "Písma",
      "defaultLbl": "Výchozí",
      "sectionTitleLbl": "Nadpis části",
      "sectionContentLbl": "Obsah části"
    },
    "settingsThemeOptions": {
      "lblOrgTheme": "Motiv organizace",
      "lblModTheme": "Aktuální motiv"
    },
    "initPopup": {
      "title": "Vítejte v"
    },
    "addEditPopup": {
      "disabled": "Funkce Přidat Část je vypnuta, protože bylo dosaženo maximálního počtu povolených částí.",
      "titleAdd": "Přidat část",
      "titleAddHome": "Přidat domovskou část",
      "titleEdit": "Upravit část",
      "step": "Krok",
      "stepMainStageExplain": "Obsah hlavní úrovně",
      "stepPanelExplain": "Obsah",
      "stepMainStageNextTooltip": "Zadejte nadpis části a vyberte obsah hlavní úrovně.",
      "stepMainStageNextTooltip2": "Zvolte obsah hlavní úrovně.",
      "step2NextTooltip": "Zadejte nadpis části a obsah %LAYOUT-TYPE%.",
      "stepNextTooltipNext": "chcete-li přejít na další krok",
      "stepNextTooltipAdd": "chcete-li přidat část",
      "firstAddExplain": "První část je vaše domovská část. Berte ji jako „obálku“ svého příběhu. Nadpis, který jste právě zadali, se zde zobrazí velkým písmem.",
      "firstAddLeanMore": "Další informace",
      "titlePlaceholder": "Nadpis části..."
    },
    "addEditViewText": {
      "editorPlaceholder": "Sem přidejte text, odkazy a malé obrázky.",
      "editorActionsTitle": "Akce příběhu",
      "editorActionsHelpDescr": "Vytvářejte ve svém příběhu odkazy, které vám pomohou ho vyprávět. Akce příběhu mohou odkazovat na jiné sekce nebo měnit hlavní sekci. Můžete například nakonfigurovat akci, aby přesunula mapu na jiné umístění, zapnula nebo vypnula vrstvy mapy nebo změnila média v hlavní části na jiné obrázky, videa, mapy nebo webové stránky.",
      "mainStageDisabled": "Akce příběhu jsou vypnuty, pokud je editor maximalizován."
    },
    "organizePopup": {
      "title": "Organizovat",
      "lblHeader": "Zorganizujte svůj příběh kliknutím a přetažením jeho částí.",
      "lblColTitle": "Nadpis",
      "lblColPubDate": "Datum zveřejnění",
      "lblColStatus": "Stav",
      "checkDisplayReverse": "Zobrazit části v opačném pořadí",
      "btnApplyWarning": "Potvrdit smazání %NB% částí",
      "deleteTooltip": "Smazat",
      "firstSectionExplain": "(Domovskou část nelze přemístit)",
      "exportMainStage": "Obsah hlavní úrovně",
      "exportPanel": "Obsah panelu",
      "exportActions": "Akce příběhu"
    },
    "exportData": {
      "btn": "Exportovat obsah",
      "tooltip": "Exportování obsahu vám umožní prohlížet a vytvářet zálohu obsahu pro případ, že ho omylem smažete. Obsah stránky jednoduše zkopírujte a vložte do jakéhokoli textového editoru."
    },
    "help": {
      "lblHelp": "Nápověda",
      "lblAdd": "Přidat část",
      "lblSettings": "Nastavení",
      "lblOrga": "Zorganizovat obsah",
      "lblEdit": "Úpravy",
      "lblPublish": "Sdílet",
      "lblTips": "Tipy",
      "lblMore": "Chcete více?",
      "lblLink": "Navštivte web Esri věnovaný mapám s příběhem.",
      "content1Div1": "Při vytváření příběhu do něj můžete integrovat množství stylů. <strong>%LAYOUT_TITLE%</strong> většinou obsahuje text, obrázky a videa, zatímco mapy jsou zpravidla umístěny na <strong>hlavní úrovni</strong>. %TPL_NAME% vám nicméně umožňuje vkládat obrázky, grafy a videa i na hlavní úroveň.",
      "content1Div2": "Přidáváním částí si můžete obsah mapy přizpůsobit podle svých představ. Stejně jako čtenáři procházejí text %LAYOUT_TITLE%, mapa na hlavní úrovni se může posouvat nebo přibližovat na klíčové body, nebo se mohou automaticky aktivovat nové mapy a obrázky zdůrazňující vaši zprávu.",
      "content2Div1": "V dialogovém okně Nastavení můžete upravit vzhled %TPL_NAME%. Můžete zde měnit rozvržení, barevné schéma, písmo atd.",
      "content2Div2": "Můžete také nahradit logo Esri logem své vlastní značky. Dále můžete určit webové stránky s dalšími informacemi, na které bude čtenář přesměrován po kliknutí na logo.",
      "content3Div1": "Váš obsah je rozdělen do částí. Můžete jich mít libovolný počet (berte je jako malé kapitoly). Je důležité, jak kapitoly plynou za sebou, a proto je v části Organizovat můžete libovolně přeřazovat a odstraňovat.",
      "content4Div1": "Našli jste chybu nebo chcete změnit svůj materiál? Žádný problém. Hledejte v aplikaci ikonu úprav, která vám umožní změnit obsah. Funkce úprav použijete při vytváření %TPL_NAME% mnohokrát!",
      "content5Div1": "Šablona %TPL_NAME% se poprvé uloží v soukromém režimu. Chcete-li ji sdílet s ostatními, použijte tlačítko Sdílení. Šablonu %TPL_NAME% můžete sdílet s veřejností.",
      "content5Div2": "V závislosti na vašem účtu můžete mít k dispozici možnost sdílet šablonu %TPL_NAME% pouze se členy vaší organizace.",
      "content6Div1": "Nadpis domovské části je také nadpisem vašeho deníku. Domovská část je prakticky „obálkou“ vašeho příběhu. Nadpis domovské části zůstane viditelný, zatímco čtenáři budou procházet váš deník.",
      "content6Div2": "Vaše rozvržení %LAYOUT_TITLE% nemusí tvořit jen text. Můžete použít i fotografie a videa, abyste příběh oživili a rozdělili dlouhé bloky textu!"
    },
    "landing": {
      "lblAdd": "Jak chcete svůj Mapový deník nazvat?",
      "phAdd": "Zadejte nadpis...",
      "lblOR": "Nebo",
      "lblHelp": "Prohlídka",
      "quote0": "Vždy se najde místo pro příběh, který dokáže lidem rozšířit obzory.",
      "quote1": "Příběhy jsou nejmocnějším způsobem, jakým lze v dnešní době vypustit do světa nápady.",
      "quote2": "Příběhy, které vyprávíme, dávají světu jeho podobu. Pokud chcete změnit svět, musíte změnit svůj příběh. To platí jak pro jednotlivce, tak instituce.",
      "quote3": "Nejkratší spojnicí mezi lidskou bytostí a pravdou je příběh.",
      "quote4": "Lidé nechtějí vědět víc, už tak se topí v přemíře informací. Lidé vám chtějí věřit: vašim cílům, vašemu úspěchu a příběhu, který vyprávíte.",
      "quote5": "Upřímně mám za to, že lidé vyhledávají příběhy, které jsou něčím důležité: příběhy o vykoupení, příběhy podněcující inspiraci a příběhy, které mají hlubší dopad.",
      "quote6": "Chcete-li ovlivnit jednotlivce nebo skupinu lidí, aby přijali určitou hodnotu a žili podle ní každý den, povězte jim příběh.",
      "quote7": "Komunikujete-li slovy, stává se z vyprávění esej. Když dáte lidem možnost vnímat děj očima, vytváříte skutečný příběh.",
      "quote8": "Když neznáte stromy, můžete se snadno ztratit v lese, ale když neznáte příběhy, můžete se ztratit v životě.",
      "quote9": "Příběhy jsou kreativním převodem samotného života do silnějších, jasnějších a smysluplnějších zážitků. Jsou oběživem kontaktu s ostatními lidmi.",
      "quote10": "Není většího utrpení pro člověka, než když si v sobě nese nevyprávěný příběh.",
      "quote11": "Možná že příběhy jsou jen data obdařená duší.",
      "quote12": "Příběhy jsou tou nejmocnější zbraní v arzenálu každé vůdčí osobnosti.",
      "quote13": "Příběhy ze své povahy zamlčují víc, než se snaží sdělit."
    },
    "firstAddSplash": {
      "thisis": "Toto je",
      "lblMain": "Toto je hlavní úroveň %BR%"
    }
  }
});