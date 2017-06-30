import React from 'react';
import IndivJob from './IndivJob'

import {
Redirect,
// // BrowserRouter as Router,
// // HashRouter as Router,
Route,
Link,
Switch
// // NavLink,
// // BrowserHistory
// // Match
} from 'react-router-dom'

class Jobs extends React.Component {

  render(){
    console.log(this.props, ' job props')
    let job = this.props.obj;
    //if (this.state.all){
      return(
        <div className="App">
            <h3>{job.jobTitle}</h3>
            <span>{job.address2}</span>
            <div>{job.datePosted}</div>
            <p>{job.jobDesc}</p>
            <button onClick={ ()=>{this.props.grabItem( this ) } }>More Info - and style me like a button</button>
        </div>
      )  
  }
}

export default Jobs;
//<Redirect to={{
//              pathname: `/JobStarter/${job.company}`,
//              jobInfo: job
//            }}/>
//          <Route exact path={"/JobStarter/" + job.company} component={IndivJob}/>
//<button onClick={ ()=>{this.showJob() } }>More Info - and style me like a button</button>
