import React from 'react';
//import './App.css';
//import axios from 'axios';

import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';



import {
  BrowserRouter as Router,
  Route,
  Link,
  //Match
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      loggedin: false
    }
  }

  render() {

    if (this.state.loggedin === false) {

      return (
        <Router>
          <div className="App">
            <div className="App-header">
              <Link to="/LogIn">LogIn</Link>
              <Link to="/SignUp">SignUp</Link>
            </div>
            <Route exact path='/' component={Home}/>
            <Route path="/LogIn" component={LogIn}/>
            <Route exact path="/SignUp" component={SignUp}/>
          </div>
        </Router>
    ) 

    } else {
        console.log('new page for logged in')
      }
  }
}

export default App;

//import SignUp from './components/SignUp'
//<Link to="/">SignUp</Link>
//<Route exact path="/SignUp" component={SignUp}/>

