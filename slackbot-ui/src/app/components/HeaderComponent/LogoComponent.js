import React, { Component } from 'react'
import CommonUtil from '../../common/CommonUtil'
import { NavLink } from 'react-router-dom';

class LogoComponent extends Component {
    constructor(props) {
        super(props);
        this.LayoutTemplateStore = this.props.LayoutTemplateStore
        this.state = {
            logo: ''
        }  
    }

    componentDidMount()
    {

    }

    
    render() {
        let linkStyle = {
            backgroundColor: "#000"
        }
        const link = "/" + CommonUtil.getCurrentLang().locale
        return (
            <div className="logo-header">
                <NavLink exact activeStyle={linkStyle} to={link}><img alt="" /></NavLink>
            </div>
        )
    }
}

export default  LogoComponent;
