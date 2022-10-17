import { ACTIONS } from "./Calculator";

export default function DigitButton({ dispatch, digit }) {
    return (
        <>
            <button className="btn btn-lg rounded-0 btn-outline-secondary col-3"
                onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: digit } })}>{digit}</button>
        </>
    )
}