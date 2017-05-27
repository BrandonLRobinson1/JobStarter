import React from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import PropTypes from 'prop-types';

// import '../App.css';

import {
  NavLink,
  Route,
  Link
} from 'react-router-dom'

class NavBar extends React.Component{
  render(){
    return (
      <span>
         <ul className="nav">
         <li>
            <Link  to="/" exact>
              Logo Icon
            </Link>
          </li>
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
        <Route path="/" component={Home}/>
      </span>  
    )
  }
}

NavBar.propTypes = {
  userSignUp: PropTypes.func.isRequired,
  userLogIn: PropTypes.func.isRequired
}

export default NavBar