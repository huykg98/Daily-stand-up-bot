import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";
/* import translationEng from '../locales/en/translation.json'
import translationJp from '../locales/jp/translation.json' */
import CommonUtil from "./CommonUtil.js";
import util from "../utils/util.js";
import TranslationService from "../services/TranslationService.js";
const namespacesDefault = 'translations'

export const getI18nextConfig = () => {

    resetLangsSessionStore();
    let lng = window.location.pathname.split('/')[1] || 'en'
    i18n
    .use(LanguageDetector)
    .init({
      debug: true,
      lng: lng,
      fallbackLng: "en",
  
      keySeparator: false, 
  
      interpolation: {
        escapeValue: false 
      },
      ns: namespacesDefault,
      defaultNS: namespacesDefault,
      fallbackNS: namespacesDefault,
    })
  ;

//  callAPIlAddLangToI18n(i18n, lng)
//  .then((data) => {})


 function resetLangsSessionStore() {
  let i = sessionStorage.length;
  while(i--) {
    let key = sessionStorage.key(i);
    var lngReg = new RegExp("^lang");
    if(lngReg.test(key)) {
      sessionStorage.removeItem(key);
    }  
  }
}
  return i18n;
}

  function callAPIlAddLangToI18n(i18next, lang) {
    /*return TranslationService.getFreeTextTranslationQuery()
    .then(resp => {
      let bundle = util.buildTranslationResources(resp.data.data)
     Object.keys(bundle).forEach((key) => {
       console.log('BUNDLE ', bundle[key])
      sessionStorage.setItem('lng-'+ key, JSON.stringify(bundle[key]))
      i18next.store.data[key] = bundle[key];
      i18n.addResourceBundle(key, namespacesDefault, bundle[key], true, true);
     })
    })
    .catch( error => {console.log('errrrr ', error.message) ; }) 
    /* if(lang == null || lang.length === 0){
       lang = 'en'
    }
       return LocalesService.getLocaleTranslation(lang)
       .then( resp => {
          const result = resp.data.data[0].data
          const objJSON = JSON.parse(result)
          sessionStorage.setItem('lng-'+ lang, result)
          i18next.store.data[lang] = objJSON;
          i18n.addResourceBundle(lang, namespacesDefault, objJSON, true, true);
          sessionStorage.setItem('lng-' + lang.toLowerCase(), JSON.stringify(result));
        })
        .catch( error => {console.log('errrrr ', error.message) ; })  */
   
  }

  export const loadLanguage = (i18n, lng) => {
    // if (lng != null) {
    //   let preLang = CommonUtil.getCurrentLang().locale;
    //   if (preLang == null || preLang !== lng) {
    //     let langResultTranslate = JSON.parse(sessionStorage.getItem('lng-' + lng));
    //     if (langResultTranslate == null) {
    //       callAPIlAddLangToI18n(i18n, lng).then(
    //         () => {
    //           i18n.changeLanguage(lng, (err, t) => {
    //             if (err) return console.log('ERROR ', err);
    //           });
              
    //         }
    //       ).finally(() => {
    //         document.title = getPageTitle()
    //       })
    //     } else {
    //       if (!i18n.store.data[lng]) {
    //         i18n.store.data[lng] = JSON.parse(langResultTranslate);
    //         i18n.addResourceBundle(lng, namespacesDefault, JSON.parse(langResultTranslate), true, true);
    //       }
    //       i18n.changeLanguage(lng, (err, t) => {
    //             if (err) return console.log('something went wrong loading', err);
    //             document.title = getPageTitle()
    //           });
    //     }
    //   }
  
  
    // }
  }

  function getPageTitle() {
    return i18n.t(util.getTargetPage())
  }


  function callFallBackLanguage(lang) {
    if(lang == null || lang.length === 0){
       lang = 'en'
    }
    /*LocalesService.getLocaleTranslation(lang).
    then( resp => {
      sessionStorage.setItem('lng-'+ lang, JSON.stringify(resp.data.data[0].data))
    })
    .catch( error => console.log(error))
  */
  }

  

  

