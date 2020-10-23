import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import CommonUtil from '../../../common/CommonUtil';
import {Card, Table, Button, Row} from 'react-bootstrap';
import Calendar from 'react-calendar'
import Motivation from './Charts/Motivation';
import DailyComplete from './Charts/DailyComplete';
import BlockerRowComponent from './BlockerRowComponent';


 @inject("SummaryStandupStore")
 @observer
class SummaryStandupComponent extends Component {
  constructor (props) {
    super (props);
    this.state = {
      date: this.props.date,
    };
    this.store=this.props.SummaryStandupStore;

  }
  onChange= (date) =>{
    this.store.setCurrentDate(date);
  }

  componentDidMount () {

    let date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    this.store.getBlockers(Math.floor(date.getTime() / 1000));
    this.store.getSummaryTotalReport(Math.floor(date.getTime() / 1000));
    this.store.getSummaryReport(Math.floor(date.getTime() / 1000));
  }

  onHandleRefresh () {}

  render () {
    const blockerRows = this.store.listBlockers.map((blocker, index) => {
      return <BlockerRowComponent key={index} blocker={blocker} />
    })
    var store = CommonUtil.convertMobxObjToJsonObj(this.store.listSummaryReport);
    var store2 = CommonUtil.convertMobxObjToJsonObj(this.store.SummaryStandUp);
    console.log(store2)
    return (

      <Card className="m-3">
        <Card.Header>
          <Row style={{justifyContent: 'space-between', display: 'flex'}}>
            <h2>Summary Daily Report</h2>
          </Row>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <Calendar style={{width: '100%', height: '100%'}} 
                          onChange={this.onChange} 
                          value={this.store.currentDate}/> 
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card pie-chart-example m-0">
                    <div className="card-header d-flex align-items-center">
                      <h4>Users who completed the daily</h4>
                    </div>
                    <div className="card-body">
                      <div className="chart-container">
                        <DailyComplete store={this.store.summaryTotal}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
              <div style={{width: '100%'}}>
                <div className="card line-chart-example m-3">
                  <div className="card-header d-flex align-items-center">
                    <h4>Team motivation metrics</h4>
                  </div>
                    <Motivation store={store}/>  
                </div>
              </div>
            </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="card pie-chart-example">
                  <div className="card-header d-flex align-items-center">
                    <h4>Total Blockers</h4>
                  </div>
                  {blockerRows}
                  
                </div>
            </div>
            
              
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default SummaryStandupComponent;
