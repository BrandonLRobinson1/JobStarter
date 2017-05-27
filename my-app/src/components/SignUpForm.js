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
    console.log({
      name: this.fullName.value,
      address: this.street1.value,
      address2: this.street2.value,
      relocation: this.relocation.value,
      age: this.age.value,
      phone: this.PhoneNumber.value,
      resume: this.resume.value,
      coverLetter: this.coverletter.value,
      linkedIn: this.linkedInlink.value,
      gitHub: this.githublink.value,
      authorized: this.authorized.value,
      disability: this.disability.value
    });
    this.SignUpForm.reset();
  }


  render(){
    console.log(this.props)
    return (
      <div className="App">

      <h1>Welcome First Timer</h1>
      <h4>youll only have to do this once (although you can always edit)</h4>
      <form onSubmit={this.handleSubmit} ref={ (input)=>{this.SignUpForm = input}}>

        <input type='text' placeholder='Full Name' className="mainForm" ref={ (input) => { this.fullName = input } } required></input>
        <input type='text' placeholder='Street (Apt #)' className="mainForm" ref={ (input) => { this.street1 = input } } required></input>
        <input type='number' placeholder='City State Zip' className="mainForm" ref={ (input) => { this.street2 = input } } required></input>
        <select type='text' placeholder='Relocation' className="mainForm" ref={ (input) => { this.relocation = input } } required>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input type='number' placeholder='Age' className="mainForm" min="18" max="120" ref={ (input) => { this.age = input } } required></input>
        <input type='number' placeholder='PhoneNumber' className="mainForm" minLength="10" maxLength="10" ref={ (input) => { this.PhoneNumber = input } } required></input>
        <textarea type='text' placeholder='Resume' className="mainForm" ref={ (input) => { this.resume = input } } required></textarea>
        <textarea type='text' placeholder='coverletter' className="coverletter" ref={ (input) => { this.coverletter = input } } required></textarea>
        <input type='url' placeholder='linkedIn link' className="mainForm" ref={ (input) => { this.linkedInlink = input } } required></input>
        <input type='url' placeholder='github link' className="mainForm" ref={ (input) => { this.githublink = input } } required></input>
        <select type='text' name='tesssty' placeholder='Authorized to work in the US' className="mainForm" ref={ (input) => { this.authorized = input } } required>
          <option>Yes</option>
          <option>No</option>
        </select>
        <select type='text' placeholder='Do you have any Disability' className="mainForm" ref={ (input) => { this.disability = input } } required>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input type="submit" value="submit"></input>
      </form>
      </div>
    )
  }

}

export default SignUpForm;