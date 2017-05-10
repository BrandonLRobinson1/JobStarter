import React from 'react';
import HomePage from './HomePage';
import axios from 'axios';
import {
  BrowserRouter as Router,
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

  sendInfo(event){
    //alert('A email was submitted: ' + this.state.email);
    event.preventDefault();

    axios.post( 'http://localhost:8888/test123',
      this.state
    )
    .then( data => {
      console.log('axios sent');
      console.log(data);
    } )
    .catch( err => {
      console.log('caught');
      console.log(err);
    } );

      this.props.location.success.key();
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


    console.log(this.state)
  }


  render() {

    console.log(location.pathname)
    console.log(this.props.location, ' is this a refresh, or not')

    if(this.state.success){
      return(
        <Router history={browserHistory}>
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