import React, { Component } from 'react'

export default class ReportDetailComponent extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.reportDetail.label}</h5>
                <p>{this.props.reportDetail.value}</p>
            </div>
        )
    }
}
