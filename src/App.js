import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person-functional'; // needs to be upper case Person as lower case elements are reserved for HTML elements

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a React app</h1>
        <Person />
      </div>
    );
  }
}

export default App;
