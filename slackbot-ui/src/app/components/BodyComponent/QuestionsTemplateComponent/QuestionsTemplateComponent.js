import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import CommonUtil from "../../../common/CommonUtil";
import { Card, Button, Row, Modal, Table } from "react-bootstrap";
import QuestionsTemplateRowComponent from "./QuestionsTemplateRowComponent";
import QuestionComponent from "./QuestionComponent";

@inject("QuestionsTemplateStore")
@observer
class QuestionsTemplateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewForm: false,
      name: "",
      questionTeam: 0,
      shareChannel: ""
    };
    this.QuestionsTemplateStore = this.props.QuestionsTemplateStore;
  }

  componentDidMount() {
    this.QuestionsTemplateStore.getQuestionsTemplateList();
    console.log(
      "list get from action" +
        this.props.QuestionsTemplateStore.getQuestionsTemplateList()
    );
  }

  onHandleRefresh = () => {
    this.setState({
      showNewForm: true,
    });
  };

  ShowtemplateList = (templateList) => {
    var result = templateList.map((list, index) => {
      return (
        <QuestionsTemplateRowComponent
          key={index}
          templateList={list}
          active={list.status}
        />
      );
    });
    return result;
  };

  onAddQuestion(e) {
    let question = {
      label: '',
      type: 'text',
      placeholder: '',
      optional: 0,
      defaultValue: ''
    }
    this.QuestionsTemplateStore.addQuestion(question)
  }
  handleClose() {
    this.setState({
      showNewForm: false
    });
  }
  onChange = (e) => {
    const {target} = e;
    const {name,value} = target;
    this.QuestionsTemplateStore.currentTemplate[name] = value;

  }

  onSubmit = (e) => {
    e.preventDefault();
    this.QuestionsTemplateStore.insertQuestionTemplate(CommonUtil.convertMobxObjToJsonObj(this.QuestionsTemplateStore.currentTemplate));
    this.handleClose();
  }

  render() {
    var currentTemplate = CommonUtil.convertMobxObjToJsonObj(this.QuestionsTemplateStore.currentTemplate);
    const listQuestion = currentTemplate.questions.map((question, index) => {
      return <QuestionComponent key={index} question={question} index={index}/>
    })
    
    var templateList = CommonUtil.convertMobxObjToJsonObj(
      this.props.QuestionsTemplateStore.questionsTemplateList
    );
    const questionsTemplateRows = templateList.map((template, id) => {
      return <QuestionsTemplateRowComponent key={id} index={id} template={template} />;
    });
    return (
      <Card className="m-3">
        <Card.Header>
          <Row style={{ justifyContent: "space-between", display: "flex" }}>
            <h2 className="ml-3"> Questions Template List </h2>
            <Button className="mr-3" onClick={() => this.onHandleRefresh()}>
              <i className="fa fa-plus" aria-hidden="true"></i> New template
            </Button>
          </Row>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th>
                  <h3>No.</h3>
                </th>
                <th>
                  <h3>Template Name</h3>
                </th>
                <th>
                  <h3>Description</h3>
                </th>
                <th>
                  <h3>Action</h3>
                </th>
              </tr>
            </thead>
            <tbody className="text-center">{questionsTemplateRows}</tbody>
          </Table>
        </Card.Body>
        <Modal show={this.state.showNewForm} onHide={() => this.handleClose()}>
        <form onSubmit={(e)=>{this.onSubmit(e)}}>
          <Modal.Header className="panel-heading">
            <Modal.Title>Add New Template</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="form-group">
                <label>Name Of Template</label>
                <input
                  type="text"
                  className="form-control"
                  value={currentTemplate.name}
                  name="name"
                  placeholder="Type name of questions template"
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={currentTemplate.description}
                  placeholder="Type description of questions template"
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Question list</label>
                <div className="form-group">
                  {listQuestion}
                </div>
                <a style={{cursor: "pointer", color: "blue"}} onClick={e => this.onAddQuestion(e)}>+ add question</a>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleClose()}>Close</Button>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
          </form>
        </Modal>
      </Card>
    );
  }
}

export default QuestionsTemplateComponent;
