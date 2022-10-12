import { useState } from 'react';

function Counter(props) {
    const [counter, setCounter] = useState(props.startAt);

    function countUp(e) {
        setCounter(counter + props.countBy);
    }

    function countDown() {
        setCounter(counter - props.countBy);
    }

    return (
        <>
            <div className="row justify-content-center g-2">
                <div className="col-6">
                    <p>Start at: {props.startAt}</p>
                    <p>Count by: {props.countBy}</p>
                    <h1 className="display-4">{counter}</h1>
                    <button className="btn btn-outline-primary" onClick={countUp}>Count Up</button>
                    <button className="btn btn-outline-secondary ms-2" onClick={countDown}>Count Down</button>
                </div>
            </div>
        </>
    )
}

Counter.defaultProps = {
    startAt: 0,
    countBy: 1
}

export default Counter;