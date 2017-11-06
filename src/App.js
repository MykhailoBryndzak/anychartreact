import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AnyChart from 'anychart-react'

class App extends Component {
  render() {
    const data = [
      {'x': 'P1', 'value': '128.14'},
        {'x': 'P2', 'value': '112.61'},
        {'x': 'P3', 'value': '163.21'},
        {'x': 'P4', 'value': '229.98'},
        {'x': 'P5', 'value': '90.54'}
      ]

    let json = {
        type: 'column', // pie column bar
        title: 'Generic Chart',
        width: 800,
        height: 600,

        // PIE

        data: data,



        // fill: '#0066cc',
        // hoverFill: '#0066cc',
        // hatchFill: 'backwarddiagonal',
        // stroke: '#808080',
        // hoverStroke: '#0066cc',

        // COLUMN / BAR


    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <AnyChart
          {...json}
        />

      </div>
    );
  }
}

export default App;
