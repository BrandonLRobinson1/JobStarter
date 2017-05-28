import React from 'react';
//import { Jumbotron,HelpBlock, Panel, FormGroup, Radio, Checkbox, ControlLabel, Button, FormControl} from 'react-bootstrap';
// import Welcome from './Welcome';
// import '../App.css';

class SignUpForm extends React.Component{
  constructor(){
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event){

    event.preventDefault();

    // let formInfo = {
    //   name: this.fullName.value,
    //   address: this.street1.value,
    //   address2: this.street2.value
    // };


    let formInfo = {
      name: this.fullName.value,
      address: this.street1.value,
      address2: this.street2.value,
      relocation: this.relocation.value,
      age: this.age.value,
      phone: this.PhoneNumber.value,
      resume: "resume would go here", //this.resume.value, -> also no need for grid fs as files are very small
      coverLetter: this.coverletter.value,
      linkedIn: this.linkedInlink.value,
      gitHub: this.githublink.value,
      authorized: this.authorized.value,
      disability: this.disability.value
    };

    this.props.stateData( formInfo );

    this.SignUpForm.reset();
  }


  render(){

    return (
      <div className="App">

      <h1>looks like this is your first time, lets get you hired</h1>
      <h4>youll only have to do this once (although you can always edit)</h4>
      <form className="formation" onSubmit={this.handleSubmit} ref={ (input)=>{this.SignUpForm = input}}>
        <div className="input" >
          <input type='text' placeholder='Full Name' className="mainForm" ref={ (input) => { this.fullName = input } } required></input>
        </div>
        <div className="input">
          <input type='text' placeholder='Street (Apt #)' className="mainForm" ref={ (input) => { this.street1 = input } } required></input>
        </div>
        <div className="input">
          <input type='text' placeholder='City State Zip' className="mainForm" ref={ (input) => { this.street2 = input } } required></input>
        </div>
        <div className="input">
          Are you willing to relocate?
          <select type='text' placeholder='Relocation' className="mainForm"  ref={ (input) => { this.relocation = input } } required>
            <option>Select one--</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="input">
          <input type='tel' placeholder='Age' className="mainForm" min="18" max="120" ref={ (input) => { this.age = input } } required></input>
        </div>

        {/*fix meeeeee*/}
        <div className="input">
          <input type='number' placeholder='PhoneNumber' className="mainForm" minLength="10" maxLength="10" ref={ (input) => { this.PhoneNumber = input } } required></input>
        </div>
          
        <div className="input">
          <input type='file' accept="pdf"placeholder='Resume' className="mainForm" ref={ (input) => { this.resume = input } } required></input>
        </div>
        <div className="input">
          <textarea type='text' placeholder='coverletter' className="coverletter" ref={ (input) => { this.coverletter = input } } required></textarea>
        </div>
        <div className="input">
          <input type='url' placeholder='linkedIn link' className="mainForm" ref={ (input) => { this.linkedInlink = input } }></input>
        </div>
        <div className="input">
          <input type='url' placeholder='github link' className="mainForm" ref={ (input) => { this.githublink = input } }></input>
        </div>
        <div className="input">
          Are you authorized to work in the US?
          <select type='text' placeholder='Authorized to work in the US' className="mainForm" ref={ (input) => { this.authorized = input } } required>
            <option>Select one</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="input">
          Do you have any Disabilities
          <select type='text' placeholder='Do you have any Disabilities' className="mainForm" ref={ (input) => { this.disability = input } } required>
            <option>Select one</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="input">
          <input type="submit" value="submit"></input>
        </div>
      </form>
      </div>
    )
  }

}
//http://www.sfasdf.com
export default SignUpForm;