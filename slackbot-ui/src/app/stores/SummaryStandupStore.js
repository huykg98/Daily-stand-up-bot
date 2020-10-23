import { observable, action } from 'mobx';
import * as SummaryStandUpService from './../services/SummaryStandUpService';

export default class SummaryStandupStore {
    @observable SummaryStandUp={};

    @observable listSummaryReport = [];

    @observable listBlockers = [];

    @observable summaryTotal = {};

    @observable currentDate = new Date();

    @action setCurrentDate(date){
        this.currentDate = date;
        this.getBlockers(Math.floor(date.getTime() / 1000));
        this.getSummaryTotalReport(Math.floor(date.getTime() / 1000));
    }

    @action
    getSummaryTotalReport(date){
        const summary = SummaryStandUpService.getSummaryTotalReport(date);
        summary.then(res => {
            if(!res.error){
                this.summaryTotal = res;
                console.log(res);
            }
            else{}
            
        })
    }
    
    @action
    getSummaryReport(date){
        const listSummary = SummaryStandUpService.getSummaryReport(date);
        listSummary.then(res => {
            if(!res.error){
                this.listSummaryReport = res;
                console.log(res);
            }
            else{}
            
        })
    }

    @action
    getBlockers(date){
        const listBlockers = SummaryStandUpService.getBlockers(date);
        listBlockers.then(res => {
            if(!res.error){
                this.listBlockers = res;
            }
            else{}
            
        })
    }

}
