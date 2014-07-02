define(
	 ({
		builder: {
			layouts: {
				mainStage: "Nivelul principal",
				sideTitle: "Panou lateral",
				sideDescr: "O configuraţie pentru o descriere cu mult text, care excelează în combinarea fotografiilor cu videoclipuri şi hărţi într-un mesaj cu un obiect clar.",
				floatTitle: "Panou mobil",
				floatDescr: "O configuraţie care pune accentul pe cartografie, permiţând şi un panoul transparent cu un text în formă scurtă pentru a ajuta la relatarea informaţiilor."
			},
			common: {
				lblStatus1: "Publicat",
				lblStatus2: "Schiţă",
				lblStatus3: "Ascuns"
			},
			settingsLayoutOptions: {
				title: "Opţiuni configuraţie",
				cfgLeft: "Stânga",
				cfgRight: "Dreapta",
				cfgSmall: "Mic",
				cfgMedium: "Mediu",
				cfgLarge: "Mare",
				socialLinksLabel: "Afişare linkuri de partajare în partea de jos a fiecărei secţiuni",
				socialLinksDescr: "Acest lucru le permite cititorilor să consulte şi să promoveze anumite secţiuni din %TPL_NAME%. De exemplu, dacă utilizaţi o pictogramă pentru partajare de secţiuni, cititorii vor ajunge în secţiunea %TPL_NAME% respectivă şi nu la începutul informaţiilor. Cititorii pot utiliza linkul pentru servicii de socializare din secţiunea pentru titlu pentru a promova întregul %TPL_NAME% (fila titlului) şi pot ajunge la începutul %TPL_NAME%."
			},
			initPopup: {
				title: "Bine aţi venit la"
			},
			addEditPopup: {
				disabled: "Opţiunea Adăugare secţiune este dezactivată deoarece a fost atins numărul maxim de secţiuni permise.",
				titleAdd: "Adăugare secţiune",
				titleAddHome: "Adăugare secţiune principală",
				titleEdit: "Editare secţiune",
				step: "Etapă",
				stepMainStageExplain: "Conţinut scenă principală",
				stepPanelExplain: "Conţinut",
				stepMainStageNextTooltip: "Introduceţi titilul secţiunii şi selectaţi conţinutul pentru nivelul principal",
				step2NextTooltip: "Introduceţi titlul secţiunii şi conţinutul %LAYOUT-TYPE%",
				stepNextTooltipNext: "pentru a trece la paşii următori",
				stepNextTooltipAdd: "pentru a adăuga secţiunea",
				firstAddExplain: "Această primă secţiune este secţiunea dvs. principală. Consideraţi-o ca fiind o „copertă” pentru informaţiile pe care le transmiteţi. Titlul pe care l-aţi definit va fi afişat cu fonturi mari.",
				firstAddLeanMore: "Aflaţi mai multe",
				titlePlaceholder: "Titlu secţiune..."
			},
			addEditViewText: {
				editorPlaceholder: "Adăugaţi text, linkuri şi mici imagini aici.",
				editorActionsTitle: "Acţiuni nivel principal",
				editorActionsHelpDescr: "Utilizaţi aceste comenzi pentru a crea linkuri ce vor modifica nivelul principal. De exemplu, când un cititor face clic pe un link, puteţi dori să transfocaţi harta într-o anumită locaţie, să afişaţi altă hartă web sau să afişaţi o imagine."
			},
			organizePopup: {
				title: "Organizare",
				lblHeader: "Trageţi şi plasaţi secţiuni pentru a vă organiza conţinutul.",
				lblColTitle: "Titlu",
				lblColPubDate: "Data publicării",
				lblColStatus: "Stare",
				checkDisplayReverse: "Afişare secţiuni în ordine inversă",
				btnApplyWarning: "Confirmare ştergere a %NB% secţiuni",
				deleteTooltip: "Ştergere",
				firstSectionExplain: "(Secţiunea din pagina principală nu poate fi eliminată)"
			},
			exportData: {
				btn: "Export conţinut",
				tooltip: "Exportul conţinutului vă permite să vizualizaţi şi să creaţi o copie de rezervă a Jurnalului pentru cazul în care îl ştergeţi accidental. Copiaţi şi lipiţi conţinutul paginii în orice procesor de text."
			},
			help: {
				lblHelp: "Ajutor",
				lblAdd: "Adăugare secţiune",
				lblSettings: "Setări",
				lblOrga: "Organizare conţinut",
				lblEdit: "Editări",
				lblPublish: "Partajare",
				lblTips: "Sugestii",
				lblMore: "Doriţi mai mult?",
				lblLink: "Vizitaţi site-ul web cu hărţi informative.",
				content1Div1: "La alcătuirea unei relatări, puteţi integra o multitudine de stiluri. <strong>%LAYOUT_TITLE%</strong> conţine de regulă text, imagini şi videoclipuri, în timp ce hărţile tind să se afle în <strong>Nivelul principal</strong>. Cu toate acestea, %TPL_NAME% vă permite să utilizaţi şi imagini de obiecte spaţiale, diagrame şi videoclipuri în nivelul principal.",
				content1Div2: "Adăugarea de secţiuni vă permite să vă particularizaţi cu adevărat experienţa de relatare. Pe măsură ce cititorii derulează textul %LAYOUT_TITLE%, o hartă din Nivelul principal poate fi panoramată sau transfocată în punctele cheie sau noi hărţi şi imagini pot fi comutate automat în sprijinul mesajului.",
				content2Div1: "Aici puteţi ajusta modul în care se afişează %TPL_NAME%. Aici puteţi rafina scheme de culori, configuraţii şi dimensiuni.",
				content2Div2: "De asemenea, puteţi adăuga linkuri către Facebook, Twitter şi Bitly, astfel încât cititorii să poată răspândi uşor %TPL_NAME% către alţii.",
				content3Div1: "Conţinutul dvs. este organizat în secţiuni. Puteţi avea oricâte secţiuni doriţi (gândiţi-vă la acestea ca la nişte mini-capitole). Succesiunea acestor capitole este importantă; în Organizare puteţi reordona sau şterge secţiuni după cum doriţi.",
				content4Div1: "Aţi găsit o greşeală sau doriţi să modificaţi materialul? Nicio problemă. Căutaţi în aplicaţie pictograma de editare pentru modifica conţinutul. Pe măsură ce dezvoltaţi %TPL_NAME%, veţi utiliza de multe ori funcţiile de editare!",
				content5Div1: "%TPL_NAME% este salvat în contul dvs. %PORTAL% şi este privat în mod implicit. Dvs. puteţi decide să partajaţi relatarea în cadrul organizaţiei sau să o deschideţi publicului larg. Vă oferim chiar şi o adresă URL stabilă, scurtată, pe care să o puteţi partaja mai uşor.",
				content6Div1: "Titlul secţiunii principale este şi titlul Jurnalului; consideraţi secţiunea principală ca fiind o „copertă” pentru informaţiile pe care le transmiteţi. Titlul secţiunii principale va rămâne vizibil în timpul navigării cititorilor prin Jurnal.",
				content6Div2: "%LAYOUT_TITLE% nu este obligatoriu să fie numai text. Puteţi include şi fotografii şi clipuri video pentru a ajuta la reflectarea informaţiilor şi întreruperea secţiunilor lungi de text!"
			},
			landing: {
				lblAdd: "Cum doriţi să denumiţi Jurnalul hărţii?",
				phAdd: "Introduceţi titlul...",
				lblOR: "Sau",
				lblHelp: "Efectuaţi un tur"
			},
			firstAddSplash: {
				thisis: "Aceasta este"
			}
        }
    })

);
