import React, { Component } from 'react';

class ChannelComponent extends Component {
    render() {
        return (
            <div>
                {this.props.nameOfChannel};
            </div>
        );
    }
}

export default ChannelComponent;