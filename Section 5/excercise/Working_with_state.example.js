import React from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    let initialCost = 100;
    const [cost, setCost] = React.useState(initialCost);
    const clickHandler = () => {
        setCost(75)
    }
    return (
        <div>
            <p>${cost}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}
