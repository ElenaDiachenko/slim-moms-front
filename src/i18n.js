import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const Languages = ['uk', 'en']

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // lng: 'en',
    react: {
      useSuspense: true,
    },
    supported: ["en", "uk"],
    fallbackLng: "uk",
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['localStorage'],
    },
    debug: true,
    whitelist: Languages,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    nsSeperator: false,
    keySeperator: false,
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

// i18n.use(Backend)
// 	.use(LanguageDetector)
// 	.use(initReactI18next)
// 	.init({
// 		backend: {
// 			// translation file path
// 			loadPath: "../public/assets/locales/{{lng}}/translation.json",
//         },
//          supportedLngs: ['en','uk'],
// 		fallbackLng: "uk",
// 		// disabled in production
// 		debug: false,
// 		// can have multiple namespaces, in case you want to divide a huge
// 		// translation into smaller pieces and load them on demand
// 		// ns: ["common", "home", "profile"],
// detection: {
//      order: [ 'localStorage', 'htmlTag', 'path', 'subdomain'],
//      caches: ['localStorage']
//    },
// 		interpolation: {
// 			espaceValue: false,
// 			// formatSeparator: ",",
// 		},
	
// 	});

export default i18n;