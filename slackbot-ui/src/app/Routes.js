import React, { Component } from "react";
import _ from "lodash";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import TemplateService from './services/TemplateService'
import EVENT from './events/EventList'
import { inject, observer } from "mobx-react";
import DynamicPage from './pages/DynamicPage';
import CommonUtil from "./common/CommonUtil";
import SidebarComponent from "./components/SidebarComponent/SidebarComponent";
require("./events/Listener");
@inject('LayoutTemplateStore', "LanguageStore")
@observer
export default class Routes extends Component {
	constructor(props) {

		super(props)
		let modeDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
		let templateName = 'template';
		this.state = { templateData: null, isWait: true, modeDev, templateName, catchError: false };
		if (modeDev) {
			TemplateService.loadTemplateDataFromLocal(this.state.templateName).then(res => {
				this.props.LayoutTemplateStore.updateTemplateData(res);
				this.setState({ isWait: false });
				// this.actionWithBrowser();
			}).catch(err => {
				console.log('RENDER CATCH ', err)
				this.setState({ catchError: true })
			}
			)
		}
		else {
			//TemplateService.loadTemplateDataFromAPI(1)
			TemplateService.loadPageTemplatesFromAPI('P00001')
				.then(res => {
					this.props.LayoutTemplateStore.updateTemplateData(res);
					console.log('ROUTES ', this.props)
					this.setState({
						isWait: false
					});

				})
				.catch(
					err => {
						this.setState({ catchError: true })
						console.log('RENDER CATCH ', err)
					}
				)
		}
	}

	actionWithBrowser() {
		/** trick for by pass server vanish caching */
		let versionBuild = window.versionBuild;
		let scripts = document.getElementsByTagName('script');
		for (let i = 0; i < scripts.length; i++) {
			let lastScript = scripts[i];
			let scriptName = lastScript.src;

			if (scriptName.includes("static/js/main") || scriptName.includes("static/js/bundle")) {
				versionBuild = scriptName.split("/").pop();
			}
		}

		let head = document.head;
		let cssFonts = process.env.PUBLIC_URL + '/esthar/fonts/Fonts.css?v=' + versionBuild;
		let linkCssFont = document.createElement("link");

		linkCssFont.type = "text/css";
		linkCssFont.rel = "stylesheet";
		linkCssFont.id = "font-stylesheet";
		linkCssFont.href = cssFonts;
		head.appendChild(linkCssFont);


		//waiting css loadind finish. after css loaded, render UI
		let cssLink = this.props.LayoutTemplateStore.templateData.cssFile;
		if (cssLink.startsWith("http") || cssLink.startsWith("https")) {
			this.cssFiless = cssLink;
		} else {
			this.cssFiless = process.env.PUBLIC_URL + '/' + this.props.LayoutTemplateStore.templateData.cssFile;
		}

		let link = document.createElement("link");

		link.type = "text/css";
		link.rel = "stylesheet";
		link.id = "skin-stylesheet";
		link.href = this.cssFiless + '?v=' + versionBuild;

		head.appendChild(link);

		let myStylesheet = document.querySelector('#skin-stylesheet');

		myStylesheet.onload = function () {
			//alert('Done')
			window.fireEvent(EVENT.CSS_LOADED)
		}

		myStylesheet.onerror = function () {
			console.log("An error occurred loading the stylesheet!");
		}

	}

	renderPage = (props, pageContainer, pageId) => {
		return <DynamicPage {...props} pageContainer={pageContainer} />
	}

	renderRoute = (isWait, lng) => {
		let regEx = '([a-z]{2}|[a-z]{2}-[a-z]{2})';
		return (
			<React.Fragment>
				<Route exact path="/" render={() => (<Redirect to={'/en'} />)} />
				<Route exact path={"/:lang" + regEx} render={(props) => this.renderPage(props, "summaryStandupPageContainer")} />
				<Route exact path={"/:lang" + regEx + "/my-standups"} render={(props) => this.renderPage(props, "myStandupsPageContainer")} />
				<Route exact path={"/:lang" + regEx + "/questions-template"} render={(props) => this.renderPage(props, "questionsTemplatePageContainer")} />
				<Route exact path={"/:lang" + regEx + "/report"} render={(props) => this.renderPage(props, "reportContainer")} />

				{/* <Route exact path={"/:lang" + regEx + "/turnkey-solution"} render={(props) => this.renderPage(props, "sideBarContainer")} /> */}
			</React.Fragment>
		)
	}


	renderWaitLoading = (text) => {
		let styleSheet = {};
		styleSheet.height = window.innerHeight;
		return (
			<div id="_loading" className={'center-info ' + this.state.catchError ? 'error' : 'loading'} style={styleSheet}>
				<p>{text}</p>
			</div>
		)
	}

	render() {
		const lng = CommonUtil.getCurrentLang()
		if (this.state.catchError) {
			return this.renderWaitLoading('Issue with template service')
		}
		if (this.state.isWait) {
			return this.renderWaitLoading('')
		}
		//alert('this.state.isWait' + this.state.isWait)
		return (
			<BrowserRouter basename={''}>
				<div id="wrapper">
					<Helmet >
						<meta charSet="utf-8" />
						<meta property="og:title" content={this.state.metaTitle} />
						<meta property="og:type" content={this.state.metaType} />
						<meta property="og:image" content={this.state.metaImage} />
						<link rel="shortcut icon" href={process.env.PUBLIC_URL + '/esthar/images/' + this.state.skinName + "/favicon.ico"}></link>
						{/* <title>{this.getPageTitle()}</title> */}

					</Helmet>
					<SidebarComponent />
					{this.renderRoute(this.state.isWait, lng)}
				</div>

			</BrowserRouter>
		)
	}

}
