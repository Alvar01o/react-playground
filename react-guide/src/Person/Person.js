import React from 'react';

const person = (props) => {
return <p> I'm {props.name}, and I'm {props.age}! Random Number: {Math.floor(Math.random() *30)}</p>
}

export default person;