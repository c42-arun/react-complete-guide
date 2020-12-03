import React from 'react';

import cssClasses from './Person.css';

const person = (props) => {
    
    return (
        <div className={cssClasses.Person}>
            <p onClick={props.click}>I'm {props.name} and am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>
    )
}

export default person;