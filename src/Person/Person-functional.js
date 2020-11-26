import React from 'react';
import './Person.css'

const person = (props) => {
    return (
    <div className="Person">
        <p onClick={props.changeOnClick}>I'm {props.name} and am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.nameChangeHandler} value={props.name} />
    </div>
    )
}

export default person;