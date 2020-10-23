import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class DailyComplete extends React.Component {  
  render() {
    var complete = this.props.store.numberOfCompleted;
    var uncomplete = this.props.store.numberOfUsers - this.props.store.numberOfCompleted; 
    const chart =  {
      dataPie: {
        labels: ["Complete", "Uncomplete"],
        datasets: [
          {
            data: [complete ,uncomplete],
            backgroundColor: [
              "#46BFBD",
              "#F7464A"
              
            ],
            hoverBackgroundColor: [
              "#5AD3D1",
              "#FF5A5E"
            ]
          }
        ]
      }
    }
    return (
      <MDBContainer>
        <Pie data={chart.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default DailyComplete;