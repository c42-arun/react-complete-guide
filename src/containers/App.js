import React, {Component} from 'react';
import cssClasses from './App.css';

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit"; // needs to be upper case Person as lower case elements are reserved for HTML elements

class App extends Component {
    state = {
        persons: [
            {name: 'Arun', age: 28},
            {name: 'Jay', age: 30},
            {name: 'Jon', age: 40},
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

        this.setState({persons: persons});
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

        if (this.state.showPersons) {
            persons =
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />;
        }

        return (
            <div className={cssClasses.App}>
                <Cockpit
                    title={this.props.appTitle}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
