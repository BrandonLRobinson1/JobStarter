import React from 'react';
import axios from 'axios';

// import Welcome from './Welcome';
// import '../App.css';

class SignUpForm extends React.Component{
    
  render(){
    console.log(this.props)
    return (
      <div className="App">
      <h3>form</h3>
      <form>
        <input type='text' placeholder='Full Name' className="mainForm" ref={ (input) => { this.fullName = input } } required></input>
        <input type='text' placeholder='Street (Apt #)' className="mainForm" ref={ (input) => { this.street1 = input } } required></input>
        <input type='text' placeholder='City State Zip' className="mainForm" ref={ (input) => { this.street2 = input } } required></input>
        <select type='text' placeholder='Relocation' className="mainForm" ref={ (input) => { this.relocation = input } } required>
          <option>Yes</option>
          <option>No</option>
        </select>
        <input type='number' placeholder='Age' className="mainForm" ref={ (input) => { this.age = input } } required></input>
        <input type='number' placeholder='PhoneNumber' className="mainForm" ref={ (input) => { this.PhoneNumber = input } } required></input>
        <textarea type='text' placeholder='Resume' className="mainForm" ref={ (input) => { this.resume = input } } required></textarea>
        <textarea type='text' placeholder='coverletter' className="coverletter" ref={ (input) => { this.coverletter = input } } required></textarea>
        <input type='text' placeholder='linkedIn link' className="mainForm" ref={ (input) => { this.linkedInlink = input } } required></input>
        <input type='text' placeholder='github link' className="mainForm" ref={ (input) => { this.githublink = input } } required></input>
        <select type='text' placeholder='Authorized to work in the US' className="mainForm" ref={ (input) => { this.authorized = input } } required>
          <option>Yes</option>
          <option>No</option>
        </select>
        <select type='text' placeholder='Do you have any Disability' className="mainForm" ref={ (input) => { this.disability = input } } required>
          <option>Yes</option>
          <option>No</option>
        </select>
      </form>
      </div>
    )
  }

}

export default SignUpForm;