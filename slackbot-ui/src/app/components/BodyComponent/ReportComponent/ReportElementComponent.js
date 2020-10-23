import React, { Component } from 'react'
import { Card, Col } from "react-bootstrap";
import ReportElementRow from './ReportElementRow'

export default class ReportElementComponent extends Component {
    render() {
        const reportEleRow = this.props.element.reports.map((report, index) => {
            return <ReportElementRow key={index} report={report}/>
        })
        return (
            <Col>
                <Card>
                    <Card.Header style={{textAlign: "center"}}>{this.props.element.label}</Card.Header>
                    <Card.Body>
                        {reportEleRow}
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
