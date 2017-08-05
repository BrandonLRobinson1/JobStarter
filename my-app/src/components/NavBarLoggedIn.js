import React from 'react';
import JobListing from './JobListing'
import IndivJob from './IndivJob'
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
  constructor(){
    super()
    
    this.extractInfo = this.extractInfo.bind(this);
    
    this.state = {
      jobDesc: null
    }

  }

  extractInfo( theJob ){
    console.log( theJob, ' the job' )
    this.setState({
      jobDesc: theJob
    });
    console.log(this.state.jobDesc)
  }

  render(){
    // console.log('navylogged in hmm');
    console.log(this.extractInfo, ' extract info on loggedinnavy')
    return (
      <span>
        <ul className="nav">
          <li>
          =====> figure out why i cant pass extract info down
            <NavLink activeClassName='active' to={ { pathname: "/JobListing", extractInfo:{ extractInfo:this.extractInfo } } }> 
              change props but for now -JobListings-
            </NavLink>
          </li>
        </ul>
        <Route exact path="/JobListing" component={JobListing}/>
        <Route path="/JobListing/" component={IndivJob}/>
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

// <NavLink activeClassName='active'  to={ { pathname: "/JobListing", extractInfo:{extractInfo:this.extractInfo} } }>
// <NavLink activeClassName='active' to={ { pathname: "/JobListing", extractInfo:{ extractInfo:this.extractInfo } } }> 