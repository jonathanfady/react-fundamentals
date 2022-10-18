import { useState, useReducer } from 'react';

function reducer(state, action) {
    if (action == 'increment')
        return { count: state.count + 1 };
    else if (action == 'decrement')
        return { count: state.count - 1 };
    else
        return state;
}

function Counter(props) {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function increment() {
        dispatch('increment');
    }

    function decrement() {
        dispatch('decrement');
    }

    return (
        <div className="container text-center">
            <div className="d-flex flex-row justify-content-center ">
                <button className="px-4 btn btn-lg rounded-0 btn-outline-secondary" onClick={decrement}>-</button>
                <div className="px-4 h1">{state.count}</div>
                <button className="px-4 btn btn-lg rounded-0 btn-outline-primary" onClick={increment}>+</button>
            </div>
        </div>
    )
}

Counter.defaultProps = {
    startAt: 0,
    countBy: 1
}

export default Counter;