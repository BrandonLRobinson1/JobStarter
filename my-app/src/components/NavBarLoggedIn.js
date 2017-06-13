import React from 'react';
import JobListing from './JobListing';
import Home from './Home';

// import PropTypes from 'prop-types';
// import Home from './Home';

// import '../App.css';

import {
  NavLink,
  Route//,
  // Link
} from 'react-router-dom'

class NavBarLoggedIn extends React.Component{
  render(){
    console.log('hmm');
    return (
      <span>
         <ul className="nav">
          <li>

            <NavLink activeClassName='active' to={ { pathname: "/JobListing", listings:{listings:'hey'} } }> 
              change props but for now -JobListings-
            </NavLink>
          </li>
        </ul>
        <Route path="/JobListing" component={JobListing}/>
      </span>  
    )
  }
}

//this.props.location.testSwitch
// NavBarLoggedIn.propTypes = {
//   userSignUp: PropTypes.func.isRequired,
//   userLogIn: PropTypes.func.isRequired
// }
       // <NavLink activeClassName='active'  to="/JobListing/jobs">
         //     change props but for now -JobListings-
           // </NavLink>

// <NavLink activeClassName='active'  to={ { pathname: "/JobListing", listings:{listings:jsonListings} } }>
// <NavLink activeClassName='active' to="/JobListing" >
export default NavBarLoggedIn