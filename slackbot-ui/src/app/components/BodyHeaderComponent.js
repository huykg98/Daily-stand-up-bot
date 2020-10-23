import React, { Component } from 'react'

export default class BodyHeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className="left">{this.props.logo_url}</div>
                <div className="right">{this.props.logo_url}</div>
            </div>
        )
    }
}
