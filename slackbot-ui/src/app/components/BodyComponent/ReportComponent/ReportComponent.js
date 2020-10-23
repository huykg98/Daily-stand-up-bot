import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import { inject, observer } from "mobx-react";
import ReportFilterPanel from './ReportFilterPanel'
import ReportElementComponent from './ReportElementComponent'
import { toJS } from 'mobx'


@inject("ReportStore")
@observer
export default class ReportComponent extends Component {
    constructor(props){
        super(props);
        this.reportStore = this.props.ReportStore;
    }
    
    componentDidMount(){
        //const secondsSinceEpoch = Math.round(Date.now() / 1000)

        let fromDate = new Date()
        let toDate = new Date()
        if(this.reportStore.date.length == 2){
            fromDate = new Date(this.reportStore.date[0])
            toDate = new Date(this.reportStore.date[1])
        }
        else {
            fromDate = new Date(this.reportStore.date)
            toDate = new Date(this.reportStore.date)
        }
        fromDate.setHours(0);
        fromDate.setMinutes(0);

        toDate.setHours(23);
        toDate.setMinutes(59);

        this.reportStore.getReportFilter(Math.round(fromDate.getTime() / 1000), Math.round(toDate.getTime() / 1000), '', this.reportStore.selectedChannel);
    }
    render() {

        const reportEle = this.reportStore.listReport.map((element, index) => {
            return <ReportElementComponent key={index} element={element} />
        })

        const loading = () => {
            return <tr><td colSpan={5} style={{textAlign: "center", fontWeight: "bold", fontSize: "40px"}}>Loading</td></tr>
        }
        return (
        <Card className="m-3">
        <ReportFilterPanel />
            <Card.Body>
                <div className="row">
                    {reportEle}
                </div>
            </Card.Body>
            

        </Card>
        )
    }
}
