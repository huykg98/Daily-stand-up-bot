import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'


import TemplateService from '../services/TemplateService'

@inject("LayoutTemplateStore")
@observer
export default class BodyComponent extends Component {

    constructor(props) {
        super(props)
        this.LayoutTemplateStore = this.props.LayoutTemplateStore
        let dataComps = [];

        let container = 'bodyContainer';
        let position = 'mainContainer';
        dataComps = TemplateService.listDataCompsByContainerPosition(this.LayoutTemplateStore, container, position);
        this.state = {
            comps: TemplateService.listComponentsByDataNoGrid(dataComps) || (<div></div>)
        }
    }

    componentDidMount() {
    }




    render() {

        return (
            <div id="body" className={''}>
                <div>{this.state.comps}</div>
            </div>
        )
    }
}
