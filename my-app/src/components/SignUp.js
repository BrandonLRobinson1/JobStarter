import React from 'react';
import axios from 'axios';
import LogIn from './LogIn';

import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Redirect
  //Match
} from 'react-router-dom'

// import axios from 'axios';

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
    //alert('A email was submitted: ' + this.state.email);
    event.preventDefault();
    let that = this;

    axios.post( 'http://localhost:8888/signup',
      this.state
    )
    .then( data => {
      console.log('axios sent');
      console.log(data, ' green light dataaaa');
      // goal here is to make so if the name DOESNT exist then do move otherwise make them enter a new one
      that.readyForLogIn()
    } )
    .catch( err => {
      console.log(' caught');
      console.log(err);
      alert('username already in use')
      this.setState({
        email: '',
        password: ''
      })
      // reload page with err message ONCE reload is working <=========
    } );

      //this.readyForLogIn();  // <==== need to move inside axios then

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
        <Router history={browserHistory}>
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