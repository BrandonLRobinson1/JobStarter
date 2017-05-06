import React from 'react';
//import './App.css';
import axios from 'axios';

import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';



import {
  BrowserRouter as Router,
  Route,
  //Link,
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

  sendInfo(){
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

      return (
        <Router>
          <div className="App">
            <Route path="/LogIn" state={this.state} component={LogIn}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route exact path='/' component={Home}/>
          </div>
        </Router>
    ) 

    } 
  }

export default App;

// return (
//         <Router>
//           <div className="App">
//             <div className="App-header">
//               <Link  to="/LogIn">LogIn</Link>
//               <Link  to="/SignUp">SignUp</Link>
//             </div>
//             <Route path="/LogIn" component={LogIn}/>
//             <Route path="/SignUp" component={SignUp}/>
//             <Route exact path='/' component={Home}/>
//           </div>
//         </Router>
//     ) 

//import SignUp from './components/SignUp'
//<Link to="/">SignUp</Link>
//<Route exact path="/SignUp" component={SignUp}/>

