import React from 'react';
import Jobs from './Jobs'
import jsonListings from '../openJobs/openJobs.json';
import IndivJob from './IndivJob'

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
      job: job
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
            <IndivJob jobInfo={this.state.job}/>
          </div>
          )
      }
  }
}

export default JobListing;