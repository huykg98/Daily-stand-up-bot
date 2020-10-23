import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import BodyCenterComponent from '../components/BodyCenterComponent';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent'
import FooterComponent from '../components/FooterComponent'
import { translate } from 'react-i18next';
import $ from 'jquery'
import SidebarComponent from '../components/SidebarComponent/SidebarComponent';
@inject("LayoutTemplateStore", "LanguageStore")
@translate([], { wait: true })
@observer
export default class DynamicPage extends Component {

    constructor(props) {
        super(props)

        console.log('currentPageContainer ', this.props.LayoutTemplateStore.currentPageContainer)
        console.log('targetPage ', this.props.pageContainer)
        this.LayoutTemplateStore = this.props.LayoutTemplateStore
        this.state = ({ isChange: false })
        this.LayoutTemplateStore.updateCurrentPageContainer(this.props.pageContainer);
    }

    scrollUp = () => {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    componentDidMount() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    render() {

        return (
            <div className="container-fluid">
                <React.Fragment>
                    {/* <SidebarComponent /> */}
                    <div className="page">
                        <HeaderComponent />
                        <BodyComponent isChange={this.state.isChange} bodyCenter={<BodyCenterComponent className="body-center" />} />
                        {/* <FooterComponent /> */}
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
