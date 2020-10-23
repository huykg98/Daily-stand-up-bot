import React, { Component } from 'react'
import BannersPageService from '../services/BannersPageService'
import util from '../utils/util'
import { observer, inject } from 'mobx-react'
import _ from "lodash"

@inject("LanguageStore", "BannerStore")
@observer
export default class BannerComponent extends Component {
    constructor(props) {
        super(props)
        this.wrapperRef = React.createRef()
        this.isMulti = this.props.isMulti
        this.pageId = this.props.BannerStore.bannerType.pageId
        this.localeId = 1
        this.state = {
            banners: [],
            selectedIndex: 0
        }
    }

    componentDidMount() {
        console.log('BannersPage ', this.props.BannerStore)
        
        BannersPageService.getBannersOfPageQuery(this.props.BannerStore.bannerType.pageCode)
        .then(resp => {
            console.log('BANNERS RAW ', resp)
            /* let banners = util.getBannersFromResponse(resp.data.data, this.props.LanguageStore.locale.localeId) */
            
            console.log('componentDidMount BANNERS ', resp.data.data)
            this.setState({banners: resp.data.data})
            this.intervalId = setInterval(this.Animate.bind(this), 3000)
        })
    }

    Animate() {
        this.setState(preState=> ({
            selectedIndex : (preState.selectedIndex + 1)%this.state.banners.length}
        ))
    
    }


   componentWillUnmount() {
       clearInterval(this.intervalId)
   }
    
    render() {
        let banners = this.state.banners
        let isHomePage = this.props.BannerStore.bannerType.pageId === 14
        if (_.isEmpty(banners) || banners.length === 0) {
            return null
        } else {
            let logos = util.getBannersFromResponse(banners, this.props.LanguageStore.locale.localeId)
            if (isHomePage) {
                return (
                    <ul className="banner-slider">
                        <img ref={this.wrapperRef} alt="" />
                    </ul>
                )
            } else {
                return (
                    <img alt=""/>
                )
            }
        }
        
    }
}
