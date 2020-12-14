import React, {Component} from 'react';

import Person from "./Person/Person";

class Persons extends Component {
    
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate');

        if (nextProps.persons !== this.props.persons) {
            return true
        } else {
            return false
        }
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount')
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return <Person
                key={index}
                name={person.name}
                age={person.age}
                clicked={() => this.props.clicked(index)}
                changed={(e) => this.props.changed(e, index)}
            />;
        });
    }
}
export default Persons;