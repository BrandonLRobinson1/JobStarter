import React from 'react';
// import '../App.css';

class SignUp extends React.Component {
  constructor(){
    super();

    this.SignUpFields = this.signUpFields.bind(this);
  }

  signUpFields(event) {
    event.preventDefault();

    console.log('SignUpField working')
    //using refs on line 62 and 63 to capture inputs
    const SignUp = {
     email: this.inputEmail.value,
     pw: this.inputPW.value
    }

    this.props.location.userSignUp.userSignUp( SignUp );
    //using ref on line 61 to reset input
    this.SignUpForm.reset();
  }


  render() {
    console.log(this.props, ' props on signup zaddyt')
    return (
      <div className="App form">
        Sign In
        <form ref={ (input)=>{this.SignUpForm = input}} onSubmit={ (e)=>{this.signUpFields(e)} }>
          <input type='text' placeholder='email' className="inputEmail" ref={ (input) => { this.inputEmail = input } } required></input>
          <input type='password' placeholder='password' className="inputPasswird" ref={ (input) => { this.inputPW = input } } required></input>
          <input type='submit' value='Test'></input>
        </form>  
      </div>
    )    
  }
}

export default SignUp;
// final form credentials
// <input type='email' placeholder='email' className="inputEmail" ></input>
// <input type='password' minLength='5' placeholder='password' className="inputPasswird" required></input>