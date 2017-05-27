import React from 'react';
import './App.css';
import axios from 'axios';
import PropTypes from 'prop-types';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SignUpForm from './components/SignUpForm'

import TestThatWillBeDelete from './components/Welcome';

import base from './firebase/base';


import {
Redirect,
// // BrowserRouter as Router,
// // HashRouter as Router,
Route
// Link,
// // NavLink,
// // BrowserHistory
// // Match
} from 'react-router-dom'

class App extends React.Component {
  constructor(){
    super();

    // this.xx = this.xx.bind(this);
    this.stateData = this.stateData.bind(this);
    this.testFireBase = this.testFireBase.bind(this);
    this.userSignUp = this.userSignUp.bind(this);
    this.userLogIn = this.userLogIn.bind(this);

    this.state = {
      loggedIn: false,
      newSignUp: false,
      userInfo: {
        name: '',
        address1: '',
        address2: '',
        relocation: '',
        age: '',
        phone: '',
        resume: '',
        coverLetter: '',
        linkedIn: '',
        gitHub: '',
        authorized: '',
        disability: '',
        gender: '',
        race: '',
        veteran: '',
        linkToVideo: ''
      }
    };
  }

  // runs before things mount/are rendered, sync with firebase
  componentWillMount(){
    //check firebase
    this.ref = base.syncState(`${this.props.location.pathname}/loggedIn`, {
      context: this,
      state: 'loggedIn'
    });

    // check if there is anything in localStorage
    const locatStorageRef = localStorage.getItem(`${this.props.location.pathname}`);
    // update state
    locatStorageRef ? this.setState({ loggedIn: JSON.parse(locatStorageRef)}) : console.log('nothing in local storage');
  }

  // unsync with firebase when unmounting
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  // runs whenever props or state changes
  // arguments are updated props and updated state
  componentWillUpdate(nextProps, nextState){
    //test componentWillUpdate activates on change
    // console.log({nextProps, nextState});

    // notes - can only store stings or numbers in the local storage so stringify
    localStorage.setItem(`${this.props.location.pathname}`, JSON.stringify(nextState.loggedIn));
  }

  // a test that firebase is working
  testFireBase() {
    console.log('sayyy whaaaa', this.state.loggedIn)
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  //handles new users sign up
  userSignUp( userCredentials ){
    console.log(userCredentials);

    axios.post( 'http://localhost:8888/signup',
      userCredentials
    )
    .then( data => {
      console.log('user created');
      this.setState({
        newSignUp: true
      });
    } )
    .catch( err => {
      // goal here is to make so if the name DOESNT exist then do move otherwise make them enter a new one
      if (err) console.log( err );
      alert('username already in use');
    } );
  }

  // logs user in, sets cookie on back end
  userLogIn( userCredentials ){

    axios.post( 'http://localhost:8888/login',
      userCredentials
    )
  .then( data => {
    console.log('login succesful');
    // const stateDuplicate = this.state.loggedIn;
    this.setState({
      newSignUp: false,
      loggedIn: true
    });
     } )
  .catch( err => {
     if (err) console.log( err );
     alert('username or password incorrect');
  });  
}

stateData ( formInfo ){
  console.log(formInfo)
}


render() {
    let newSignUp = this.state.newSignUp;
    let loggedIn = this.state.loggedIn;
    let namePath = this.state.name || 'test';

    // paths
    //if loggedin AND newsignup are false render original home
    //if new sign up is true, render info gather, then route real home by setting logged in to true and signed in to false
    // if logged in is true, render new everythign including nav

    if(!loggedIn && !newSignUp) {
      return (
          <div className="container">
            <NavBar userSignUp={this.userSignUp} userLogIn={this.userLogIn}/>
            <Footer />
            <button onClick={this.testFireBase}>testFIAAAA</button>
          </div>
        )
    }

    if (!loggedIn && newSignUp){
      return (
        <div className="container">
          {/* <Redirect to={{
            pathname: '/SignUpForm/xx',
            userInfo: 'function that updates state in a huge way'
          }}/> */}
          <SignUpForm stateData={this.stateData}/>
        </div>
      )
     } 

    if (loggedIn && !newSignUp){
      return (
        <div>
          <h1>Redirect from above, or just render completley new components which is the same thing</h1>
        </div>
      )
    }
  } 
}

App.contextTypes = {
 router: PropTypes.object
}

export default App;