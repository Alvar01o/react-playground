
import './App.css';
import React, { Component} from 'react';
import Persons  from './components/Persons/Persons.js'
import Cockpit  from './components/Cockpit/Cockpit.js'


class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] contructor")
  }

  state = {
    persons: [
      {id:'1', name: 'Max', age: 28 },
      {id:'2', name: 'Alvaro', age: 29 },
      {id:'3', name: 'Stephanie', age: 26 }
    ],
    showPersons:false
  }

//  static getDerivedStateFromProps(props, state){
//    console.log("[App.js] getDerivedStateFromProps", props);
//    return state;
//  }

  componentWillMount(){
    console.log("[App.js] componentWillMount");
  }

  componentDidMount(){
    console.log("[App.js] componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate")      
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate") 
  }
  nameChangeHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id 
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons :!doesShow
    })
  }

  deletePersonHandler = (index) => {  
//    const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(index , 1 )
    this.setState({
      persons :persons
    })
  }



  render(){

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons click={this.deletePersonHandler}  changed={this.nameChangeHandler} persons={this.state.persons}> </Persons>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <Cockpit click={this.togglePersonsHandler} persons={this.state.persons}></Cockpit>
          {persons}
        </header>
      </div>
    );
  }

  
}
export default App;
