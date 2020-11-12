import React from 'react';
import personcss from './Person.module.css'
const person = (props) => {
    return (
        <div className={personcss.Person} >
            <p onClick={props.click}> I'm {props.name}, and I'm {props.age}! </p>
            {props.children}
            <input type="text" onChange={props.changed} value={props.name}></input>

        </div>
    )
}


export default person;