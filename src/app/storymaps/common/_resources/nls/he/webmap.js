﻿define(
	 ({
		commonWebmap: {
			selector: {
				lblWebMap: "מפה",
				lblLocation: "מיקום",
				lblContent: "תוכן",
				lblPopup: "חלון קופץ",
				lblControls: "תוספות",
				lblOverview: "מפת התמצאות",
				lblLegend: "מקרא",
				loadingTitle: "טוען כותרת",
				entry: "ערך",
				entries: "ערכים",
				section: "חלק",
				sections: "חלקים",
				and: "וגם",
				action: "פעולה בתוך החלק",
				actions: "פעולה בתוך החלקים",
				originalWebmap: "מפה המשמשת לפרסום ה- %TPL_NAME%",
				browseMaps: "בחר מפה",
				createMap: "צור מפה",
				current: "מפה נוכחית",
				select: "בחר או צור מפה",
				newMap: "מפה שנבחרה אחרונה",
				newCreatedMap: "מפה חדשה שנוצרה",
				webmapDefault: "ברירת מחדל של מפה",
				customCfg: "הגדרות מותאמות",
				tooltipLocation: "הגדר את המיקום שמפה זו תציג.",
				tooltipContent: "הגדר את השכבות הנראות.",
				tooltipPopup: "בחר חלון קופץ שייפתח בעת הצגת מפה זו.",
				tooltipOverview: "הצג מפת התמצאות קטנה יחד עם המפה הראשית.",
				tooltipLegend: "הצג את מקרא המפה על המפה. זה יכול להועיל כאשר יש למפה שכבות וסמלים רבים.",
				mapCfgInvite: "השתמש בפקדים הללו לקבוע את תצורת המפה שלך",
				lblLocationAlt: "עבר בירושה מהמפה הראשונה",
				tooltipLocationAlt: "המיקום של מפה זו מסונכרן עם המפה הראשונה בסדרה. כדי לשנות התנהגות זו עבור הסדרה שלך, עבור אל \'הגדרות\' > \'אפשרויות מפה\'."
			},
			configure: {
				btnReset: "אפס",
				btnCancel: "ביטול",
				tocTitle: "תכולת המפה",
				tocExplain: "בחר איזו שכבה תוצג",
				tocNoData: "לא ניתן להגדיר שכבה.",
				tocSave: "שמור את תוכן המפה",
				extentTitle: "מיקום המפה",
				extentExplain: "הזז והתמקד במפה כדי לקבוע כיצד היא תראה לקוראים שלך.",
				extentSave: "בחר את מיקום המפה",
				popupTitle: "חלון מפה קופץ",
				popupExplain: "לחץ על ישות כדי לפתוח את החלון הקופץ שברצונך להציג.",
				popupSave: "שמור את הגדרות התצוגה של החלון הקופץ",
				hintNavigation: "הניווט של המפה חסום."
			},
			editor: {
				loading: "אנא המתן בעת טעינת עורך המפה",
				newTitle: "צור מפה חדשה",
				editTitle: "ערוך מפה",
				titleLbl: "כותרת",
				titlePh: "כותרת מפה...",
				folderLbl: "המפה תיווצר באותה תיקיה של הסיפור.",
				creating: "יוצר את המפה",
				saving: "שומר את המפה",
				success: "המפה נשמרה",
				successCreate: "המפה נוצרה",
				cancelTitle: "לבטל את כל השינויים שלא נשמרו?",
				errorDuplicate: "כבר יש לך מפה עם כותרת זו",
				errorCreate: "לא ניתן ליצור מפה. נסה שוב.",
				errorSave: "לא ניתן לשמור מפה. נסה שוב.",
				notavailable1: "מצטערים, יצירה או עריכה של מפה אינה נתמכת ב- Firefox בשל מגבלה טכנית. ייתכן שתרצה לבנות את הסיפור שלך באמצעות דפדפן אינטרנט אחר או להשתמש בפתרון הבא.",
				notavailable2: "מצטערים, יצירה או עריכה של מפה אינה נתמכת משום שאפליקציית story map אינה מתארחת ב- %PRODUCT%. צור קשר עם מנהל ArcGIS לקבלת מידע נוסף.",
				notavailable3: "מצטערים, יצירה או עריכה של מפה אינה נתמכת בגירסה זו של פורטל עבור ArcGIS (דורש גירסה 10.4 ואילך). צור קשר עם מנהל ArcGIS לקבלת מידע נוסף.",
				notavailable4: "באפשרותך ליצור מפה באמצעות %MV%, ולאחר מכן לחזור לכאן כדי להוסיף אותה לסיפור שלך.",
				notavailable5: "באפשרותך לערוך את המפה באמצעות %MV%, ולאחר מכן לחזור לכאן ו%להחיל% כדי לראות את השינויים שלך.",
				notavailable6: "תצוגת מפה",
				notavailable7: "טען מחדש את המפה"
			}
		},
		configure: {
			mapdlg:{
				items:{
					organizationLabel: "הארגון שלי",
					onlineLabel: "ArcGIS Online",
					contentLabel: "התוכן שלי",
					favoritesLabel: "המועדפים שלי"
				},
				title: "בחר מפה",
				searchTitle: "חיפוש",
				ok: "אישור",
				cancel: "ביטול",
				placeholder: "הזן מונח חיפוש או מספר זיהוי של מפת אינטרנט..."
			}
		}
	})
);
