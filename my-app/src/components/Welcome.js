import React from 'react';
import {Link, Route} from 'react-router-dom';
import SignUpForm from './SignUpForm';


class Welcome extends React.Component {
  constructor(){
    super();
    this.state = {
      buttonClicked: false
    }
    this.moveForward = this.moveForward.bind(this);
  }

  moveForward(){
    //
    console.log('this will take you to the next page');
    this.setState({
      buttonClicked: true
    });
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <h1>Welcome</h1>
         <h4>smooth intro - looks like this is your first time, lets get you hired</h4>
         <Link to={'/JobStarterform'} onClick={this.moveForward}>I'm ready!></Link>
         <Route exactly path='/JobStarterform' component={SignUpForm} />
      </div>
      )
  }
}


//proptypes
    // old and working
    // console.log(this.props)
    // let buttonClicked = this.state.buttonClicked;
    // if (!buttonClicked) {
    //   return(
    //     <div>
    //       <h1>Welcome</h1>
    //       <h4>smooth intro - looks like this is your first time, lets get you hired</h4>
    //       <button onClick={this.moveForward}>I'm ready!</button>
    //     </div>
    //   )  
    // } else {
    //   return(
    //     <div>
    //       <h1>some other text</h1>
    //       <h4>youll only have to do this once</h4>
    //       <SignUpForm mainState={this.props.mainState} />
    //     </div>
    //   )  
    // }
export default Welcome;