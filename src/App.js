import React, { Component } from 'react';
import HaikuGenerator from './containers/HaikuGenerator'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HaikuGenerator />
      </div>
    );
  }
}

export default App;
