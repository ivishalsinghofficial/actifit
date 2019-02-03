import React, { Component } from 'react';
import steem from 'steem';
import './Voting.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



class Voting extends Component {

  constructor(props){
    super(props);
    this.state = {
      power: ''
    };

    this.getVP = this.getVP.bind(this);
  }
  componentDidMount(){
    this.getVP();
  }


  getVP(){
    var vpow;
    steem.api.getAccounts(["actifit"], (err, response) => {
    var secondsago = (new Date - new Date(response[0].last_vote_time + "Z")) / 1000;
    vpow = response[0].voting_power + (10000 * secondsago / 432000);
    vpow = Math.min(vpow / 100, 100).toFixed(2);
    console.log(vpow);
    this.setState({power: vpow});
  });

  }


  render() {
    return (
      <div>
      <center>
      <Progress width={250} type="circle" strokeWidth={4} percent={this.state.power}
      theme={{
        active:{
          color: '#fb112d',
          trailColor: '#ECF0F1'
        }
      }} /></center>
      <center><h3>As soon as the Voting power reaches 100% the voting cycle will begin.</h3><br />
      <h3>In case you don't receive an upvote please wait for 48 hours from the time of post "published" or contact moderators.</h3>
      </center>
      </div>
    );
  }
}

export default Voting;
