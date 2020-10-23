import React, { Component } from 'react'

export default class BlockerRowComponent extends Component {
    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <p>{this.props.blocker.text}</p>
            </div>
        )
    }
}
