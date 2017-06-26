import React from 'react';
// import './App.css';


class LogIn extends React.Component {
  constructor(){
    super();

    this.logInFields = this.logInFields.bind(this);
  }

  logInFields(event){
    event.preventDefault();
    console.log('LogInInfo working');
    //using refs in line 83 and 84 to grab inputs
    const LogInInfo = {
      email: this.inputEmail.value,
      pw: this.inputPw.value
    }

    this.props.location.userLogIn.userLogIn(LogInInfo);
    //using ref on line to reset fields
    this.LogInForm.reset();
  }

  render() {

    return (
      <div className="App form">
        Log In
        <form className="formation" ref={ (input)=>{this.LogInForm = input} } onSubmit={ (e)=>{this.logInFields(e)} } >
          <div className="input" >
            <input type='text' placeholder='email' className="inputEmail" ref={ (input) => {this.inputEmail = input} } required></input>
          </div>
          <div className="input" >
            <input type='text' placeholder='password' className="inputPasswird"  ref={ (input) => {this.inputPw = input} } required></input>
          </div>
          <div className="input" >
            <input type='submit' value='Log In'></input>
          </div>
        </form>  
      </div>
    )    
  }
}

export default LogIn;

// final form credentials
// <input type='email' placeholder='email' className="inputEmail"  required></input>
// <input type='password' placeholder='password' className="inputPasswird" required></input>