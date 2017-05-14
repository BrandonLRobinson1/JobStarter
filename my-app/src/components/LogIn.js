import React from 'react';
import HomePage from './HomePage';
import Home from './Home.js'
import axios from 'axios';
// import app from '../../../server/server.js';
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Route,
  browserHistory,
  Redirect
  //Match
} from 'react-router-dom'

class LogIn extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      email: '',
      password: ''
    }
  }

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
    console.log(this.props)
    //console.log(location.pathname)
    //console.log(this.props.location, ' is this a refresh, or not')
    if(!this.props.location.success){
      return(
        <Router history={browserHistory}>
          <div>
            {console.log('def a work around, need figure out how to keep the state change persistent through a reload, or make this component not depend on the App.js component to render to homepage ==> also can make this a one page react file ')}
            <h5>Please Log In</h5>
            <Redirect to="/"/>
            <Route path="/Home"  component={Home}/>
          </div>
        </Router>
        )    
    }
    if(this.state.success){
      return(
        <Router>
          <div>
            <Redirect to="/Homepage" />
            <Route path="/HomePage"  component={HomePage}/>
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

export default LogIn;

// <input type='email' placeholder='email' className="inputEmail" onChange={ this.onChange.bind(this) } value={ this.state.email } required></input>
          // <input type='password' placeholder='password' className="inputPasswird" onChange={ this.onChange.bind(this) }  value={ this.state.password } required></input>