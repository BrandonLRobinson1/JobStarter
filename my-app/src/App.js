import React from 'react';
import './App.css';
// import axios from 'axios';

import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

import {
  BrowserRouter as Router,
  Route,
  //Link,
  NavLink,
  browserHistory
  //Match
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedin: false
      //should pass the state back to main APP when signed in so you can personalize and add to ux, also reload would automatically work i believe
    }
}

logginInSuccessful(){
  this.setState({
    loggedin: true
  })
}

render() {

if (this.state.loggedin){
    return(
      <div>luckyyyyy</div>
      )
  } else {
  return (
    <Router history={browserHistory}>
      <div className="container">
        <ul className="nav">
          <li>
            <NavLink activeClassName='active' to="/SignUp">
              Sign Up
            </NavLink>
          </li>
          <li>
          <NavLink activeClassName='active' to={ { pathname: "/LogIn", state:{ fromDashboard: this.state.loggedin }, success:{ key: this.logginInSuccessful.bind(this) } } } >
              Log In
          </NavLink>
          </li>
        </ul>
        <Route path="/LogIn"  component={LogIn}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route exact path='/' component={Home}/>
        <footer>
          <h1>footer thing</h1>
        </footer>
      </div>
    </Router>
    )
  }
} 
}


export default App;

//        <LogIn value={this.state.loggedin} verified={this.logginInSuccessful.bind(this)}/>
          // <NavLink activeClassName='active' to={{pathname:"/LogIn", state:{ fromDashboard: this.state.loggedin } }} >
// , success: {key1:this.logginInSuccessful.bind(this)}
