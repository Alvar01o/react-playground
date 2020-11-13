
import './App.css';
import React, { useState } from 'react';
import Persons  from './components/Persons/Persons.js'
import Cockpit  from './components/Cockpit/Cockpit.js'


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
        <Persons click={deletePersonHandler}  changed={nameChangeHandler} persons={personsState.persons}> </Persons>
      </div>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <Cockpit click={togglePersonsHandler} persons={personsState.persons}></Cockpit>
        {persons}
      </header>
    </div>
  );
//return React.createElement('div',{className:"App"}, React.createElement('h1',null,'Learn React'))
}

export default App;
