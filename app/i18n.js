// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "RICHARD GUANG": "RICHARD GUANG",
      About: "About",
      Listing: "Listing",
      "Foreign Investor Guide": "Foreign Investor Guide",
      "Neighborhood Guide": "Neighborhood Guide",
      Contact: "Contact",
      "REAL ESTATE": "REAL ESTATE",
    },
  },
  cn: {
    translation: {
      //   "RICHARD GUANG": "你好",
      About: "关于Richard",
      Listing: "房源列表",
      "Foreign Investor Guide": "外国投资者指南",
      "Neighborhood Guide": "社区指南",
      Contact: "联系我们",
      "REAL ESTATE": "地产",
    },
  },
  tc: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Set the default language here
  fallbackLng: "en", // Default language if the specified language fails
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
