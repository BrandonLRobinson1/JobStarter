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

  SignUpField(event) {
    event.preventDefault();

    console.log('SignUpField working')

    const SignUp = {
     email: this.inputEmail.value,
     pw: this.inputPW.value
    }

    this.props.location.userSignUp.userSignUp( SignUp );
  }

  sendInfo(event){

    event.preventDefault();
    let that = this;

    axios.post( 'http://localhost:8888/signup',
      this.state
    )
    .then( data => {
      console.log('axios sent');
      // goal here is to make so if the name DOESNT exist then do move otherwise make them enter a new one
      that.readyForLogIn();
    } )
    .catch( err => {
      if (err) console.log( err );
      alert('username already in use');
      this.setState({
        email: '',
        password: ''
      });
      // reload page with err message ONCE reload is working <=========
    } );

  }

  render() {
    console.log(this.props, ' props on signup zaddyt')
    return (
      <div className="App">
        Sign In
        <form onSubmit={ (e)=>{this.SignUpField(e)} }>
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