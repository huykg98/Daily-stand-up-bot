import React, { Component } from 'react'
import {Row } from "react-bootstrap";
import { inject, observer } from "mobx-react";

@inject("QuestionsTemplateStore")
@observer
export default class QuestionComponent extends Component {

    onDeleteQuestion(index){
        this.props.QuestionsTemplateStore.deleteQuestion(index);
    }

    onChangeQuestionContent(e) {
        this.props.QuestionsTemplateStore.changeQuestionValue(this.props.index, e.target.value);
    }
    render() {
        const fontStyle = {
            color: "black", 
            cursor: "pointer",
            fontSize: "large"
        }
        return (
            <div>
                <Row style={{ justifyContent: "space-between", display: "flex" }} className="mr-1 ml-1 mt-1">
                    <label>Question {this.props.index + 1}:</label>
                    <i style={fontStyle} onClick={() => this.onDeleteQuestion(this.props.index)} className="fa fa-times-circle mt-1"></i>
                    
                </Row>
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Type description of questions template"
                  name="label"
                  value={this.props.question.label}
                  onChange={e => this.onChangeQuestionContent(e)}
                />
            </div>
        )
    }
}
