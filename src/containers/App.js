import React, { Component } from 'react';
import cssClasses from './App.css';

import Persons from "../components/Persons/Persons"; // needs to be upper case Person as lower case elements are reserved for HTML elements

class App extends Component {
  state = {
    persons: [
      {name: 'Arun', age: 28 },
      {name: 'Jay', age: 30 },
      {name: 'Jon', age: 40 },
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    /*const persons = this.state.persons.slice(); OR */ 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons});
  }

  nameChangedHandler = (e, personIndex) => {
    const personCopy = {
      ...this.state.persons[personIndex]
    };

    personCopy.name = e.target.value;
    
    const personsCopy = [...this.state.persons];
    personsCopy[personIndex] = personCopy;
    
    this.setState({
      persons: personsCopy
    });
  }
  
  render() {
    let persons = null;
    const assignedButtonClasses = [];

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
          />
        </div>
      );
      
      assignedButtonClasses.push(cssClasses.Red)
    }
    
    const assignedParaClasses = [];
    if (this.state.persons.length <=2) {
      assignedParaClasses.push(cssClasses.red); // classes = ['red']
    }
    
    if (this.state.persons.length <=1) {
      assignedParaClasses.push(cssClasses.bold); // classes = ['red', 'bold]
    }
    
    return (
      <div className={cssClasses.App}>
        <p className={assignedParaClasses.join(' ')}>I'm a React app</p>

        <button 
            className={assignedButtonClasses.join(' ')}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          
          { persons }

      </div>
    );
  }
}

export default App;
