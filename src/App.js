import React, { Component } from 'react';
import './App.css';
import Map from './Map.react';
import Text from './Text.react';

class App extends Component {
  render() {
    return (
      <div>
        <Text />
        <Map />
      </div>
    );
  }
}

export default App;
