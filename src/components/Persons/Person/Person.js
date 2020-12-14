import React from 'react';
import PropTypes from 'prop-types';

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

person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked: PropTypes.func,
  changed: PropTypes.func  
};

export default withClass(person, cssClasses.Person);