import React from 'react';

const person = (props) => {
    return (
        <div>
            <p> I'm {props.name}, and I'm {props.age}! Random Number: {Math.floor(Math.random() *30)} </p>
            {props.children}
        </div>
    )
}


export default person;