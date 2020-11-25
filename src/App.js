import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person-functional'; // needs to be upper case Person as lower case elements are reserved for HTML elements

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a React app</h1>
        <Person name='Arun' age='40'/>
        <Person name='Jay' age='50'/>
        <Person name='Jon' age='60'>Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
