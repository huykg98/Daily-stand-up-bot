import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Button, Modal } from "react-bootstrap";
import QuestionComponent from "./QuestionComponent";
import ChannelComponent from "./ChannelComponent";
import { decorate } from "mobx";
import Select from 'react-select';
import CommonUtil from "../../../common/CommonUtil";
import { MDBTimePicker } from "mdbreact";
// import MyNotification from "../../MyNotification";



@inject("MyStandupStore")
@observer
export default class MyStandupsElementComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false,
      showDetail: false,
      showUpdate: false,
    };
    this.onChange = this.onChange.bind(this);
    this.myStandupStore = this.props.MyStandupStore;
  }
  componentDidMount() {

  }

  handleDelete = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal,
    });
  };
  handleDetail = (id) => {
    this.setState({
      showDetail: true,
    });
    this.myStandupStore.getDailyStandupDetail(this.props.standup.id);
  };
  onClose() {
    this.setState({
      showDetail: false,
    });
  }
  handleStatus = (id) => {
    console.log(id)
    this.props.MyStandupStore.changeStatus(id);
  };
  handleUpdate = (id) => {
    this.setState({
        showUpdate: !this.state.showUpdate,
    });
    this.props.MyStandupStore.getChannelList();
    this.myStandupStore.getDailyStandupDetail(this.props.standup.id);
  };

  onChange=(event)=>{
    var target = event.target;
    var name= target.name;
    var id = target.value;
    this.props.MyStandupStore.currentDailyStandupDetail[name] = id;

  }
  onHandleChangeTemplateSelect(e){
    this.props.MyStandupStore.setSelectedQuestionsTemplateForUpdate(e.value)
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.myStandupStore.updateStandup(CommonUtil.convertMobxObjToJsonObj(this.props.MyStandupStore.currentDailyStandupDetail));
    alert(this.props.MyStandupStore.currentDailyStandupDetail.dailyTemplateName + 'have been updated!');
    this.handleClose();
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
    if(this.state.showUpdate){
      this.setState({
        showUpdate: !this.state.showUpdate
      })
    }
  }
  onHandleChangePeriodSelect(e){
    this.props.MyStandupStore.setSelectedPeriodForUpdate(e.value)
  }
  handleCheckboxesChange = e => {
    var target = e.target;
    var value = target.checked;
    var key = target.value;
    this.myStandupStore.setDaysOfWeekCheckBox(key, value);

  };
  handleMultiChannelChange= value =>  {
    this.props.MyStandupStore.setSelectedChannelForUpdate(value);
  }
  setTimeRemindValue = value => {
    this.props.MyStandupStore.setSelectedTimeRemindForUpdate(value)
  };
  renderweekDaysByID = (id) => {
    return [...this.myStandupStore.daysOfWeekCheckBoxes].map(([key, value]) => {
      return (
        <div className="form-check-inline">
          {
            <label className="form-check-label" for="check1">
              <input
                type="checkbox"
                className="form-check-input"
                id="daysWeek"
                name={key}
                value={key}
                checked={value}
                disabled={this.state.showUpdate?false:true}
                onChange={e => this.handleCheckboxesChange(e)}
              />{" "}
              {key}
            </label>
          }
        </div>
      );
    });
  };

  render() {
    const channelRow = this.props.MyStandupStore.channelOfDailyList.map(
      (channel, index) => {
        return (
          <ChannelComponent
            key={index}
            channel={channel}
            nameOfChannel={channel.channelName}
          />
        );
      }
    );
    const questionRow = this.props.MyStandupStore.questionOfDailyList.map(
      (question, index) => {
        return (
          <QuestionComponent
            key={index}
            index={index}
            question={question}
            nameOfQuestion={question.questionTitle}
          />
        );
      }
    );
    
    const loading = () => {
      return (
        <p
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}
        >
          ...
        </p>
      );
    };

    let optionsTemplateList = [{value: ''}];

    for(let i=0 ; i<this.myStandupStore.questionTemplateList.length; i++){
        let temnplate = {
            value: this.myStandupStore.questionTemplateList[i].name,
            label: this.myStandupStore.questionTemplateList[i].name
        }
        optionsTemplateList.push(temnplate);
    }

    let optionsPeriod = [{value: ''}];

    for(let i=0 ; i<this.myStandupStore.period.length; i++){
        let period = {
            value: this.myStandupStore.period[i].id,
            label: this.myStandupStore.period[i].period
        }
        optionsPeriod.push(period);
    }

    
    let optionsChannelList = [{value: ''}];

    for(let i=0 ; i<this.myStandupStore.channelList.length; i++){
        let channel = {
            value: this.myStandupStore.channelList[i].id,
            label: this.myStandupStore.channelList[i].channelName
        }
        optionsChannelList.push(channel);
    }
    let selectedCn = [];

    for(let i=0 ; i<this.myStandupStore.currentDailyStandupDetail.channelList.length; i++){
        let channel = {
            value: this.myStandupStore.currentDailyStandupDetail.channelList[i].id,
            label: this.myStandupStore.currentDailyStandupDetail.channelList[i].channelName
        }
        selectedCn.push(channel);
    }
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>
          <h5>{this.props.standup.dailyTemplateName}</h5>
        </td>
        <td>{this.props.standup.dateCreated}</td>
        <td>{this.props.standup.questionsTemplateName}</td>
        <td>{this.props.standup.period}</td>
        <td>
          <button type="button" className={this.props.standup.state?"btn btn-primary":"btn btn-danger"} onClick={() => this.handleStatus(this.props.standup.id)}>
            {this.props.standup.state==="true" ? "Active " : "Inactive"}
          </button>
        </td>
        <td>
          <i
            className="fa fa-info-circle fa-3x btn"
            onClick={() => this.handleDetail(this.props.standup.id)}
          ></i>
          &nbsp;
          <i
            className="fa fa-edit fa-3x btn"
            onClick={() => this.handleUpdate(this.props.standup.id)}
          ></i>
          &nbsp;

        </td>

        {/*Handle Detail*/}
        <Modal
          size="lg"
          show={this.state.showDetail}
          onHide={() => this.onClose()}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.standup.dailyTemplateName}</Modal.Title>
          </Modal.Header>
          {this.myStandupStore.isLoadingDailyStandupDetail ? (
            loading()
          ) : (
            <Modal.Body>
              <div className="form-group">
                <label>Daily Name: </label>{" "}
                {
                  this.props.MyStandupStore.currentDailyStandupDetail
                    .dailyTemplateName 
                }
              </div>
              <div className="form-group">
                <label>Remind Time:</label>{" "}
                {this.props.MyStandupStore.currentDailyStandupDetail.remindTime}
              </div>
              <div className="form-group">
                <label>Remind Message:</label>{" "}
                {this.props.MyStandupStore.currentDailyStandupDetail.remindMessage}
              </div>
              <div className="form-group">
                <label>Frequency:</label>
                <br />
                {/* {this.props.MyStandupStore.currentDailyStandupDetail.dayOfWeek} */}
                {this.renderweekDaysByID(this.props.standup.id)}
              </div>

              <div className="form-group">
                <label>Channels:</label>
                <Select
                  options={this.props.MyStandupStore.channelOptions}
                  name='channelList'
                  value={selectedCn}
                  placeholder='No channels have been selected yet'
                  onChange={value => this.handleMultiChannelChange(value)}
                  disabled
                  multi={true}
                  />    
              </div>
              <div className="form-group">
                <label>Questions Template:</label>
                <a
                  style={{ margin: "0 0 0 5px", fontWeight: "bold"}}
                  href=""
                  data-toggle="collapse"
                  data-target="#showQuestionList"
                >
                  {
                    this.props.MyStandupStore.currentDailyStandupDetail
                      .questionsTemplateName
                  }
                </a>
                <div id="showQuestionList" className="collapse">
                  {questionRow}
                </div>
              </div>
            </Modal.Body>
          )}

          <Modal.Footer>
            <Button onClick={() => this.onClose()}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/*Handle Update*/}
        <Modal size="lg" show={this.state.showUpdate} onHide={() => this.handleUpdate(this.props.standup.id)}>
        <form onSubmit={(e)=>this.onSubmit(e)}>

          <Modal.Header className="panel-heading" closeButton>
            <Modal.Title>Questions and Frequency</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="form-group">
                <label>NAME YOUR FOLLOW-UP</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  name="dailyTemplateName"
                  value={this.props.MyStandupStore.currentDailyStandupDetail.dailyTemplateName}
                  onChange={(e) => this.onChange(e)}
                />

              </div>
              <div className="form-group">
                <label>QUESTIONS FOR THIS TEAM</label>
                <Select
                  options={optionsTemplateList}
                  searchable={true}
                  required="required"
                  clearable={false}
                  name='questionsTemplateName'
                  value={this.props.MyStandupStore.currentDailyStandupDetail.questionsTemplateName}
                  placeholder={"Please select frequency"}
                  onChange={(e) => this.onHandleChangeTemplateSelect(e)}
                  /> 
              </div>
              <div className="form-group">
                <label>FREQUENCY</label>
                <Select
                  required="required"
                  options={optionsPeriod}
                  searchable={true}
                  clearable={false}
                  name='leaveTypeSelect'
                  value={this.props.MyStandupStore.currentDailyStandupDetail.period}
                  placeholder={"Please select frequency"}
                  onChange={e => this.onHandleChangePeriodSelect(e)}
                  />   
              </div>
              <div className="form-group">
                <label>REMIND TIME:</label>
                  <MDBTimePicker id="timePicker" label="" value = {this.props.MyStandupStore.currentDailyStandupDetail.remindTime} hours={8} minutes={0} hoursFormat={24} getValue={this.setTimeRemindValue}  onChange={(e) => this.onChange(e)} />
              </div>
              <div className="form-group">
                <label>REMIND MESSAGE:</label>
                <input type="text" required name="remindMessage" className="form-control" value={this.props.MyStandupStore.currentDailyStandupDetail.remindMessage} aria-describedby="emailHelp" placeholder="Type remind of message" onChange={(e) => this.onChange(e)} />
              </div>
              <div className="form-group">
                <label>REPEAT ON THESE DAYS</label>
                <div className="checkbox">
                  <br/>
                  {this.renderweekDaysByID(this.props.standup.id)}

                </div>
              </div>
              <div className="form-group">
                <label>CHANNELS:
                  <small id="emailHelp" className="form-text text-muted">
                    If you select a channel that already has a standup, this channel will be overridden!
                  </small>
                </label>  
                <Select
                  options={this.props.MyStandupStore.channelOptions}
                  searchable={true}
                  clearable={true}
                  name='channelList'
                  value={selectedCn}
                  onChange={value => this.handleMultiChannelChange(value)}
                  // onChange={(e) => this.onChange(e)}
                  multi={true}
                  />    
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleClose()}>Cancel</Button>
            <Button type="submit">Update</Button>
          </Modal.Footer>
          </form>

        </Modal>
      </tr>
    );
  }
}
