import React from 'react';

import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import cssClasses from './Person.css';

const person = (props) => {
    
    return (
        <Aux>
            <p onClick={props.clicked}>I'm {props.name} and am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Aux>
    )
}

export default withClass(person, cssClasses.Person);