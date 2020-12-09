import React from 'react';

import cssClasses from './Cockpit.css';

const cockpit = (props) => {
    const assignedParaClasses = [];
    const assignedButtonClasses = [];

    if (props.showPersons) {
        assignedButtonClasses.push(cssClasses.Red)
    }

    if (props.persons.length <= 2) {
        assignedParaClasses.push(cssClasses.red); // classes = ['red']
    }

    if (props.persons.length <= 1) {
        assignedParaClasses.push(cssClasses.bold); // classes = ['red', 'bold]
    }

    return (
        <div className={cssClasses.Cockpit}>
            <p className={assignedParaClasses.join(' ')}>{props.title}</p>

            <button
                className={assignedButtonClasses.join(' ')}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    )
};

export default cockpit;