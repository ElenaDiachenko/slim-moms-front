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


export default i18n;