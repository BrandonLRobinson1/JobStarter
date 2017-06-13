import React from 'react';

class Jobs extends React.Component {

  render(){
    console.log(this.props, ' job props')
    let job = this.props.obj;
    return(
      <div className="App">
        <h3>{job.jobTitle}</h3>
        <div>{job.address2}</div>
        <p>{job.jobDesc}</p>
        <div>{job.datePosted}</div>
        <button>apply</button>
      </div>
      )
  }
}

export default Jobs;