import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person-functional'; // needs to be upper case Person as lower case elements are reserved for HTML elements

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

  render() {
    const style = {
      backgroundColor: 'green',
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
                    key={index} 
                    name={person.name} 
                    age={person.age} 
                    click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      );
      
      style.backgroundColor = 'red'; // set dynamic style
    }
    
    /*let classes = ['red', 'bold'].join(' ');*/
    const classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red'); // classes = ['red']
    }
    
    if (this.state.persons.length <=1) {
      classes.push('bold'); // classes = ['red', 'bold]
    }
    
    return (
      <div className="App">
        <p className={classes.join(' ')}>I'm a React app</p>

        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          
          { persons }

      </div>
    );
  }
}

export default App;
