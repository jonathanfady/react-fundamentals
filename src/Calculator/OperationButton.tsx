import { ACTIONS } from "./Calculator";

export default function OperationButton({ dispatch, operation }) {
    return (
        <>
            <button className="btn btn-lg rounded-0 btn-outline-secondary col-3"
                onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: operation } })}>{operation}</button>
        </>
    )
}