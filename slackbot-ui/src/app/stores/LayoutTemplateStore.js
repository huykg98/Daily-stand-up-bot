import React, { Component } from 'react'
import { observable, action, computed } from 'mobx'
import _ from 'lodash'

export default class LayoutTemplateStore {
    @observable templateData = {};

    @observable currentPageContainer = "homePageContainer"; //"homePageContainer";

    @action updateCurrentPageContainer(pageContainer) {
        if (this.currentPageContainer !== pageContainer) {
            this.currentPageContainer = pageContainer;
        }
    }

    @action updateBodyContainer(data) {
        this.templateData.bodyContainer = data
    }

    @action updateTemplateData(data) {
        Object.keys(data).map((key) => {
            this.templateData[key] = data[key];
            return key;
        })
    }

}
