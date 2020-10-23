import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { translate } from "react-i18next";
import _ from 'lodash'
/* import ListMenu from './ListMenu' */
import 'bootstrap';
/* import $ from 'jquery'; */
import { NavLink } from 'react-router-dom';
import util from '../../utils/util';

@translate([], {wait: true})
@inject("LayoutTemplateStore","LanguageStore")
@observer
class LeftNavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.locale = 'en'
        this.state = {
            menus: []
        }
    }


    /* getTitle(title)
    {
        return this.props.t(title)
    } */
    
    
    renderNav() {
        const { t,LanguageStore} = this.props;
        /* let navItems = this.props.initialData.menus */
        let navItems = this.state.menus
        let activeStyle = {
            backgroundColor : 'white',
            color : 'red',
            fontWeight: '600'
        }
         return(
            <nav className="navbar navbar-expand-sm">
            <ul className="navbar-nav">
                {navItems.map((item, index) => {
                    if(item.sub.length > 0) {
                        return (
                            <li key={index} className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbardrop" data-toggle="dropdown">
                              {t(item.title)}
                            </a>
                            <div className="dropdown-menu">
                                {item.sub.map((sub, index) => {
                                return <NavLink key={index} exact activeStyle={activeStyle} to={'/' + LanguageStore.locale.locale + sub.link} className="dropdown-item">{t(sub.title)}</NavLink>
                                })}
                            </div>
                          </li>  
                        )
                    } else {
                        return  (
                        <li key={index} className="nav-item">

                            <NavLink exact activeStyle={activeStyle} to={'/' +LanguageStore.locale.locale + item.link} className="nav-link">{t(item.title)}</NavLink>
                      </li>)
                    }
                })}
            </ul>
          </nav>
         )
    }
    
    render() {
        
         return this.renderNav();
    }
    
}

export default (LeftNavbarComponent);

