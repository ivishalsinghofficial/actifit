import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel,  InputGroup} from 'react-bootstrap';
import './Feedback.css';


var firebase = require('firebase');
var uuid = require('uuid');

var config = {
   apiKey: "put yours",
   authDomain: "put yours",
   databaseURL: "put yours",
   projectId: "put yours",
   storageBucket: "put yours",
   messagingSenderId: "put yours"
 };
 firebase.initializeApp(config);




class Feedback extends Component {
  constructor(props){
    super(props);
    this.state = {
      uid: uuid.v1(),
      a_steemhandle:'',
      b_email:'',
      c_application:'',
      d_issue:'',
      e_subject:'',
      f_desc:'',
      ifSubmitted: true

    };
    this.HandleEvent = this.HandleEvent.bind(this);
    this.feedbackSubmit = this.feedbackSubmit.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  getValidationState(name){
    const len = this.state[name].length;
    if(len>0) return 'success';
    else if(len<1) return 'error';
    else return null;
  }

  HandleEvent(name){
    return (evt) => this.setState({[name]: evt.target.value});
  }


feedbackSubmit(event){
  event.preventDefault();
  firebase.database().ref('actifitsupport/'+this.state.uid).set({
    a_steemhandle: this.state.a_steemhandle,
    b_email: this.state.b_email,
    c_application: this.state.c_application,
    d_issue: this.state.d_issue,
    e_subject: this.state.e_subject,
    f_desc: this.state.f_desc
  });

};






    render() {
        return (
          <div>

          <center>
          <h4 className="alert">&#9746; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Please fill all the details or the feedback will not be get captured!</h4><br />
          <form onSubmit={this.feedbackSubmit}>



            <FormGroup
            controlId="formBasicText"
          validationState={this.getValidationState("a_steemhandle")}>

            <ControlLabel style={{font: "40px"}}>Enter Steemit Handle:</ControlLabel>
             <InputGroup style={{width:"60%"}}>
               <InputGroup.Addon>@</InputGroup.Addon>
               <FormControl  type="text" value={this.state.a_steemhandle} onChange={this.HandleEvent("a_steemhandle")} />
             </InputGroup>

             <FormControl.Feedback />

            </FormGroup>
            <FormGroup controlId="basicmail" validationState={this.getValidationState("b_email")}>
            <ControlLabel style={{font: "40px"}}>Enter Your Email: </ControlLabel>
            <FormControl style={{width:"60%"}} type="email" value={this.state.b_email} onChange={this.HandleEvent("b_email")}/>
            <FormControl.Feedback />
            </FormGroup>

            <ControlLabel className="aptype">Select Application Type : </ControlLabel><br/>
            <input type="radio" name="c_application" value="Android" className="form-radio" onChange={this.HandleEvent("c_application")}/><ControlLabel className="ControlLabelrad">Android</ControlLabel>
            <input type="radio" name="c_application" value="iOS" className="form-radio" onChange={this.HandleEvent("c_application")}/><ControlLabel className="ControlLabelrad">iOS</ControlLabel>
            <input type="radio" name="c_application" value="Website" className="form-radio" onChange={this.HandleEvent("c_application")}/><ControlLabel className="ControlLabelrad">Website</ControlLabel>
            <input type="radio" name="c_application" value="Wearables" className="form-radio" onChange={this.HandleEvent("c_application")}/><ControlLabel className="ControlLabelrad">Wearables</ControlLabel><br/><br/>

            <ControlLabel className="aptype">Select issue Type : </ControlLabel><br/>
            <input type="radio" name="d_issue" value="bug" className="form-radio" onChange={this.HandleEvent("d_issue")}/><ControlLabel className="ControlLabelrad">Bugs</ControlLabel>
            <input type="radio" name="d_issue" value="tokens" className="form-radio" onChange={this.HandleEvent("d_issue")}/><ControlLabel className="ControlLabelrad">Tokens</ControlLabel>
            <input type="radio" name="d_issue" value="Activity" className="form-radio" onChange={this.HandleEvent("d_issue")}/><ControlLabel className="ControlLabelrad">Activity</ControlLabel>
            <input type="radio" name="d_issue" value="others" className="form-radio" onChange={this.HandleEvent("d_issue")}/><ControlLabel className="ControlLabelrad">Others</ControlLabel><br/><br/><br/>


            <FormGroup controlId="subject" validationState={this.getValidationState("e_subject")}>
            <ControlLabel style={{font: "40px"}}>The Subject of the Issue: </ControlLabel>
            <FormControl style={{width:"60%"}} type="text" value={this.state.e_subject} onChange={this.HandleEvent("e_subject")}/>
            <FormControl.Feedback/>
            </FormGroup>

            <FormGroup controlId="desc" validationState={this.getValidationState("f_desc")}>
            <ControlLabel style={{font: "40px"}}>Description of the Issue: </ControlLabel><br />
            <textarea style={{width: "60%"}} name="f_desc" onChange={this.HandleEvent("f_desc")} value={this.state.desc} rows="6"/>
            </FormGroup>

            <input type="submit" value="Submit" className="BUTTON_ERI" onClick={() => {alert("Submitted!")}} />




            </form>
            </center>

          </div>
        );
    }
}

export default Feedback;
