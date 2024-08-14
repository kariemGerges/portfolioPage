import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en/translation.json';
import esTranslations from './locales/es/translation.json';
import arTranslations from './locales/ar/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'es', 'ar'],
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      ar: { translation: arTranslations }
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;