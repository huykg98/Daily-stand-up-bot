import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import { urlLocation2 } from "../src/components/path_variable";
import EN_TRANSLATION from "./locales/en/translations.json";
import VN_TRANSLATION from "./locales/vn/translations.json";

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources: {
      en: {
        translations: EN_TRANSLATION 
      },
      vn:{
        translations: VN_TRANSLATION 
      }
    },
    fallbackLng: "en",
    lng: "en",
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    react: {
      wait: true
    }
  });

export default i18n;
