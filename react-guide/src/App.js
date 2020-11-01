import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Person  from './Person/Person.js'



function App() {

const [ personsState , setPersonsState ] = useState({
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Alvaro', age: 29 },
    { name: 'Stephanie', age: 26 }
  ]
})

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Maximo', age: 23 },
        { name: 'Alvaro', age: 22 },
        { name: 'Stephanie', age: 21 }
      ]
    })
  }
  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: 'Alvaro', age: 22 },
        { name: 'Stephanie', age: 21 }
      ]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} changed={nameChangeHandler}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My hobbies : Programming </Person> 
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}  />
        <button onClick={switchNameHandler}>Switch Name</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
//return React.createElement('div',{className:"App"}, React.createElement('h1',null,'Learn React'))
}

export default App;
