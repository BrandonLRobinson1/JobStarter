import React from 'react';
import './App.css';
import axios from 'axios';

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

    // this.xx = this.xx.bind(this);
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
    console.log(userCredentials);

    axios.post( 'http://localhost:8888/signup',
      userCredentials
    )
    .then( data => {
      console.log('axios sent');
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

  // sendInfo(event){


    // axios.post( 'http://localhost:8888/signup',
    //   this.state
    // )
    // .then( data => {
    //   console.log('axios sent');
    //   // goal here is to make so if the name DOESNT exist then do move otherwise make them enter a new one
    //   that.readyForLogIn();
    // } )
    // .catch( err => {
    //   if (err) console.log( err );
    //   alert('username already in use');
    //   this.setState({
    //     email: '',
    //     password: ''
    //   });
    //   // reload page with err message ONCE reload is working <=========
    // } );

  // }

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

//   LogInInfo(event){
//   //alert('A email was submitted: ' + this.state.email);
//   event.preventDefault();

//   axios.post( 'http://localhost:8888/login',
//     this.state
//   )
//   .then( data => {
//     console.log('login succesful');
//     console.log(data);
//     this.props.location.success.key();
//   } )
//   .catch( err => {
//      if (err) console.log( err );
//      alert('username or password incorrect');
//      this.setState({
//       email: '',
//       password: ''
//     });
//   });  
// }

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

