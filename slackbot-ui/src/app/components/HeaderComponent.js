import React, { Component } from 'react'
import { inject } from 'mobx-react'
import TemplateService from '../services/TemplateService'
import util from '../utils/util'


@inject("LayoutTemplateStore")
export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.Datacomps = []
        this.LayoutTemplateStore = this.props.LayoutTemplateStore
        if (this.LayoutTemplateStore.templateData.headerContainer) {
            this.Datacomps = this.LayoutTemplateStore.templateData.headerContainer.formal || []
        }
        // this.headerContainer = TemplateService.listComponentsByData(this.Datacomps)
        this.headerContainer = TemplateService.listComponentsByDataNoGrid(this.Datacomps)
    }

    shouldComponentUpdate() {
        // this.headerContainer = TemplateService.listComponentsByData(this.Datacomps)
        this.headerContainer = TemplateService.listComponentsByDataNoGrid(this.Datacomps)
        return true
    }

    componentDidMount() {
    }


    render() {

        const renderHeader = this.headerContainer;
        return (
            <React.Fragment>
                <div id="wrapper-header" className="">
                    {renderHeader}
                </div>
                <div className="clear-both"></div>
            </React.Fragment>
        )
    }
}
