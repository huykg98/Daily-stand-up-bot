import React, { Component } from 'react'
import { inject } from 'mobx-react'
import { translate } from "react-i18next";
import BannerComponent from '../BannerComponent';
import util from '../../utils/util';
import { COMMON_LOGO } from '../../common/constant';
@translate([], {wait: true})
@inject("LayoutTemplateStore", "LanguageStore", "BannerStore")
 class BodyTopComponent extends Component {

    constructor(props) {
        super(props);
        this.LayoutTemplateStore = this.props.LayoutTemplateStore
        this.state = {
            logo : '',
            localeId: ''
        }
    }

    componentDidMount() {
    }
    

    render() {
        let isHomePage = this.props.BannerStore.bannerType.pageId === 14
        let introText = util.getCustomTitle(this.props.BannerStore.bannerType.pageId)
        /* let {title, text} = this.props.initialData.LeftText[this.LayoutTemplateStore.currentPageContainer] */
        /* let rightLogoUrl = this.props.initialData.RightLogo[this.LayoutTemplateStore.currentPageContainer].url */
        const { t } = this.props;
        return (
            <React.Fragment>
            <section className="header">
            <div className="header-bg">
            </div>
            <div className="left">
            {isHomePage ? 
            <div className="page-title" ><img alt=""  class="img-title" /></div>
            :
            <div className="page-title" dangerouslySetInnerHTML= {{ __html: t(introText.title)}}></div>
            }
            
            <div className="common-text white-text" dangerouslySetInnerHTML= {{ __html: t(introText.text)}}></div>
            { isHomePage && <a href="#contact-us" className="btn btn-lg btn-git white-text find-more">{t('find.more')}</a>}
            </div>
            <div className="right">
            {/* <BannerComponent pageId={this.props.pageId} localeId={this.props.LanguageStore.locale.localeId} isMulti={this.props.pageId === 1} /> */}
            <BannerComponent pageId={this.props.pageId} localeId={this.state.localeId} isMulti={this.props.pageId === 14} />
            </div>
            </section>
            <div className="clear-both"></div>
            </React.Fragment>
        )
    }
}

export default (translate("translations"))(BodyTopComponent)
