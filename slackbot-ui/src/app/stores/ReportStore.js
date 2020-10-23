import * as ReportService from './../services/ReportService';
import * as ChannelService from './../services/ChannelService';
import { observable, action } from 'mobx';

export default class ReportStore {
    @observable listReport = [];

    @observable listChannel = [];

    @observable isLoadingReport = false;

    @observable date = new Date();

    @observable selectedChannel = '';

    @observable dateRange = false;


    @action
    setDateRange(dateRange) {
        this.dateRange = dateRange;
    }

    @action 
    setDate(date) {
        this.date = date
    }

    @action 
    setSelectedChannel(selectedChannel) {
        this.selectedChannel = selectedChannel
    }

    @action 
    getListChannel() {
        let reports = ChannelService.getAllChannel();
        reports.then(response => {
            console.log(response)
            if(!response.error){
                this.listChannel = response;
                this.selectedChannel = response[0].id
            }
            else{
                
            }
        })
    }

    @action 
    getReportFilter(fromDate,toDate ,username, channel) {
        this.isLoadingReport = true;
        let reports = ReportService.getReportFilter_V2(fromDate, toDate, username, channel);
        reports.then(response => {
            console.log(response)
            if(!response.error){
                this.listReport = response;
                this.isLoadingReport = false;
            }
            else{
                
            }
        })
        
    }
    
}
