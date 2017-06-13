import React from 'react';

class JobListing extends React.Component {
  constructor(){
    super();
  }

  render(){
  console.log(this.props, 'listing test')
    return(
      <div className="App">
        <h3>Job title</h3>
        <div>area</div>
        <p>job desc</p>
        <div>date</div>
        <button>apply</button>
      </div>
      )
  }
}

export default JobListing;