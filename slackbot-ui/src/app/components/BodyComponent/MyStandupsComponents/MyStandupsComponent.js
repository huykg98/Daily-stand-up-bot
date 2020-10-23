import React, { Component } from 'react';
import { inject, observer }from 'mobx-react'
import CommonUtil from '../../../common/CommonUtil';
import { Card, Button, Modal, Row, Table } from 'react-bootstrap'
import MyStandupsElementComponent from './MyStandupsElementComponent'
import Select from 'react-select';
import "react-select/dist/react-select.css";
import { MDBTimePicker } from "mdbreact";


@inject("MyStandupStore")
@observer
class MyStandupsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNewForm: false,
    };
    this.myStandupStore = this.props.MyStandupStore;

  }
 
  componentDidMount() {
    this.props.MyStandupStore.getMyStandupList();
    this.props.MyStandupStore.getQuestionTemplateList();
  }

  handleClose() { 
    this.setState({
        showNewForm: false
    });
  }

  onHandleAdd=()=>{
    this.setState({
      showNewForm: true
    });
    this.props.MyStandupStore.getChannelList();
  }
  onChange=(event)=>{
    var target = event.target;
    var name= target.name;
    var id = target.value;
    this.props.MyStandupStore.newDailyStandupDTO[name] = id;


  }

  onSubmit = (e) => {
    e.preventDefault();
    this.myStandupStore.setNewStandup(CommonUtil.convertMobxObjToJsonObj(this.props.MyStandupStore.newDailyStandupDTO));
    this.props.MyStandupStore.refreshData();
    this.handleClose();
  }

  onHandleChangeTemplateSelect(e){
    this.props.MyStandupStore.setSelectedQuestionsTemplate(e.value)
  }
  onHandleChangePeriodSelect(e){
    this.props.MyStandupStore.setSelectedPeriod(e.value)
  }
  setTimeRemindValue = value => {
    this.props.MyStandupStore.setSelectedTimeRemind(value)
  };
  handleMultiChannelChange= value =>  {
    this.props.MyStandupStore.setSelectedChannel(value);
  }
  
  renderweekDaysInsert = () => {
    return [...this.myStandupStore.daysOfWeekCheckBoxesForInsert].map(([key, value]) => {
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
                onChange={e => this.handleCheckboxesInsertChange(e)}
              />{" "}
              {key}
            </label>
          }
        </div>
      );
    });
  };

  handleCheckboxesInsertChange = e => {
    var target = e.target;
    var value = target.checked;
    var key = target.value;
    this.myStandupStore.setDaysOfWeekCheckBoxInsert(key, value);
  };
  render() {

    const loading = () => {
        return <td colSpan={5} style={{textAlign: "center", fontWeight: "bold", fontSize: "40px"}}>...</td>
    }

    const standupRows = this.props.MyStandupStore.myStandupList.map((standup, index) => {
      return <MyStandupsElementComponent key={index} index={index} standup={standup} />;
    });
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

  
    let selectedCn = [];

    for(let i=0 ; i<this.myStandupStore.newDailyStandupDTO.channelList.length; i++){
        let channel = {
            value: this.myStandupStore.newDailyStandupDTO.channelList[i].id,
            label: this.myStandupStore.newDailyStandupDTO.channelList[i].channelName
        }
        selectedCn.push(channel);
    }
    return (
      <Card className="m-3">
        <Card.Header >
          <Row style={{justifyContent: 'space-between', display: 'flex'}}>
            <h2 className="ml-3">My Standups </h2>
            <Button className='mr-3' onClick={() => this.onHandleAdd()}>
              <i className="fa fa-plus" aria-hidden="true"></i> New standup
            </Button>
          </Row>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead className="text-center">
              <tr>
                <th><h3>No.</h3></th>
                <th><h3>Daily Name</h3></th>
                <th><h3>Date Created</h3></th>
                <th><h3>Questions Template</h3></th>
                <th><h3>Frequency</h3></th>
                <th><h3>Status</h3></th>
                {/* <th><h3>Repeat</h3></th>
                <th><h3>Channel List</h3></th> */}
                <th><h3>Action</h3></th>
              </tr>
            </thead>
            <tbody className="text-center">
              {this.myStandupStore.isLoadingDailyStandup? loading() : standupRows}
            </tbody>
          </Table>   
        </Card.Body>

        <Modal size="lg" show={this.state.showNewForm} onHide={() => this.handleClose()}>
        <form onSubmit={(e)=>{this.onSubmit(e)}}>

          <Modal.Header className="panel-heading" >
              <Modal.Title>ADD NEW STAND-UP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="form-group">
                <label>NAME YOUR STAND-UP:</label>
                <input type="text" required name="dailyTemplateName" className="form-control" value={this.props.MyStandupStore.newDailyStandupDTO.dailyTemplateName} aria-describedby="emailHelp" placeholder="Type name of stand-up" onChange={(e) => this.onChange(e)} />
              </div>
              <div className="form-group">
                <label>QUESTIONS TEMPLATE FOR THIS TEAM:</label>
                <Select
                  options={optionsTemplateList}
                  searchable={true}
                  clearable={false}
                  name='leaveTypeSelect'
                  value={this.props.MyStandupStore.newDailyStandupDTO.questionsTemplateName}
                  placeholder={"Please select template"}
                  onChange={e => this.onHandleChangeTemplateSelect(e)}
                  />                
              </div>  
              <div className="form-group">
                <label>FREQUENCY:</label>
                <Select
                  options={optionsPeriod}
                  searchable={true}
                  clearable={false}
                  name='leaveTypeSelect'
                  value={this.props.MyStandupStore.newDailyStandupDTO.period}
                  placeholder={"Please select frequency"}
                  onChange={e => this.onHandleChangePeriodSelect(e)}
                  />    
              </div>
              <div className="form-group">
                <label>REMIND TIME:</label>
                  <MDBTimePicker id="timePicker" label="" hours={8} minutes={0} hoursFormat={24} getValue={this.setTimeRemindValue} onChange={e => this.onChange(e)} />
              </div>
              <div className="form-group">
                <label>REMIND MESSAGE:</label>
                <input type="text" name="remindMessage" required className="form-control" value={this.props.MyStandupStore.newDailyStandupDTO.remindMessage} aria-describedby="emailHelp" placeholder="Type remind of message" onChange={(e) => this.onChange(e)} />
              </div>
              <div className="form-group">
                <label>REPEAT ON THESE DAYS:
                  <small id="emailHelp" className="form-text text-muted">
                    (Please select at least 1 day of the week)
                  </small>
                </label>     
                <div className="checkbox">
                    {this.renderweekDaysInsert()}
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
                  // value={value}
                  onChange={value => this.handleMultiChannelChange(value)}
                  multi={true}
                  
                  />     
            </div>
            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.handleClose()}>
               Close
            </Button>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </form>

      </Modal>

      </Card>

      
    )
  }
}

export default MyStandupsComponent;
