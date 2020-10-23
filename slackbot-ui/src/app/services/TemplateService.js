import React from 'react';
import APIs from '../common/APIs';

import { Row, Col } from "react-bootstrap"

import CommonUtil from '../common/CommonUtil'

import defaultRestApi from '../common/RestApiInstance'
import componentKeyMappings from '../common/ComponentKeyMappings'
import _ from 'lodash'
import { AUTH_INFOR } from '../config/apiconfig';

class TemplateService {

    static getTemplatesAPI = (id) => {
        return defaultRestApi.get(APIs.getTemplateURL(id), {
            headers: {
                'Authorization': `bearer ${AUTH_INFOR.ACCESS_TOKEN}`
            }
        })
    }


    static getPageTemplatesAPI = (pade_code) => {
        return defaultRestApi.get(APIs.getPageTemplate(pade_code), {
            headers: {
                'Authorization': `bearer ${AUTH_INFOR.ACCESS_TOKEN}`
            }
        })
    }


    static getTemplatesAPILocal = (templateName) => {
        return defaultRestApi.get(APIs.getTemplateURLFromLocal(templateName))
    }



    static async loadPageTemplatesFromAPI(id) {
        let resp = await this.getPageTemplatesAPI(id)
        let tempData = this.initPageTemplate(resp.data.data[0].components.data)
        return tempData
    }

    static initComponent = (nameComp, idKey, initialData) => {
        if (idKey == null) {
            idKey = nameComp
        }
        let ComponentEle = componentKeyMappings[nameComp]
        if (ComponentEle != null) {
            return <ComponentEle key={idKey} initialData={initialData}></ComponentEle>
        } else return null
    }


    static async loadTemplateDataFromLocal(templateName) {
        let resp = await this.getTemplatesAPILocal(templateName)
        let tempData = this.initTemplateData(resp)
        return tempData
    }

    static async loadTemplateDataFromAPI(id) {
        let resp = await this.getTemplatesAPI(id)
        let tempData = this.initTemplateData(resp.data)
        return tempData
    }


    static updatePageTemplate(resp) {
        let temmplateData = {}
        temmplateData.headerContainer = []
        temmplateData.bodyContainer = []
        temmplateData.footerContainer = []
        for (let i = 0; i < resp.length; i++) {
            temmplateData[resp[i].parent.data.name].push({ ComponentName: resp[i].name, gridNo: resp[i].grid_columnn })
        }
        return temmplateData
    }

    static initPageTemplate(resp) {
        let temmplateData = {}
        temmplateData.headerContainer = []
        temmplateData.bodyContainer = []
        temmplateData.footerContainer = []
        for (let i = 0; i < resp.length; i++) {
            temmplateData[resp[i].parent.data.name].push({ ComponentName: resp[i].name, gridNo: resp[i].grid_columnn })
        }
        return temmplateData
    }

    static initTemplateData(resp) {
        let templateData = {};
        let templDetail = {};
        if (typeof resp.data.template === 'string') {
            templDetail = JSON.parse(resp.data.template);
        }
        else {
            templDetail = resp.data.template;
        }
        let initDataForComps = (templDetail.initDataForComps)
        templateData.allComponents = []
        this.pushComps(templateData.allComponents, templDetail.headerContainer.formal)
        templateData.headerContainer = templDetail.headerContainer;

        templateData.isNonNeader = false;
        if (templDetail.templateType !== null && templDetail.templateType === 'iFrame') {
            templateData.isNonNeader = true;
        }

        //-----------Body-------------------------//
        templateData.bodyContainer = {}
        templateData.bodyContainer = templDetail.bodyContainer
        for (var viewKey in templateData.bodyContainer) {
            let positionsInPages = templateData.bodyContainer[viewKey];
            for (var positionsInPageKey in positionsInPages) {
                let comps = positionsInPages[positionsInPageKey];
                this.pushComps(templateData.allComponents, comps);
            }
        }

        //--------------Footer-------------------//
        let footerComps = (templDetail.footerContainer)
        templateData.footerContainer = footerComps
        templateData.cssFile = templDetail.cssFiles[0].name
        this.pushComps(templateData.allComponents, footerComps)
        this.updateCompsInitialData(templateData.allComponents, initDataForComps)
        return templateData
    }

    static pushComps(orgComps, newDataComps) {
        if (Array.isArray(newDataComps) && newDataComps.length > 0) {
            _.forOwn(newDataComps, function (comp, key) {
                orgComps.push(comp);
            });
        }

    }

    static updateCompsInitialData(dataComps, initDataForComps) {
        let newComps = [];
        let mapNameAndIntialData = new Map();

        _.forOwn(initDataForComps, function (comp, key) {
            if (typeof comp.initialData === 'string') {
                mapNameAndIntialData.set(comp.componentName, JSON.parse(comp.initialData))
            }
            else {
                mapNameAndIntialData.set(comp.componentName, comp.initialData)
            }

        });

        _.forOwn(dataComps, function (comp, key) {
            if (mapNameAndIntialData.get(comp.componentName) != null) {
                comp.initialData = mapNameAndIntialData.get(comp.componentName)
            }
            newComps.push(comp);
        });
        dataComps = newComps;
    }

    /*
    Return React Component from JSON data
    */
    static listComponentsByDataNoGrid(data) {
        let objData = CommonUtil.convertMobxObjToJsonObj(data);
        var comps = Object.keys(objData)
		let listComponents = comps.map((key) => {
		    let compEle = null;
            let compName = data[key].componentName;
            let idKey = compName;
            let initialData = data[key].initialData;
            compEle = this.initComponent(compName, idKey, initialData);
            return <div key={key+'_components_nogrid'} className={compName+'_container'}>{compEle}</div>;
		});
		return listComponents;
    }

    /**
     * convert to React Components from data json
     * 
     */

    static listComponentsByData(data) {
        let objData = CommonUtil.convertMobxObjToJsonObj(data);
        var comps = Object.keys(objData)      
		let listComponents = comps.map((key) => {
		    let compEle = null
            let compName = data[key].componentName
            let idKey = compName
            let initialData = data[key].initialData
            compEle = this.initComponent(compName, idKey, initialData)		
            return {
                component: compEle, 
                gridColumn: data[key].gridColumn,
                compName: compName
            }
        })
        if(_.isEmpty(listComponents)){
            return (<div key ={'component_empty'} ></div>)
        }
        let viewRow = []
        let viewComponents = []
        let lengthGrid = 0
		let viewComponentsNoGrid = []
		
        for(let i = 0; i < listComponents.length; i++){
            lengthGrid += listComponents[i].gridColumn
          	let isNextHaveGrid = listComponents[i+1] != null && listComponents[i+1].gridColumn != null
				if(listComponents[i].gridColumn != null){
					viewComponents.push(
						<Col key={"col-" + i} sm={listComponents[i].gridColumn} className={listComponents[i].compName+'_container'}>
							{listComponents[i].component}
						</Col>
					)
					
				}
				else{
					viewComponentsNoGrid.push(
						<Col key={"col-" + i} className={listComponents[i].compName+'_container'}>
							{listComponents[i].component}
						</Col>
					)
					
					if(isNextHaveGrid){
						if(viewComponentsNoGrid.length > 0){
							viewComponents.push(
								<div className={'components_nogrid'} key={'component_key_' +i}>
									{viewComponentsNoGrid}
								</div>
							)
							viewComponentsNoGrid = []
						}
					}					
				}
			let isNextEleHaveGrid12 = isNextHaveGrid && (listComponents[i + 1].gridColumn == 12)
            if(isNextEleHaveGrid12 || lengthGrid >= 12 || i === listComponents.length-1){
                lengthGrid = 0
                viewRow.push(this.newRowComponent(viewComponents, i))
                viewComponents = []
            }
        }
        return viewRow
    }

    static findComponentByRowIndex(dataComponents, index) {
        let componentsInRow = _.filter(dataComponents, function (dataComp) {
            return dataComp.rowIndex === index || (index === 0 && dataComp.rowIndex == null)
        });
        return componentsInRow
    }

    static newRowComponent(componentInRow, key) {
        return (
            <Row key={"row-" + key}>
                <div className="container-fluid header-section">
                    {componentInRow.map(comp => {
                        return comp
                    })}
                </div>
            </Row>
        )
    }

    /**
     * convert to React Components from data json
     * 
     */
    static listDataCompsByContainer(temmplateData, container, page, position) {
        if (temmplateData[container] == null) return []
        if (temmplateData[container][page] == null) return []
        if (temmplateData[container][page][position] == null) return []
        return temmplateData[container][page][position];
    }

    /**
     * listDataCompsByContainerPosition
     */
    static listDataCompsByContainerPosition(LayoutTemplateStore, container, position) {
        let templateData = LayoutTemplateStore.templateData;
        let page = LayoutTemplateStore.currentPageContainer
        return this.listDataCompsByContainer(templateData, container, page, position);
    }
}

export default TemplateService

