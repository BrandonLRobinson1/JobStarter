import React from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
// import '../App.css';

import {
  NavLink,
  Route
} from 'react-router-dom'

class NavBar extends React.Component{
  render(){
    return (
      <span>
         <ul className="nav">
          <li>
            <NavLink activeClassName='active'  to={ { pathname: "/SignUp", userSignUp:{userSignUp:this.props.userSignUp} } }>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to={ { pathname: "/LogIn", userLogIn:{userLogIn:this.props.userLogIn} } } >
              Log In
            </NavLink>
          </li>
        </ul>
        <Route path="/LogIn"  component={LogIn}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route exact path='/' component={Home}/>
      </span>  
    )
  }
}

export default NavBar