import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: ''
    }
  }

  sendInfo(){
    //alert('A name was submitted: ' + this.state.name);
    event.preventDefault();

    axios.post( 'http://localhost:8888/test123',
      this.state
    )
    .then( data => {
      console.log('axios sent')
      console.log(data);
    } )
    .catch( err => {
      console.log('caught');
      console.log(err);
    } );

  }

  onChange(event) {
    event.preventDefault();
    var state = this.state; // will even work with nested state

    // works but if i need to adjust size of form beyond two fields it wont work
    //event.target.placeholder === 'name' ? state.name = event.target.value : state.age = event.target.value

    if (event.target.placeholder === 'name') {
      state.name = event.target.value
      this.setState({
      name: state.name,
    })

    }
    if (event.target.placeholder === 'age') {
      state.age = event.target.value
      this.setState({
      age: state.age //Number(state.age) // age must be a number
    })
    }


    console.log(this.state)
  }


  render() {
    return (
      <div className="App">
        Connected
        <form onSubmit={ this.sendInfo.bind(this) }>
          <input type='text' placeholder='name' className="inputName" onChange={ this.onChange.bind(this) } value={ this.state.name } required></input>
          <input type='text' placeholder='age' className="inputAge" onChange={ this.onChange.bind(this) }  value={ this.state.age } required></input>
          <input type='submit' value='Test'></input>
        </form>  
      </div>
    );
  }
}

export default App;


// value={this.state.age}

// import logo from './logo.svg';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
