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
  // constructor(){
  //   super();
  //   this.state = {
  //     all: true
  //   }
  //   this.showJob = this.showJob.bind(this);
  // }
  
  // componentWillMount(){
  //   this.setState({
  //     all: true
  //   })
  // }

  // showJob(){
  //   console.log('show job');
  //   console.log(this.props.obj);
  //   this.setState({
  //     all: false
  //   })
  // }

  render(){
    console.log(this.props, ' job props')
    let job = this.props.obj;
    //if (this.state.all){
      return(
        <div className="App">
            <h3>{job.jobTitle}</h3>
            <span>{job.address2}</span>
            <p>{job.jobDesc}</p>
            <div>{job.datePosted}</div>

            <button onClick={ ()=>{this.props.grabItem( this ) } }>More Info - and style me like a button</button>




            <Link to={"/joe/1"}>More Info - and style me like a button</Link>
            <Route exact path={"/joe/1"} component={IndivJob}/>
        </div>
      )  
    // } 
    // else {
    //   return(
    //     <div className="App">
    //         <Redirect to={{
    //           pathname: "/JobStarter/1",
    //           jobInfo: job
    //         }}/>
    //       <Route path={"/JobStarter/1"} component={IndivJob}/>
    //     </div>
    //   )
    // }
  }
}

export default Jobs;

//<Redirect to={{
//              pathname: `/JobStarter/${job.company}`,
//              jobInfo: job
//            }}/>
//          <Route exact path={"/JobStarter/" + job.company} component={IndivJob}/>
//<button onClick={ ()=>{this.showJob() } }>More Info - and style me like a button</button>
