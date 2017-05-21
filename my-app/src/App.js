import React from 'react';
import './App.css';
import axios from 'axios';

// import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import base from './firebase/base';
// import LogIn from './components/LogIn';
// import SignUp from './components/SignUp';

// import {
//   // BrowserRouter as Router,
//   // HashRouter as Router,
//   Route,
//   //Link,
//   NavLink,
//   // browserHistory
//   //Match
// } from 'react-router-dom'

class App extends React.Component {
  constructor(){
    super();

    // this.xx = this.xx.bind(this);
    this.testFireBase = this.testFireBase.bind(this);
    this.userSignUp = this.userSignUp.bind(this);
    this.userLogIn = this.userLogIn.bind(this);


    this.state = {
      loggedIn: false
      // userInfo: {}
    };
}

  componentWillMount(){
    this.ref = base.syncState(`${this.props.location.pathname}`, {
      context: this,
      state: 'loggedIn'
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  testFireBase(){
    console.log('sayyy whaaaa')
    this.setState({
      loggedIn: false
    })
  }

  userSignUp( userCredentials ){
    console.log(userCredentials);

    axios.post( 'http://localhost:8888/signup',
      userCredentials
    )
    .then( data => {
      console.log('user created');
      // goal here is to make so if the name DOESNT exist then do move otherwise make them enter a new one
    } )
    .catch( err => {
      if (err) console.log( err );
      alert('username already in use');
      // this.setState({
      //   email: '',
      //   password: ''
      // });
      // reload page with err message ONCE reload is working <=========
    } );
  }

  userLogIn( userCredentials ){
    console.log(userCredentials);

    axios.post( 'http://localhost:8888/login',
      userCredentials
    )
  .then( data => {
    console.log('login succesful');
     } )
  .catch( err => {
     if (err) console.log( err );
     alert('username or password incorrect');
    //  this.setState({
    //   email: '',
    //   password: ''
    // });
  });  
}

render() {

  return (
      <div className="container">
        <NavBar userSignUp={this.userSignUp} userLogIn={this.userLogIn}/>
        <Footer />
        <button onClick={this.testFireBase}>testFIAAAA</button>
      </div>
    )
  } 
}

export default App;

