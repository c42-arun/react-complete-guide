import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person-functional'; // needs to be upper case Person as lower case elements are reserved for HTML elements

class App extends Component {
  state = {
    persons: [
      {id: '123', name: 'Arun', age: 28 },
      {id: '456', name: 'Jay', age: 30 },
      {id: '789', name: 'Jon', age: 40 },
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

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const updatePerson = {...this.state.persons[personIndex]}; // copy of person object
    updatePerson.name = e.target.value;

    const newPersonsList = [...this.state.persons]; // copy of persons array
    newPersonsList[personIndex] = updatePerson;

    // update state
    this.setState({
      persons: newPersonsList
    });
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
            {this.state.persons.map((person, index) => {
              return <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
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
