import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import CommonUtil from "./../../../../common/CommonUtil"

class Motivation extends React.Component { 
  render() {
    var store = this.props.store;
    var arrayData = [];
    var arrayLabel = []
    for(let i=0; i<store.length; i++) arrayData.push(store[i].total)
    for(let i=0; i<store.length; i++) arrayLabel.push(CommonUtil.epochToDateTime(store[i].date, "dd/MM"))
    console.log(arrayLabel)

    console.log(store);
    const chart ={
      dataLine: {
        labels: arrayLabel,
        datasets: [
          {
            label: "Daily Standup Report",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "rgb(205, 130, 158)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(205, 130,1 58)",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: arrayData
          }
        ]
      }
    }

    return (
      <MDBContainer>
        <Line data={chart.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default Motivation;