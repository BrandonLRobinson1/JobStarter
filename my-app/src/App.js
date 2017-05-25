import React from 'react';
import './App.css';
import axios from 'axios';

// import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome'
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
    // console.log('something changed')
    // console.log({nextProps, nextState});
    // localStorage.setItem(`yo`, !this.state.loggedIn);

    // notes - can only store stings or numbers in the local storage so stringify
    
    localStorage.setItem(`${this.props.location.pathname}`, JSON.stringify(nextState.loggedIn));
  }

  // a test that firebase is working
  testFireBase(){
    console.log('sayyy whaaaa')
    this.setState({
      loggedIn: !this.state.loggedIn
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
    const stateDuplicate = this.state.loggedIn;
    this.setState({
      loggedIn: true
    });
    //set state and trigger a new render
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
    if (!this.state.loggedIn){
      return (
          <div className="container">
            <NavBar userSignUp={this.userSignUp} userLogIn={this.userLogIn}/>
            <Footer />
            <button onClick={this.testFireBase}>testFIAAAA</button>
          </div>
        )
    } else {
      return (
        <div className="container">
          <Welcome />
        </div>
        )
    }
    
  } 
}

export default App;

