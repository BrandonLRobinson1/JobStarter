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

//on click redirect
let job = ( ) => (
  <div>
    {/*<h1>{this.props.titlethatneedstobenamed/specified}</h1>*/}
    <h1>yoyo</h1>
  </div>
)

class Jobs extends React.Component {
  constructor(){
    super();
    this.state = {
      info: null
    };

    // let info = null;
    // this.extractInfo = this.extractInfo.bind(this);
  }

  // componentWillMount(){
  //     this.state.info = null;
  // }

  extractInfo( theJob ){
    console.log( theJob, ' the job' )
    this.setState({
      info: theJob
    });
    console.log(this.state.info)
  }
  
  render(){
   // console.log(this.props, ' job props')
    let job = this.props.obj;

    //if (this.state.all){
      return(
        <div className="App">
            <h3>{job.jobTitle}</h3>
            <span>{job.address2}</span>
            <div>{job.datePosted}</div>
            <p>{job.jobDesc}</p>
            <button onClick={ ()=>{this.extractInfo( job.jobTitle ) } }>More Info - and style me like a button</button>
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
