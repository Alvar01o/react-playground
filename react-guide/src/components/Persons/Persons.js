
import React from 'react';
import Person from './Person/Person.js';

const Persons = (props) => props.persons.map((person, index)=>{
    return <Person 
        click={ () => props.click(index)}
        name={person.name}
        age={person.age}
        changed={(event)=> props.changed(event , person.id)}
        key={person.id}
    />
});

export default Persons;