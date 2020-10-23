import React, { Component } from 'react'
import { t } from 'i18next/dist/commonjs';
import { translate } from 'react-i18next';

@translate([], { wait: true })
class RightNavbarComponent extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="header-right">
                <button className="btn btn-sm white-text btn-git">{this.props.t('GET IN TOUCH')}</button>
                <button className="btn btn-sm white-text btn-login">{this.props.t('LOGIN')}</button>
            </div>
        )
    }
}

export default  RightNavbarComponent;

