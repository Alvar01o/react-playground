import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person  from './Person/Person.js'



function App() {

  const persons =  [
    { name: 'Max', age: 28 },
    { name: 'Alvaro', age: 29 },
    { name: 'Stephanie', age: 26 }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name={persons[0].name} age={persons[0].age} />
        <Person name={persons[1].name} age={persons[1].age} >My hobbies : Programming </Person>
        <Person name={persons[2].name} age={persons[2].age} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
//return React.createElement('div',{className:"App"}, React.createElement('h1',null,'Learn React'))
}

export default App;
