
import React, {Component} from 'react';
import Person from './Person/Person.js';

class Persons extends Component {
//    static getDerivedStateFromProps (props, state){
//        console.log("[Persons.js] getDerivedStateFromProps ");
//        return state;
//    }
    shouldComponentUpdate(nextProps , nextState) {
        console.log("[Persons.js] shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
    }
    componentDidUpdate() {
        console.log("[Persons.js] componentDidUpdat e");        
    }
    render() {
        console.log("[Persons.js] rendering....")

        return this.props.persons.map((person, index)=>{
            return (
                <Person 
                click={ () => this.props.click(index)}
                name={person.name}
                age={person.age}
                changed={(event)=> this.props.changed(event , person.id)}
                key={person.id}
            />
            )
        });
    }
}

export default Persons;