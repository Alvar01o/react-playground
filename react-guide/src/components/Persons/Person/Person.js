
import React from 'react';
import personcss from '../../../assets/Person.module.css';

const Person = (props) => {
    return (
        <div className={personcss.Person} >
            <p onClick={props.click}> I'm {props.name}, and I'm {props.age}! </p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}


export default Person;