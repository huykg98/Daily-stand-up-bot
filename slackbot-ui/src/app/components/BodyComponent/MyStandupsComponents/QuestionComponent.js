import React, { Component } from 'react';

class QuestionComponent extends Component {
    render() {
        return (
            <div>
                {this.props.index + 1}: 
                {" "+this.props.nameOfQuestion}?
            </div>
        );
    }
}

export default QuestionComponent;