import React, { Component } from 'react'
import { Card, Button, Row, Col } from "react-bootstrap";
import {
    FormGroup,
    FormControlLabel
} from "react-form-with-constraints-bootstrap4";
import {
    FormWithConstraints,
} from "react-form-with-constraints";
import { inject, observer } from "mobx-react";
import { toJS } from 'mobx'
import Select from 'react-select';
import Calendar from 'react-calendar'


@inject("ReportStore")
@observer
export default class ReportFilterPanel extends Component {
    constructor(props){
        super(props)
        this.usernameRef = React.createRef();
        this.reportStore = this.props.ReportStore;
    }

    // onClickReset() {
    //     document.getElementById('form-id').reset();
    // }

    onHandleFromDateChange(date){
        this.reportStore.setFromDate(date);
    }

    onHandleToDateChange(date){
        this.reportStore.setToDate(date);
    }

    onSearch(date, username, channel){
        let fromDateEpoch = new Date()
        let toDateEpoch = new Date();

        if(date.length == 2){
            fromDateEpoch = new Date(date[0])
            toDateEpoch = new Date(date[1])
        }else {
            fromDateEpoch = new Date(date)
            toDateEpoch = new Date(date)
        }

        fromDateEpoch.setHours(0);
        fromDateEpoch.setMinutes(0);
        fromDateEpoch.setSeconds(0);
        fromDateEpoch = Math.round(fromDateEpoch.getTime()/1000);

        toDateEpoch.setHours(23);
        toDateEpoch.setMinutes(59);
        toDateEpoch.setSeconds(59);
        toDateEpoch = Math.round(toDateEpoch.getTime()/1000);

        this.reportStore.getReportFilter(fromDateEpoch, toDateEpoch, username, channel)
        
    }

    onHandleChangeSelect(e){
        this.reportStore.setSelectedChannel(e.value)
    }

    componentDidMount(){
        this.reportStore.getListChannel();
        
    }

    check(){
        console.log(this.usernameRef.current.value)
    }

    onChangeDate(date) {
        this.reportStore.setDate(date);
    }

    onClickDateRange(){
        this.reportStore.setDateRange(!this.reportStore.dateRange)
    }

    render() {
        if(this.reportStore.listChannel.length == 0) return null;
        let options = [];

        for(let i=0 ; i<this.reportStore.listChannel.length; i++){
            let channel = {
                value: this.reportStore.listChannel[i].id,
                label: this.reportStore.listChannel[i].channelName
            }
            options.push(channel);
        }
        if(this.reportStore.selectedChannel == '') this.reportStore.setSelectedChannel(options[0].value)

        return (
            <Card className="m-3">
                <Card.Header><h2>List Report</h2></Card.Header>
                <Card.Body >
                    <FormWithConstraints id="form-id">
                        <Row >   
                            <Col className="ml-3" sm={12} style={{justifyContent: "space-between", display: "flex"}}>
                                <FormGroup>
                                    <Row>
                                    <Col xl={6}>
                                    <Calendar selectRange={this.reportStore.dateRange} 
                                              style={{width: '100%', height: '100%'}} 
                                              onChange={date => this.onChangeDate(date)} 
                                              value={toJS(this.reportStore.date)}
                                              />
                                    </Col>
                                        {/* <FormControlLabel className="mr-2 mt-2">From</FormControlLabel>
                                        <DatePicker 
                                                name='fromDateInput'
                                                className="form-control"
                                                selected={moment(this.reportStore.fromDate)} 
                                                onChange={date => this.onHandleFromDateChange(date)}
                                                dateFormat="YYYY/MM/DD"/>

                                        <FormControlLabel className="mr-2 mt-2 ml-5">To</FormControlLabel>
                                        <DatePicker 
                                                name='toDateInput'
                                                className="form-control"
                                                selected={moment(this.reportStore.toDate)} 
                                                onChange={date => this.onHandleToDateChange(date)}
                                                dateFormat="YYYY/MM/DD"/> */}

                                        
                                    <Col xl={6} >    
                                        <Col xl={12}>
                                        <FormControlLabel >User</FormControlLabel> 
                                            <input ref={this.usernameRef} className="form-control" placeholder="username"></input>
                                        </Col>
                                        
                                        
                                        <Col xl={12}>
                                        <FormControlLabel>Channel</FormControlLabel>
                                            <Select
                                                options={options}
                                                searchable={false}
                                                clearable={false}
                                                name='leaveTypeSelect'
                                                value={this.reportStore.selectedChannel}
                                                placeholder={"Please select channel"}
                                                onChange={e => this.onHandleChangeSelect(e)}
                                            />
                                        </Col>

                                        <Col xl={12}>
                                        <FormControlLabel>Date Range</FormControlLabel>
                                            <input onChange={() => this.onClickDateRange()} 
                                                   className="mt-2 ml-2" 
                                                   type="checkbox" 
                                                   checked={this.reportStore.dateRange}/>
                                        </Col>

                                        <Col style={{position: "absolute", bottom: "0"}} >
                                            <Button variant='secondary' 
                                                onClick={()=>this.onSearch(
                                                this.reportStore.date, 
                                                this.usernameRef.current.value, 
                                                this.reportStore.selectedChannel)}>Search</Button>
                                        </Col>
                                    </Col>
                                        
                                    </Row>
                                </FormGroup>
                            </Col>
                        </Row>
                        
                            {/* <Button variant='secondary' className="mt-2 ml-2" onClick={this.onClickReset}>Reset</Button> */}
                            
                        </FormWithConstraints>
                    </Card.Body>
            </Card>
        )
    }
}
