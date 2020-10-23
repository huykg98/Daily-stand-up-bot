import React, {Component} from "react";
import {loadLanguage} from '../common/i18nConfiguration';
import CommonUtil from '../common/CommonUtil';
import { Redirect } from 'react-router-dom';

export default function loadLanguageOnPage() {  
    return function(Child) {
      return class extends Component {
         constructor(props) {
          super(props);
            this.pageLoadLang(props.match.params.lang, false); 
         }
         render() {
            if(this.props.match.params.lang == null || this.props.match.params.lang === '') {               
                let lang = CommonUtil.getCurrentLang().locale || 'en'

                return (
                    <Redirect to={`/${lang}/`} />
                );
            }
            else{
                 return (
                    <Child {...this.props} />
                )
            }
          
        }
       pageLoadLang(lang) {
           if(lang === null) return
           loadLanguage(lang);
           
        }
        componentWillUpdate(nextProps, nextState) {
            //// console.log("nextLang", nextProps.match.params.lang)
            let nextLang = nextProps.match.params.lang;
            let currentLang = this.props.match.params.lang;
            if(currentLang !== nextLang){
                this.pageLoadLang(nextLang, true);            
            }
        }

        componentDidUpdate(prevProps, prevState) {
             //window.fireEvent(EVENT.BODY_CENTER_LOADING_DONE)
        }
        
     }
 }
}