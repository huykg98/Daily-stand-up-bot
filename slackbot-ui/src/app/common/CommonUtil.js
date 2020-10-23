import _ from 'lodash'
export default class CommonUtil {
    static mapLangCountryCode = {
        "en": "en",
        "zh-cn": "zh_CN",
        "ko": "ko_KR",
        "th": "th_TH",
        "km": "km_KH",
        "ru": "ru_RU"
    }
    static toLocaleCode = (lng) => {
        let locale = null;
        if (lng !== 'undefined' && lng != null) {
            locale = CommonUtil.mapLangCountryCode[lng.toLowerCase()];
        }
        return (locale != null) ? locale : 'en_US';
    }

    static getCurrentLang() {
        let lang = sessionStorage.getItem('lang')
        return lang ? JSON.parse(lang) : {
            locale: 'en',
            localeId: 1
        }
      }

      static getLanguages() {
        let locales = sessionStorage.getItem('locales')
        return locales ? JSON.parse(locales) : []
      }

    static setStorageLang(lang, id) {
        let obj = {
            locale: lang,
            localeId: id
        }
        sessionStorage.setItem('lang', JSON.stringify(obj))
    }

    static localeCodeToLanguageCode = (localeCode) => {
        
        let language = null;
        console.log("localeCodeToLanguageCode ", localeCode)
        if (localeCode) {
            language = _.invert(CommonUtil.mapLangCountryCode)[localeCode];
        }
        console.log("CURR LOCALE ", language)
        return (language != null) ? language : 'en';
        
    }

    static convertMobxObjToJsonObj(mobxObject) {
        return JSON.parse(JSON.stringify(mobxObject))
    }

    /* static getCurrentLang() {
        return sessionStorage.getItem('lng') || 'en'
      } */

      static getSubDomain = () => {
        let parts = document.domain.split('.');
        let domain = document.domain;
        if (parts.length > 2 && isNaN(parts[0])) {
            parts.splice(0, parts.length - 2);
            domain = "." + parts.join(".");
        }
        return domain
    }

    static epochToDateTime = (epoch, f) => {   
        let format = f;    
        let utcSeconds = epoch;
        let date = new Date(0);
        date.setUTCSeconds(utcSeconds);
        format = format.replace("dd", date.getDate());
        format = format.replace("MM", date.getMonth() + 1);
        format = format.replace("yyyy", date.getFullYear());
        format = format.replace("mm", date.getMinutes());
        format = format.replace("hh", date.getHours());

        //let dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} (${date.getHours()}:${date.getMinutes()})`
        return format;
    }

    convertDaysOfWeekToCheckBoxFormat = (old) =>{
        var newFormat=[];
        var i, newValue;
        for (i = 0; i < old.length; i++) {
            newValue = (i + 1) +":"+ old[i] ;
            newFormat.push(newValue);

        }
        console.log(newFormat)
        return newFormat;
    }
    // var x =  convertDaysOfWeekToCheckBoxFormat(cars);
}