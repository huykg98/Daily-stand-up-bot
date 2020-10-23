import React, { Component } from 'react'
import CommonUtil from "./../../../common/CommonUtil"
import { Card, Button, Row, Modal, Form, Table } from "react-bootstrap";
import { inject, observer } from "mobx-react";
import ReportDetailComponent from './ReportDetailComponent'

@inject("ReportStore")
@observer
export default class ReportRowComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            showInfoModal: false
        }

        this.reportStore = this.props.ReportStore;
    }

    onShowInfoModal(id){
        this.setState({
            showInfoModal: true
        })
        this.reportStore.getReportDetail(id);
    }

    onClose(){
        this.setState({
            showInfoModal: false
        })
    }
    render() {
        const reportDetailRow = this.reportStore.currentReportDetail.map((reportDetail, index) => {
            return <ReportDetailComponent key={reportDetail.reportDetailId} reportDetail={reportDetail} />
        })

        const loading = () => {
            return <p style={{textAlign: "center", fontWeight:"bold", fontSize:"30px"}}>Loading</p>
        }

        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.report.username}</td>
                <td>{this.props.report.channelName}</td>
                <td>{CommonUtil.epochToDateTime(this.props.report.timestamp, "dd/MM/yyyy (hh:mm)")}</td>
                <td>
                    <Button onClick={() => this.onShowInfoModal(this.props.report.reportId)}>
                        <i className="fa fa-info-circle"></i>
                    </Button>
                </td>
                <Modal centered={true} show={this.state.showInfoModal} onHide={() => this.onClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Report</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.reportStore.isLoadingReportDetail ? loading() :reportDetailRow}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.onClose()}>Close</Button>
                    </Modal.Footer>
                </Modal> 
            </tr>
        )
    }
}
