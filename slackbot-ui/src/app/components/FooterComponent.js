import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { translate } from 'react-i18next'
import TemplateService from '../services/TemplateService'
@translate([], { wait: true })
@inject("LayoutTemplateStore")
@observer
export default class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.Datacomps = []
        this.LayoutTemplateStore = this.props.LayoutTemplateStore
        if (this.LayoutTemplateStore.templateData.footerContainer) {
            this.Datacomps = this.LayoutTemplateStore.templateData.footerContainer || []
        }
        // this.footerContainer = TemplateService.listComponentsByData(this.Datacomps)
        this.headerContainer = TemplateService.listComponentsByDataNoGrid(this.Datacomps)
    }

    shouldComponentUpdate() {
        // this.footerContainer = TemplateService.listComponentsByData(this.Datacomps)
        this.headerContainer = TemplateService.listComponentsByDataNoGrid(this.Datacomps)
        return true
    }

    render() {
        const renderFooter = this.footerContainer;

        return (
            <div id="footer" style={{ backgroundColor: "#OOO" }}>
                {renderFooter}
            </div>
        )
    }

}
