import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Person  from './Person/Person.js'




function App() {

const [ personsState , setPersonsState ] = useState({
  persons: [
    {id:'1', name: 'Max', age: 28 },
    {id:'2', name: 'Alvaro', age: 29 },
    {id:'3', name: 'Stephanie', age: 26 }
  ],
  showPersons:false
})



  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        {id:'1', name: event.target.value, age: 23 },
        {id:'2', name: 'Alvaro', age: 22 },
        {id:'3', name: 'Stephanie', age: 21 }
      ],
      showPersons: personsState.showPersons
    })
  }

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({persons:personsState.persons,showPersons: !doesShow})
  }

  const deletePersonHandler = (index) => {
//    const persons = personsState.persons.slice();
    const persons = [...personsState.persons]
    persons.splice(index , 1 )
    setPersonsState({persons:persons, showPersons: personsState.showPersons})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={togglePersonsHandler}>Toggle Persons</button>        
        { personsState.showPersons ? 
          <div>
            {
            personsState.persons.map((person , index) => {

              return <Person 
              click={() => deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              changed={nameChangeHandler}
              key={person.id}
              />

            })
            }
          </div> : null
        }

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
