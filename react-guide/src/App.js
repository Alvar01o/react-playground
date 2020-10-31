import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person  from './Person/Person.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person name="Max" age="28"/>
        <Person name="Alvaro" age="29">My hobbies : Programming </Person>
        <Person name="Stephanie" age="26"/>
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
