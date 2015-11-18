﻿define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Medija",
				lblSelect2: "Turinys",
				lblMap: "Žemėlapis",
				lblImage: "Paveikslėlis",
				lblVideo: "Video",
				lblExternal: "Tinklalapis",
				disabled: "Šią funkciją išjungė Administratorius",
				url: "Jei norite rankiniu būdu įvesti vaizdo adresą internete",
				userLookup: "Įkelti albumus",
				notImplemented: "Dar neįdiegta.",
				noData: "Viešųjų albumų nerasta"
			},
			imageSelector: {
				lblStep1: "Pasirinkite paslaugą",
				lblStep2: "Pasirinkite įvairialypę informaciją",
				lblStep3: "Konfigūruoti"
			},
			imageSelectorHome: {
				explain: "Įkelti vaizdus iš socialinio tinklo <br /> arba tiesiogiai iš URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Vartotojo vardas",
				signInMsg2: "Vartotojas nerastas",
				loadingFailed: "Įkelti nepavyko"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook vartotojas",
				rightHeader: "Facebook puslapis",
				pageExplain: "Facebook puslapis yra viešas prekės ženklas, produktas ar įžymybė kaip <b>esrigis</b>. Jūs galite pamatyti puslapio pavadinimą po pirmo \'/\' puslapio URL.",
				pageInputLbl: "Puslapio pavadinimas",
				lookupMsgError: "Puslapis nerastas"
			},
			imageSelectorPicasa: {
				userInputLbl: "E. pašto arba Picasa / Google+ ID",
				signInMsg2: "Paskyra nerasta",
				howToFind: "Kaip surasti Picasa arba Google+ paskyros ID",
				howToFind2: "Nukopijuokite skaičius tarp pirmo ir antro \'/\' bet kuriame Picasa ar G+ puslapyje"
			},
			videoSelectorCommon: {
				check: "Tikrinti",
				notFound: "Vaizdo įrašas nerastas",
				found: "Vaizdo įrašas surastas",
				select: "Pasirinkite šį vaizdo įrašą"
			},
			videoSelectorHome: {
				other: "Kita"
			},
			videoSelectorYoutube: {
				url: "Youtube vaizdo įrašo URL",
				pageInputLbl: "Vartotojo vardas",
				lookupMsgError: "Vartotojas nerastas",
				howToFind: "Kaip rasti YouTube vartotojo vardą",
				howToFind2: "Vartotojo vardas rodomas po vaizdo įrašo",
				found: "Rasta",
				noData: "Nerasta viešų vaizdo įrašų",
				videoNotChecked: "Vaizdo įrašas nebuvo patikrintas „YouTube“, bet jo adresas atrodo tinkamas.",
				checkFailedAPI: "„YouTube“ patikra nepavyko, patikrinkite „YouTube“ API raktą."
			},
			videoSelectorVimeo: {
				url: "Vimeo vaizdo įrašo URL"
			},
			videoSelectorOther: {
				explain1: "Pasakojimas negali paleisti neapdorotų vaizdo įrašų (pvz., avi, mpeg), bet jis gali leisti patalpintus vaizdo failus, kuriuose yra integruoti leistuvai (pvz., YouTube ar Vimeo).",
				explain2: "Dauguma vaizdo įrašų talpinimo paslaugų siūlo tokią funkciją, tereikia rasti vaizdo įrašo integravimo parinktį, nukopijuoti pateiktą kodą ir naudoti %WEBPAGE%.",
				explain3: "Be to, jei norite patalpinti vaizdo įrašą patys, galite sukurti HTML puslapį, kuriame būtų naudojamas vaizdo leistuvas, pvz., %EXAMPLE%, patalpinti tą puslapį ir taip pat naudoti %WEBPAGE%.",
				webpage: "Tinklalapio elementas"
			},
			webpageSelectorHome: {
				lblUrl: "Tinklalapio URL",
				lblEmbed: "Įterpimo kodas",
				lblOR: "ARBA",
				lblError1: "Klaida, išvalykite vieną iš dviejų įvesties laukų.",
				lblError2: "Įterpimo kode gali būti tik vienas %IFRAMETAG%",
				configure: "Konfigūruoti"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Paveikslėlio URL turi prasidėti http:// ir baigtis .jpg arba .png",
				lblURLError: "Atrodo, kad šis paveikslėlis netinkamas. Pateikite tiesioginę nuorodą į paveikslėlio failą (URL paprastai turi baigtis .jpg arba .png). Nuorodos į tinklalapį, kuriame yra paveikslėlis, neveiks.",
				lblURLCheck: "Tikrinamas paveikslėlis...",
				lblLabel: "Paveikslėlio antraštė",
				lblLabel1: "Antraštė",
				lblLabel2: "Tekstas, rodomas užvedus",
				lblLabel3: "Nėra",
				lblLabelPH: "Įveskite tekstą...",
				lblMaximize: "Paveikslėlio kampe įtraukti maksimizavimo mygtuką",
				lblMaximizeHelp: "Rekomenduojama tik aukštos raiškos nuotraukoms",
				lblPosition: "Padėtis",
				lblPosition1: "Centruoti",
				lblPosition2: "Užpildyti",
				lblPosition3: "Talpinti",
				lblPosition4: "Ištempti",
				lblPosition5: "Adaptuota",
				tooltipDimension: "Reikšmę galima nurodyti piks. arba %",
				tooltipDimension2: "Reikšmę reikia nurodyti piks.",
				lblPosition2Explain: "(gali būti apkarpoma)",
				lblPosition3Explain: "(nebus apkarpoma)",
				lblPosition3Explain2: "(plotis visada atitiks skydą)",
				lblPosition4Explain: "(gali būti iškraipoma)",
				unloadLbl: "Iškelti, kai skaitytojas palieka šią dalį",
				unloadHelp: "Jeigu tinklalapis turi garsinės arba vaizdinės medijos, palikite šią parinktį pažymėtą, kad turinys nebūtų leidžiamas, kai skaitytojas nutolsta. Parinktį pažymėkite, jeigu, pvz., norite leisti garso takelį skaitytojui keliaujant per pasakojimą.<br />Jeigu tinklalapis yra aplikacija, pašalinkite žymę, kad skaitytojui sugrįžus pasakojimas nebūtų įkeltas iš naujo."
			},
			editorActionGeocode: {
				lblTitle: "Raskite adresą arba vietą",
				mapMarkerExplain: "Spustelėjęs nuorodą, vartotojas matys žemėlapio žymeklį"
			},
			editorActionMedia: {
				lblTitle: "Keisti pagrindinės srities turinį"
			},
			editorInlineMedia: {
				lblTitle: "Įterpti paveikslėlį, vaizdo įrašą arba tinklalapį"
			}
		}
	})
);
