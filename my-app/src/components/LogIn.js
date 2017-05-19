import React from 'react';
// import HomePage from './HomePage';
// import Home from './Home.js'
import axios from 'axios';
// import app from '../../../server/server.js';
import {
  // BrowserRouter as Router,
  // HashRouter as Router,
  // Route,
  // browserHistory,
  // Redirect
  //Match
} from 'react-router-dom'

class LogIn extends React.Component {

  // componentWillReceiveProps(){
  //   this.location.success.key = 
  // }

sendInfo(event){
  //alert('A email was submitted: ' + this.state.email);
  event.preventDefault();

  axios.post( 'http://localhost:8888/login',
    this.state
  )
  .then( data => {
    console.log('login succesful');
    console.log(data);
    this.props.location.success.key();
  } )
  .catch( err => {
     if (err) console.log( err );
     alert('username or password incorrect');
     this.setState({
      email: '',
      password: ''
    });
  });  
}

  // onChange(event) {
  //   event.preventDefault();
  //   var state = this.state; // will even work with nested state

  //   // works but if i need to adjust size of form beyond two fields it wont work
  //   //event.target.placeholder === 'email' ? state.email = event.target.value : state.password = event.target.value

  //   if (event.target.placeholder === 'email') {
  //     state.email = event.target.value
  //     this.setState({
  //     email: state.email,
  //   })

  //   }
  //   if (event.target.placeholder === 'password') {
  //     state.password = event.target.value
  //     this.setState({
  //     password: state.password //Number(state.password) // password must be a string
  //   })
  //   }

  // }


  render() {

    return (
      <div className="App">
        Log In
        <form onSubmit='hi'>
          <input type='text' placeholder='email' className="inputEmail" onChange='hi' value='hi' required></input>
          <input type='text' placeholder='password' className="inputPasswird" onChange='hi'  value='hi' required></input>
          <input type='submit' value='Test'></input>
        </form>  
      </div>
    )    
  }
}

export default LogIn;

// <input type='email' placeholder='email' className="inputEmail" onChange={ this.onChange.bind(this) } value={ this.state.email } required></input>
// <input type='password' placeholder='password' className="inputPasswird" onChange={ this.onChange.bind(this) }  value={ this.state.password } required></input>