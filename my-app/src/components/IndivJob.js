import React from 'react';

class IndivJob extends React.Component {

  render(){
    console.log(this.props)
    return(
      <div className="App">
        {this.props.jobInfo.props.obj.company}
      </div>
      )
  }
}

export default IndivJob;

