import React from 'react';
import axios from 'axios';
import LogIn from './LogIn';

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  // browserHistory,
  Redirect
  //Match
} from 'react-router-dom'

class SignUp extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      email: '',
      password: '',
      goToLogIn: false
    }
  }

  readyForLogIn(){
    this.setState({
      goToLogIn: true
    });
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

  onChange(event) {
    event.preventDefault();
    var state = this.state; // will even work with nested state

    // works but if i need to adjust size of form beyond two fields it wont work
    //event.target.placeholder === 'email' ? state.email = event.target.value : state.password = event.target.value

    if (event.target.placeholder === 'email') {
      state.email = event.target.value
      this.setState({
      email: state.email,
    })

    }
    if (event.target.placeholder === 'password') {
      state.password = event.target.value
      this.setState({
      password: state.password //Number(state.password) // password must be a string
    })
    }

  }


  render() {
    // console.log(localStorage, 'local storage')
    // console.log(this.props, ' prop')
    // console.log(window.sessionStorage)
    // console.log(location.pathname)
    // console.log(this.props.location, ' is this a refresh, or not')

    if(this.state.goToLogIn){
      return(
        <Router>
          <div>
            <h5>success please sign in</h5>
            <Redirect to="/LogIn" />
            <Route path="/LogIn" component={LogIn}/>
          </div>
        </Router>
        )    
    } else {
    return (
      <div className="App">
        Connected
        <form onSubmit={ this.sendInfo.bind(this) }>
          <input type='text' placeholder='email' className="inputEmail" onChange={ this.onChange.bind(this) } value={ this.state.email } required></input>
          <input type='text' placeholder='password' className="inputPasswird" onChange={ this.onChange.bind(this) }  value={ this.state.password } required></input>
          <input type='submit' value='Test'></input>
        </form>  
      </div>
    )    
    }
  }
}

export default SignUp;

// <input type='email' placeholder='email' className="inputEmail" onChange={ this.onChange.bind(this) } value={ this.state.email } required></input>
          // <input type='password' minLength='5' placeholder='password' className="inputPasswird" onChange={ this.onChange.bind(this) }  value={ this.state.password } required></input>