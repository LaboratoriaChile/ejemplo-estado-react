import React, { Component } from 'react';
import Principal from './Principal/Principal';
import SecondScreen from './SecondScreen/SecondScreen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Principal isLoggedIn = {false} />
        <SecondScreen />
      </div>
    );
  }
}

export default App;
