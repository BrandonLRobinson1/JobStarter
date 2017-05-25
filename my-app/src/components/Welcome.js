import React from 'react';

class Welcome extends React.Component {
  constructor(){
    super();

    this.moveForward = this.moveForward.bind(this);
  }

  moveForward(){
    //
    console.log('this will take you to the next page');
  }

  render(){
    return(
      <div>
        <h1>Welcome</h1>
        <h4>looks like this is your first time, lets grab some information from you</h4>
        <button onClick={ this.moveForward }>ok</button>
      </div>
      )
  }
}

export default Welcome;