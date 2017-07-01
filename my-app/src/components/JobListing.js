import React from 'react';
import Jobs from './Jobs'
import jsonListings from '../openJobs/openJobs.json';
import IndivJob from './IndivJob';

import {
Redirect,
// // BrowserRouter as Router,
// // HashRouter as Router,
Route
// Link,
// Switch
// // NavLink,
// // BrowserHistory
// // Match
} from 'react-router-dom'

class JobListing extends React.Component {
  constructor(){
    super();
    this.state = {
      all: true,
      job: null
    }
    this.showJob = this.showJob.bind(this);
  }
  
  componentWillMount(){
    this.setState({
      all: true
    })
  }

  showJob(job){
    console.log('show job');
    let that = this;
    // console.log(this.props.obj);
    this.setState({
      all: false,
      // job: job
    })

    window.setTimeout(function(){ 
      that.setState({
        all: true,
      });
     }, 3000); // TEMP FIX, NEED TO FIND A WAY TO SEND THEM BACK
  }

  render(){
    //**** instead of using state i can use a variable and a bang operator here, reference wb16 for questions 

      if (this.state.all) {
        return(
          <div className="App">
            <h1>Something here, maybe a blurb and filter</h1>
            {jsonListings.map( (obj, index) => 
              <Jobs 
              obj={ obj }
              key={ index }
              grabItem={ this.showJob }
             />
            )}
          </div>
        )
      }
        else
      {
        return(
          <div>
            <Redirect 
            to={{
              pathname: `/JobStarter/xxx`,
              jobInfo: jsonListings
              }}/>
            <Route exact path={"/JobStarter/" + "xxx"} component={IndivJob}/>
          </div>
          )
      }
  }
}

export default JobListing;
        //  {/*<div>
        //     <IndivJob jobInfo={this.state.job}/>
      //   </div>*/}
                    // pathname: `/JobStarter/${job.company}`,
                                // <Route exact path={"/JobStarter/" + job.company} component={IndivJob}/>
                                