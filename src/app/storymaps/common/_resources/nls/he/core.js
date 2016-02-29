define(
	 ({
		commonCore: {
			common: {
				add: "הוסף",
				edit: "עריכה",
				save: "שמור",
				next: "הבא",
				cancel: "ביטול",
				back: "חזור",
				apply: "בצע",
				close: "סגור",
				open: "פתח",
				start: "התחלה",
				loading: "טוען",
				disabledAdmin: "תכונה זו הוגדרה כלא זמינה על ידי המנהל",
				width: "רוחב",
				height: "גובה",
				create: "צור",
				yes: "כן",
				no: "לא",
				mystories: "הסיפורים שלי"
			},
			inlineFieldEdit: {
				editMe: "ערוך אותי!"
			},
			builderPanel: {
				panelHeader: "%TPL_NAME% Builder",
				buttonSaving: "שמירה",
				buttonSaved: "נשמר",
				buttonShare: "שתף",
				buttonSettings: "הגדרות",
				buttonHelp: "עזרה",
				buttonPreview: "הצג סיפור",
				tooltipFirstSave: "אפשרות זו אינה זמינה עד לשמירה.",
				tooltipNotShared: "אפשרות זו אינה זמינה עד לשיתוף.",
				tooltipNotShared2: "הסיפור שלך לא משותף, רק אתה יכול לגשת אליו.",
				noPendingChange: "אין שינוי לביצוע",
				unSavedChangePlural: "השינויים בהמתנה",
				closeWithPendingChange: "האם הינך בטוח שברצונך לאשר פעולה זו? אתה עלול לאבד את השינויים שביצעת.",
				saveError: "שמירה נכשלה, יש לנסות שוב",
				status1: "הסיפור שותף, אבל הוא כולל בעיות",
				status2: "הסיפור לא שותף, אבל הוא כולל בעיות",
				status3: "הסיפור ציבורי",
				status4: "הסיפור משותף בארגון",
				status5: "הסיפור פרטי",
				status6: "הסיפור עדיין לא נשמר",
				checking: "בודק",
				fix: "תקן"
			},
			saveError: {
				title: "שגיאה בשמירת הסיפור",
				err1Div1: "לא ניתן לשמור את הסיפור משום שכבר יש לך פריט אחר באותו שם.",
				err1Div2: "שנה את כותרת הסיפור ולאחר מכן שמור אותו.",
				btnOk: "ערוך את כותרת הסיפור"
			},
			saveErrorSocial: {
				title: "עדכון של שיתוף במדיה חברתית",
				panel1: "הופעת הסיפור שלך במדיה החברתית שופרה, אבל כותרת הפריט של אפליקציית האינטרנט ArcGIS אינה זהה לכותרת הסיפור שלך.",
				panel1tooltip: "על-ידי הגדרת כותרת, סיכום ותמונה ממוזערת, הסיפור שלך ייראה כך:",
				panel2:	"באיזו כותרת ברצונך להשתמש במדיה החברתית:",
				panel2q1: "כותרת סיפור (מומלץ)",
				panel2q1tooltip: "על-ידי בחירת אפשרות זו, כותרת הפריט שלך תשתנה כדי להתאים לכותרת הסיפור שלך, ושינויים נוספים בבונה יסונכרנו.",
				panel2q2: "כותרת פריט",
				panel3: "כדי לשפר עוד יותר את הופעת הסיפור שלך במדיה החברתית, השתמש ב-${MYSTORIES} כדי להוסיף סיכום ותמונה ממוזערת.",
				panel4: "אל תזהיר אותי שוב לגבי סיפור זה"
			},
			share: {
				shareTitle: "שתף את הסיפור שלך",
				preview: "תצוגה מקדימה",
				viewlive: "הצג סיפור",
				btnPrivate: "פרטי",
				btnPrivateTooltip: "רק אתה יכול לראות את הסיפור",
				btnOrg: "ארגון",
				btnOrgTooltip: "רק חברים בארגון שלך יכולים לראות את הסיפור",
				btnPublic: "ציבורי",
				btnPublicTooltip: "כל אחד יכול לראות את הסיפור",
				loadingMessage: "בודק אם קיימות בעיות בסיפור שלך",
				viewToggle1: "הצג תכולת סיפור",
				viewToggle2: "סגור תכולת סיפור",
				socialize: "הפוך לחברתי",
				statusPrivate: "הסיפור שלך פרטי, רק אתה יכול לראות אותו.",
				statusError: "קיימות בעיות בתכולת בסיפור שלך שהקוראים ישימו לב אליהן. באפשרותך לזהות ולתקן את הבעיות להלן.",
				statusNoErrPrivate: "שתף את הסיפור שלך כאשר תהיה מוכן!",
				mystoriesinvite: "נהל את כל הסיפורים שלך",
				notavailable1: "מצטערים, שיתוף הסיפור שלך דרך אשף הבנייה לא נתמך משום שאפליקציה זו אינה מתארחת ב- %PRODUCT%.",
				notavailable2: "מצטערים, שיתוף הסיפור שלך דרך אשף הבנייה לא נתמך בגירסה זו של פורטל עבור ArcGIS (דורש גירסה 10.4 ואילך).",
				notavailable3: "באפשרותך לשתף סיפור זה דרך %LINK%.",
				notavailable4: "הסיפורים שלי",
				notavailable5: "זה דף פריט",
				notavailable6: "מצטערים, ישות זו לא נתמכת במלואה במצב פיתוח. בהתאם לתרחיש הפיתוח שלך, ייתכן שיישות זו תיתמך כאשר תיפרס.",
				notavailable7: "הקפד לבקר את %MYCONTENT% כדי לוודא שהמפות והשכבות שבסיפור שלך משותפות.",
				notavailable8: "התכולה שלי",
				mystoriesinvite2: "כדי לשפר את הופעת הסיפור שלך ברשתות החברתיות, השתמש ב-${MYSTORIES} כדי להוסיף סיכום ותמונה ממוזערת."
			},
			settings: {
				header: "הגדרות",
				tabError: "אנא בדוק שגיאות בכל הלשוניות"
			},
			settingsLayout: {
				title: "תצוגה",
				explain: "באיזו תצוגה תרצה להשתמש?",
				explainInit: "אתה יכול לשנות את כל עת את סידור המפה מתוך דיאלוג ההגדרות.",
				viewExample: "הצג דוגמה חיה"
			},
			settingsTheme: {
				title: "נושא"
			},
			settingsHeader: {
				title: "כותרת עליונה",
				logoEsri: "לוגו של Esri",
				logoNone: "אין לוגו",
				logoCustom: "לוגו מותאם",
				logoCustomPlaceholder: "URL‏ (מקסימום 250x50 פיקסלים)",
				logoCustomTargetPlaceholder: "קישור זמין",
				logoSocialExplain: "התאמה אישית של קישור הכותרת.",
				logoSocialText: "טקסט",
				logoSocialLink: "קישור",
				lblSmallHeader: "השתמש בכותרת מצומצמת (ללא כותרת משנה)"
			},
			header: {
				title: "ערוך את הכותרת של %TPL_NAME%",
				subtitle: "ערוך את כותרת המשנה של %TPL_NAME%"
			}
		}
	})
);
