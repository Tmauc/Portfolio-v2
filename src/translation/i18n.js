import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TRANSLATION_EN from './languages/en-EN.json';
import TRANSLATION_FR from './languages/fr-FR.json';

// the translations
const resources = {
  en: {
    translation: TRANSLATION_EN,
  },
  fr: {
    translation: TRANSLATION_FR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    keySeparator: '.',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// update dir ang lang html attributes on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir(lng);
  document.documentElement.lang = lng;
});

export default i18n;