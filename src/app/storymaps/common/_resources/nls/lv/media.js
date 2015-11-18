define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Medijs",
				lblSelect2: "Saturs",
				lblMap: "Karte",
				lblImage: "Attēls",
				lblVideo: "Video",
				lblExternal: "Web lapa",
				disabled: "Šo funkciju administrators ir atspējojis",
				url: "Lai manuālie ievadītu attēla web adresi",
				userLookup: "Ielādēt albumus",
				notImplemented: "Vēl nav ieviests.",
				noData: "Nav atrasts publisks albums"
			},
			imageSelector: {
				lblStep1: "Izvēlēties servisu",
				lblStep2: "Izvēlēties mediju",
				lblStep3: "Konfigurēt"
			},
			imageSelectorHome: {
				explain: "Ielādējiet attēlus no sociālajiem medijiem<br /> vai tieši no URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Lietotāja vārds",
				signInMsg2: "Lietotājs nav atrasts",
				loadingFailed: "Ielāde neizdevās"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook Lietotājs",
				rightHeader: "Facebook Lapa",
				pageExplain: "Facebook lapa ir publisks zīmols/produkts vai slavenība, piem., <b>esrigis</b>. Jūs varat saņemt lapas nosaukumu, pēc pirmās \'/\' lapas URL.",
				pageInputLbl: "Lapas nosaukums",
				lookupMsgError: "Lapa nav atrasta"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-pasta adrese vai Picasa/Google+ ID",
				signInMsg2: "Konts nav atrasts",
				howToFind: "Kā atrast Picasa vai Google+ konta ID",
				howToFind2: "Kopēt ciparus starp pirmo un otro \'/\' no jebkura Picasa vai G+ lapa"
			},
			videoSelectorCommon: {
				check: "Pārbaudīt",
				notFound: "Video nav atrasts",
				found: "Video atrasts",
				select: "Atlasīt šo video"
			},
			videoSelectorHome: {
				other: "Cits"
			},
			videoSelectorYoutube: {
				url: "Youtube video URL",
				pageInputLbl: "Lietotāja vārds",
				lookupMsgError: "Lietotājs nav atrasts",
				howToFind: "Kā atrast YouTube lietotāja vārdu",
				howToFind2: "Lietotāja vārds ir attēlots zem video",
				found: "Atrasts",
				noData: "Nav atrasti publiski video",
				videoNotChecked: "Video nav pārbaudīts vietnē YouTube, bet tā adrese šķiet droša.",
				checkFailedAPI: "Pārbaude YouTube neizdevās. Pārbaudiet YouTube API atslēgu."
			},
			videoSelectorVimeo: {
				url: "Vimeo video URL"
			},
			videoSelectorOther: {
				explain1: "Stāstos nevar tikt atskaņoti neapstrādāti video (piem., .avi un .mpeg), bet var tikt atskaņoti viesoti video faili ar iebūvētiem atskaņotājiem (piem., YouTube vai Vimeo).",
				explain2: "Lielākā daļa video mitināšanas pakalpojumu piedāvā šo funkciju, jums ir jāatrod iespēja iedarināt video, nokopēt saņemto kodu un izmantot %WEBPAGE%.",
				explain3: "Ja video vēlaties mitināt pats, varat arī izveidot HTML lapu, kurā tiek izmantots video atskaņotājs (piemēram, %EXAMPLE%), mitināt šo lapu un arī izmantot %WEBPAGE%.",
				webpage: "Web lapas funkcija"
			},
			webpageSelectorHome: {
				lblUrl: "Web lapas URL",
				lblEmbed: "Iedarināt kodu",
				lblOR: "VAI",
				lblError1: "Kļūda, notīriet vienu no diviem ievades laukiem.",
				lblError2: "Iegultais kods var saturēt tikai vienu %IFRAMETAG%",
				configure: "Konfigurēt"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Attēla URL ir jāsākas ar http:// un jābeidzas ar .jpg vai .png",
				lblURLError: "Šķiet, ka šis attēls nav derīgs. Lūdzu, norādiet tiešu saiti uz attēla failu (parasti URL beidzas ar .jpg vai .png). Saites uz web lapu, kurā atrodas attēls, nedarbosies.",
				lblURLCheck: "Notiek attēla pārbaude...",
				lblLabel: "Attēla teksts",
				lblLabel1: "Uzraksts",
				lblLabel2: "Novietot virs teksta",
				lblLabel3: "Neviens",
				lblLabelPH: "Ievadiet tekstu...",
				lblMaximize: "Attēla stūrī iekļaut maksimizēšanas pogu",
				lblMaximizeHelp: "Ieteicams tikai augstas kvalitātes foto",
				lblPosition: "Pozīcija",
				lblPosition1: "Centrs",
				lblPosition2: "Aizpildīt",
				lblPosition3: "Ietilpināt",
				lblPosition4: "Izstiept",
				lblPosition5: "Pielāgots",
				tooltipDimension: "Vērtību var norādīt \'px\' vai \'%\'",
				tooltipDimension2: "Vērtība ir jānorāda pikseļos",
				lblPosition2Explain: "(var apgriezt)",
				lblPosition3Explain: "(netiks apgriezts)",
				lblPosition3Explain2: "(platums vienmēr atbildīs panelim)",
				lblPosition4Explain: "(var tikt izkropļots)",
				unloadLbl: "Izlādēt, ja lasītājs pārvietojas uz citurieni",
				unloadHelp: "Ja tīmekļa lapā ir audio vai video multivide, atzīmējiet šo iespēju, lai šis saturs netiktu atskaņots brīdī, kad lasītājs naviģē tālāk. Noņemiet atzīmi, ja vēlaties, lai, piemēram, tiktu turpināta skaņu celiņa atskaņošana, kamēr lasītājs virzās uz priekšu stāstā.<br />Ja tīmekļa lapa ir lietotne, noņemiet atzīmi pie šīs iespējas, lai stāsts netiktu ielādēts atkārtoti, lasītājam atgriežoties šajā sadaļā."
			},
			editorActionGeocode: {
				lblTitle: "Adreses vai vietas noteikšana",
				mapMarkerExplain: "Noklikšķinot uz saites, lietotājam tiks rādīts kartes punkts"
			},
			editorActionMedia: {
				lblTitle: "Galvenā posma satura maiņa"
			},
			editorInlineMedia: {
				lblTitle: "Attēla, video vai web lapas ievietošana"
			}
		}
	})
);
