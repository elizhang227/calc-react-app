import React, { Component } from 'react';

import Calculator from './calculator.js';

import './calculator.css';
import './buttons.css';
import './display.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
