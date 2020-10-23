import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Button, Modal } from "react-bootstrap";
import CommonUtil from "../../../common/CommonUtil";

@inject("QuestionsTemplateStore")
@observer
export default class QuestionsTemplateRowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false,
      showDetail: false,
      showInfo: false,
    };
    // this.store=this.props.QuestionsTemplateStore;
  }
  handleClose = () => {
    if(this.state.showDeleteModal){
      this.setState({
        showDeleteModal: !this.state.showDeleteModal
      })
    }
    if(this.state.showDetail){
      this.setState({
        showDetail: !this.state.showDetail
      })
    }
    if(this.state.showInfo){
      this.setState({
          showInfo: !this.state.showInfo
      })
    }
  }
  onOpenDelete =() => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal,
    });
  }
  handleDelete = (id) => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal,
    });
    this.props.QuestionsTemplateStore.deleteQuestionTemplate(id);
    console.log(this.props.template.id)
  };

  handleDetail = (id) => {
    this.setState({
      showDetail: !this.state.showDetail,
    });
    this.props.QuestionsTemplateStore.getDialogFormDetail(id);
  };

  handleStatus = (id) => {
    this.props.QuestionsTemplateStore.changeStatus(id);
  };

  handleUpdate = (id) => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
    this.props.QuestionsTemplateStore.getDataToMobx(id);
    console.log(this.props.QuestionsTemplateStore.currentTemplate)
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log(CommonUtil.convertMobxObjToJsonObj(this.props.QuestionsTemplateStore.templateObject))
    this.props.QuestionsTemplateStore.updateQuestionTemplate(CommonUtil.convertMobxObjToJsonObj(this.props.QuestionsTemplateStore.templateObject));
    this.handleClose();
  }
  onChange=(event , index)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
     if(name==="label"){
         console.log(this.props.QuestionsTemplateStore.templateObject.questions[index])   
         this.props.QuestionsTemplateStore.templateObject.questions[index][name]=value;     
     }
    this.props.QuestionsTemplateStore.templateObject[name]=value;
     
  }
  render() {
    var templateList = this.props.template;
   
    var id = this.props.index;
    var templateName = templateList.name;
    var description = templateList.description;
    var question = this.props.QuestionsTemplateStore.questionDetail;

    var label = question.map((question,index) => {
      return <div key={index}>
                <span className="label">&nbsp;&nbsp;{question.label}</span> <br/>
              </div>
    });
    var labelUpdate = this.props.QuestionsTemplateStore.templateObject.questions.map((ques,index) => {
      return <div className="form-group" key={index}>
                <input type="text" className="form-control" 
                    value={ques.label}
                    name="label"
                    onChange={(e)=>this.onChange(e, index)}
                  />      
              </div>
    })
    return (
      <tr>
        <td>{id + 1}</td>
        <td>
          <h4>{templateName}</h4>
        </td>
        <td>{description}</td>
        {/* <td>{this.props.template.group}</td> */}
        {/* <td>Active</td> */}
        <td>
          <button className="btn mr-1" onClick={() => this.handleDetail(templateList.id)}>
            <i className="fa fa-info-circle"></i>
          </button>
          <button className="btn mr-1" onClick={() => this.handleUpdate(templateList.id)}>
            <i className="fa fa-edit"></i>
          </button>
          <button className="btn mr-1" onClick={() => this.onOpenDelete()}>
            <i className="fa fa-trash"></i>
          </button>

        </td>

        <Modal  show={this.state.showDeleteModal}    onHide={() => this.handleDelete()}>
          <Modal.Header>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to delete this standup ?</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleClose()}>Close</Button>
            <Button onClick={() => this.handleDelete(templateList.id)}>Delete</Button>
          </Modal.Footer>
        </Modal>

        {/*Handle Detail*/}
        <Modal show={this.state.showDetail} onHide={() => this.handleDetail(templateList.id)}>
          <Modal.Header>
            <Modal.Title>Question Template Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <span className="label">Name Of Template : </span> {templateName}<br/>
              <span className="label">Description : </span> {description}<br/>
              <span className="label">Question : </span> <br/>
                    {label} 
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleClose()}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/*Handle Update*/}
        <Modal show={this.state.showInfo} onHide={() => this.handleUpdate(templateList.id)}>
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <Modal.Header>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="form-group">
                <label>Name Of Template</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.props.QuestionsTemplateStore.templateObject.name}
                  name="name"
                  onChange={(e)=>this.onChange(e)}
              />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={this.props.QuestionsTemplateStore.templateObject.description===null?'Null':this.props.QuestionsTemplateStore.templateObject.description}
                  onChange={(e)=>this.onChange(e)} 
                />
              </div>
              <div className="form-group">
                <label>Question list</label>
                  {labelUpdate}
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleClose()}>Close</Button>
            <Button type="submit">Update</Button>
          </Modal.Footer>
          </form>
        </Modal>
      </tr>
    );
  }
}