import { Banner_Intro, LOCALES_MAPPING } from "../common/constant"
/* import "../common/extend"; */
import _ from "lodash"

export default {
    getDataByLocale:  (arrData, localeId) =>  {
        for (let i=0 ;i < arrData.length; i++) {
            if (arrData[i].locale_id === localeId) {
                return arrData[i]
            }
        }
        return {}
    },
    getTargetPage: () => {
        let currpage = window.location.pathname.split('/')
        currpage = currpage[currpage.length-1]
        if (currpage === '') currpage = 'home'
        let index = currpage.indexOf('-')
        if (index > -1) currpage = currpage.slice(0,index)
        return 'pageTitle.' + currpage
    },

    isSupportedLocale: (locales, locale) => {
        return false
    },

    Convert2Menus: (data) => {
        console.log('RAW ', data)
        let result = []
        for(let i in data) {
            if (data[i].isdropdown === 1) {
                result[data[i].name] = []
            } else if  (data[i].parent) {
                result[data[i].parent.data.name].push({
                    name: data[i].name,
                    link: data[i].link
                })
            } else {
                result.push({
                    name: data[i].name,
                    link: data[i].link
                })
            }
        }
        return result
    },


    toSubList: (data) => {
        let array = [];
        data.map(item => {
            if(!item.parent_id){
                item.sub = data.filter(id => id.parent_id && id.parent_id.data.id === item.id)
                array.push(item)
            }
            return false
        })
        return array
      },

      getBannersFromResponse: (data, localeId) => {
          console.log('getBannersFromResponse ', data)
          let banners = []
          for (let i=0; i<data.length; i++) {
              banners.push(data[i].translations.data.filter( x => !_.isEmpty(x.logo.data.url) && parseInt(x.locale_id,10) === parseInt(localeId,10)).map(item => {return item.logo.data.url}))
          }

          return banners
          
      },
      saveStoreBanner(banners) {

      },

      getCustomTitle: (pageId) => {
          if (Banner_Intro.hasOwnProperty(pageId))
          return Banner_Intro[pageId]
          return {
              title: "",
              text: ""
          }
      },
      sortArrayByDisplayOrder: (arr) => {
        return arr.sort((comp1, comp2) => comp1.display_order < comp2.display_order)
      },
      
      buildTranslationResources: (src) => {
          let bundle = {}
          for(let key_val of src) {
             for (let trans of key_val.translations.data) {
                let _key = LOCALES_MAPPING[trans.locale_id]
                 if (!bundle[_key]) {
                    bundle[_key] = {}
                 }
                 bundle[_key][key_val.key] = trans.value
             }
          }
          console.log('buildTranslationResources ', bundle)
          return bundle
      },
}


