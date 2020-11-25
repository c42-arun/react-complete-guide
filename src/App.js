import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person-functional'; // needs to be upper case Person as lower case elements are reserved for HTML elements

class App extends Component {
  state = {
    persons: [
      {name: 'Arun', age: 20 },
      {name: 'Jay', age: 30 },
      {name: 'Jon', age: 40 },
    ],
    anotherState: 'Initial state'
  }

  changeDetailsHandler = () => {
    // console.log('Clciked!!');

    // this.state.persons[0].name = "Xian"; // DON'T do this, React will not detect

    // this merges this updated state slice with other existing slices
    // for eg 'anotherState' slice is left unchanged
    this.setState({
      persons: [
        {name: 'Xian', age: 20 },
        {name: 'Jay', age: 30 },
        {name: 'Jon', age: 33 },
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a React app</h1>

        <button onClick={this.changeDetailsHandler}>Update State</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
