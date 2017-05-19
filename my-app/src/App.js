import React from 'react';
// import './App.css';
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
  constructor(props){
    super(props);
    this.state = {
      loginCredentials: {},
      personalInfo: {}
      //should pass the state back to main APP when signed in so you can personalize and add to ux, also reload would automatically work i believe
    }
}

// logginInSuccessful(){
//   this.setState({
//     loggedin: true
//   })
// }

render() {

  return (
      <div className="container">
        <NavBar />
        <Footer />
      </div>
    )
} 
}

export default App;

//        <LogIn value={this.state.loggedin} verified={this.logginInSuccessful.bind(this)}/>
          // <NavLink activeClassName='active' to={{pathname:"/LogIn", state:{ fromDashboard: this.state.loggedin } }} >
// , success: {key1:this.logginInSuccessful.bind(this)}
