import React from 'react';

class IndivJob extends React.Component {

  render(){
    console.log(this.props, ' indiv job component reached')
    return(
      <div className="App">
        {//this.props.jobInfo.props.obj.company
        }
        <h1> indiv jobbby </h1>
      </div>
      )
  }
}

export default IndivJob;