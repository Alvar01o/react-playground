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



  const nameChangeHandler = (event , id) => {
    const personIndex = personsState.persons.findIndex(p=>{
      return p.id === id 
    })
    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons,
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
  let persons = null;

  if(personsState.showPersons) {
    persons = (
      <div>
      {
      personsState.persons.map((person , index) => {

        return <Person 
        click={() => deletePersonHandler(index)}
        name={person.name} 
        age={person.age} 
        changed={(event)=> nameChangeHandler(event , person.id)}
        key={person.id}
        />

      })
      }
  </div>
    )
  }

  let classes = [] ; 
  if(personsState.persons.length <= 2 ){
    classes.push('red')
  } 

  if(personsState.persons.length <= 1 ){
    classes.push('bold')
  }   
  classes = classes.join(" ")
  return (
    <div className="App">
      <header className="App-header">
        <p className={classes}> Some text</p>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={togglePersonsHandler}>Toggle Persons</button>        
        {persons}

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
