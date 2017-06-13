import React from 'react';
import JobListing from './JobListing';

// import json from 'file.json';
// import json from 'json-loader!file.json';
import jobListings from '../openJobs/openJobs.json';

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
    return (
      <span>
         <ul className="nav">
          <li>
            <NavLink activeClassName='active'  to={ { pathname: "/JobListing", listings:{listings:jobListings} } }>
              change props but for now -JobListings-
            </NavLink>
          </li>
        </ul>
        <Route path="/JobListing" component={JobListing}/>
      </span>  
    )
  }
}

// NavBarLoggedIn.propTypes = {
//   userSignUp: PropTypes.func.isRequired,
//   userLogIn: PropTypes.func.isRequired
// }

export default NavBarLoggedIn