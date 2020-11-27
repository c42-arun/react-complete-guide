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

  changeDetailsHandler = (newName) => {
    // console.log('Clciked!!');

    // this.state.persons[0].name = "Xian"; // DON'T do this, React will not detect

    // this merges this updated state slice with other existing slices
    // for eg 'anotherState' slice is left unchanged
    this.setState({
      persons: [
        {name: newName, age: 20 },
        {name: 'Jay', age: 30 },
        {name: 'Jon', age: 33 },
      ],
    });
  }

  nameChangeHandler = (e) => {
    // console.log('Clciked!!');

    // this.state.persons[0].name = "Xian"; // DON'T do this, React will not detect

    // this merges this updated state slice with other existing slices
    // for eg 'anotherState' slice is left unchanged
    this.setState({
      persons: [
        {name: e.target.value, age: 20 },
        {name: 'Jay', age: 30 },
        {name: 'Jon', age: 33 },
      ],
      showPersons: false
    });
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
            nameChangeHandler={this.nameChangeHandler}/>

          {/* pass functions in params */}
          {/* another way to pass args in ES6, but inefficient w.r.t React's change detection */}
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
            changeOnClick={() => this.changeDetailsHandler('Chan!!')}/>

          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Racing</Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I'm a React app</h1>

        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          
          { persons }

      </div>
    );
  }
}

export default App;
