import React from 'react';

const person = (props) => {
    return (
    <div>
        <p onClick={props.changeOnClick}>I'm {props.name} and am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.nameChangeHandler} value={props.name} />
    </div>
    )
}

export default person;