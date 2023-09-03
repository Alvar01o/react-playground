import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [validationMessage, setValidationMessage] = React.useState('Invalid message')
    const changeHandler = (event) => {
        if  (event.target.value.length >= 3) {
            setValidationMessage('Valid message')
        } else {
            setValidationMessage('Invalid message')
        }
    }
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={changeHandler}/>
            <p>{validationMessage}</p>
        </form>
    );
}