import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = ( ) => {
  return (
    <ul className ="nav">
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/SignUp">
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/LogIn">
          Log In
        </NavLink>
      </li>
    </ul>
    )
}

export default Nav;