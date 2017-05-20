import React from 'react';
import './App.css';
// import axios from 'axios';

// import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
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

    this.userSignUp = this.userSignUp.bind(this);
    this.userLogIn = this.userLogIn.bind(this);

    this.state = {
      // loggedIn: false,
      // userInfo: {}
    }

}

// logginInSuccessful(){
//   this.setState({
//     loggedin: true
//   })
// }

  userSignUp( userCredentials ){
    console.log(userCredentials)
  }

  userLogIn( userCredentials ){
    console.log(userCredentials);
  }

render() {

  return (
      <div className="container">
        <NavBar userSignUp={this.userSignUp} userLogIn={this.userLogIn}/>
        <Footer />
      </div>
    )
} 
}

export default App;

