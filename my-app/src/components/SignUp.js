import React from 'react';
import axios from 'axios';
// import LogIn from './LogIn';

import {
  // BrowserRouter as Router,
  // HashRouter as Router,
  // Route,
  // browserHistory,
  // Redirect
  //Match
} from 'react-router-dom'

class SignUp extends React.Component {

  SignUpFields(event) {
    event.preventDefault();

    console.log('SignUpField working')
    //using refs on line 62 and 63 to capture inputs
    const SignUp = {
     email: this.inputEmail.value,
     pw: this.inputPW.value
    }

    this.props.location.userSignUp.userSignUp( SignUp );
    //using ref on line 61 to reset input
    this.SignUpForm.reset();
  }

  // sendInfo(event){

  //   event.preventDefault();
  //   let that = this;

  //   axios.post( 'http://localhost:8888/signup',
  //     this.state
  //   )
  //   .then( data => {
  //     console.log('axios sent');
  //     // goal here is to make so if the name DOESNT exist then do move otherwise make them enter a new one
  //     that.readyForLogIn();
  //   } )
  //   .catch( err => {
  //     if (err) console.log( err );
  //     // alert('username already in use');
  //     this.setState({
  //       email: '',
  //       password: ''
  //     });
  //     // reload page with err message ONCE reload is working <=========
  //   } );

  // }

  render() {
    console.log(this.props, ' props on signup zaddyt')
    return (
      <div className="App">
        Sign In
        <form ref={ (input)=>{this.SignUpForm = input}} onSubmit={ (e)=>{this.SignUpFields(e)} }>
          <input type='text' placeholder='email' className="inputEmail" ref={ (input) => { this.inputEmail = input } } required></input>
          <input type='password' placeholder='password' className="inputPasswird" ref={ (input) => { this.inputPW = input } } required></input>
          <input type='submit' value='Test'></input>
        </form>  
      </div>
    )    
  }
}

export default SignUp;

// <input type='email' placeholder='email' className="inputEmail" ></input>
// <input type='password' minLength='5' placeholder='password' className="inputPasswird" required></input>