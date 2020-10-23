import React, { Component } from 'react'

import TemplateService from '../services/TemplateService'
import { inject } from 'mobx-react'

@inject("LayoutTemplateStore")
export default class BodyCenterComponent extends Component {

    constructor(props) {
        super(props)
        this.LayoutTemplateStore = this.props.LayoutTemplateStore
        let DataComps = []
        let container = 'bodyContainer'
        let position = 'mainContainer'
        DataComps = TemplateService.listDataCompsByContainerPosition(this.props.LayoutTemplateStore, container, position)
        this.state = ({
            comps: TemplateService.listComponentsByDataNoGrid(DataComps) || (<div></div>)
        })
    }


    render() {
        return (
            <div id="BodyCenterContainer" className={this.props.className}>
                {this.state.comps}
            </div>
        )
    }
}
