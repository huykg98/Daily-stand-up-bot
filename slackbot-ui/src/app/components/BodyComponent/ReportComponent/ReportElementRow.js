import React, { Component } from 'react'
import CommonUtil from './../../../common/CommonUtil'

export default class ReportElementRow extends Component {
    render() {
        return (
            <div>
                <p style={{justifyContent: "space-between",display: "flex"}}>
                    <span style={{color: "blue"}}><img src={this.props.report.avatar} className="rounded-circle" /> {this.props.report.username} </span>
                    <span> {CommonUtil.epochToDateTime(this.props.report.timestamp, "dd/MM/yyyy")}</span>
                </p>
                <p >{this.props.report.text}</p>
                <hr />
            </div>
        )
    }
}
