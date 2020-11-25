import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person-functional'; // needs to be upper case Person as lower case elements are reserved for HTML elements

const app = (props) => {

  const [ personsState, setPersonsState ] = useState({   // array destructuring
    persons: [
      { name: 'Arun', age: 20 },
      { name: 'Jay', age: 30 },
      { name: 'Jon', age: 40 },
    ],
    anotherState: 'Initial state'
  });

  console.log(personsState);

  const changeDetailsHandler = () => {
    // console.log('Clciked!!');
  
    // this.state.persons[0].name = "Xian"; // DON'T do this, React will not detect
  
    // this REPLACES the state with new state - unlike class componentthis updated state slice with other existing slices
    // for eg 'anotherState' slice is left unchanged
    setPersonsState({
      persons: [
        { name: 'Xian', age: 20 },
        { name: 'Jay', age: 30 },
        { name: 'Jon', age: 33 },
      ],
    });
  }

  return (
    <div className="App">
      <h1>I'm a React app (functional with React useState hook)</h1>

      <button onClick={changeDetailsHandler}>Update State</button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Hobbies: Racing</Person>
    </div>
  );
}

export default app;
