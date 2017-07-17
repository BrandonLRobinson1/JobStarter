import React from 'react';
import Jobs from './Jobs'
import jsonListings from '../openJobs/openJobs.json';
import IndivJob from './IndivJob';
import PropTypes from 'prop-types';


import {
Redirect,
// // BrowserRouter as Router,
// // HashRouter as Router,
Route,
Link//, 
// Switch
// // NavLink,
// // BrowserHistory
// // Match
} from 'react-router-dom'

class JobListing extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   all: true,
    //   job: null
    // }
    // this.showJob = this.showJob.bind(this);
  }
  
  // componentWillMount(){
  //   this.setState({
  //     all: true
  //   })
  // }

  // showJob(job){
  //   console.log(this, ' what is this')
  //   console.log('show job');
  //   let that = this;
  //   // console.log(this.props.obj);
  //   this.setState({
  //     all: false,
  //     // job: job
  //   })
  //   console.log(this.state.all, ' alls state is')
  //   window.setTimeout(function(){ 
  //     that.setState({
  //       all: true,
  //     });
  //    }, 5000); // TEMP FIX, NEED TO FIND A WAY TO SEND THEM BACK
  // }

  render(){
    //**** instead of using state i can use a variable and a bang operator here, reference wb16 for questions 
      
    // ============> maybe should render two components
        console.log(this, ' need to pass down extract info from joblisting to jobs')
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

}

export default JobListing;

JobListing.propTypes = {
  extractInfo: PropTypes.func.isRequired
}


        //  {/*<div>
        //     <IndivJob jobInfo={this.state.job}/>
      //   </div>*/}
                    // pathname: `/JobStarter/${job.company}`,
                                // <Route exact path={"/JobStarter/" + job.company} component={IndivJob}/>
                            
//            <Route exact path={`${this.props.match.path}/hi`} component={IndivJob}/>
