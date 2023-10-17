// Import the Redux library
const redux = require('redux');

// Define a reducer function that takes in the current state and an action
const counterReducer = (state = { counter: 0}, action) => {
    // If the action type is 'increment', return a new state object with the counter incremented by 1
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    // If the action type is 'decrement', return a new state object with the counter decremented by 1
    if(action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
}

// Create a Redux store with the counterReducer as the reducer function
const store = redux.createStore(counterReducer);

// Define a subscriber function that logs the latest state of the store
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

// Subscribe the counterSubscriber function to the store so that it is called every time the store is updated
store.subscribe(counterSubscriber);

// Dispatch an 'increment' action to the store
store.dispatch({ type: 'increment' });

// Dispatch a 'decrement' action to the store
store.dispatch({ type: 'decrement' });