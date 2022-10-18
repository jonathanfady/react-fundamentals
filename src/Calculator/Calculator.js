import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate'
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (state.overwrite === true) return { ...state, currentOperand: payload.digit, overwrite: false };
            if (payload.digit === "0" && state.currentOperand === "0") return state;
            if (payload.digit === "." && state.currentOperand.includes(".")) return state;

            return { ...state, currentOperand: `${state.currentOperand || ""}${payload.digit}` };

        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) return state;

            if (state.currentOperand == null) {
                return { ...state, operation: payload.operation };
            }

            if (state.previousOperand == null) {
                return { ...state, currentOperand: null, previousOperand: state.currentOperand, operation: payload.operation };
            }

            return { ...state, currentOperand: null, previousOperand: evaluate(state), operation: payload.operation };

        case ACTIONS.CLEAR:
            return {};

        case ACTIONS.DELETE_DIGIT:
            if (state.overwrite === true) return { ...state, currentOperand: null, overwrite: false };
            if (state.currentOperand == null) return state;
            if (state.currentOperand.length === 1) return { ...state, currentOperand: null };

            return { ...state, currentOperand: state.currentOperand.slice(0, -1) };

        case ACTIONS.EVALUATE:
            if (state.currentOperand == null || state.previousOperand == null || state.operation == null) return state;
            return { ...state, currentOperand: evaluate(state), previousOperand: null, operation: null, overwrite: true };

        default:
            return state;
    }
}

function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return "";

    let computation = "";
    switch (operation) {
        case "/":
            computation = prev / current;
            break;
        case "*":
            computation = prev * current;
            break;
        case "+":
            computation = prev + current;
            break;
        case "-":
            computation = prev - current;
            break;
        default:
            break;
    }

    return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("fr-fr", {
    maximumFractionDigits: 0,
});

function formatOperand(operand) {
    if (operand == null) return null;
    const [integer, decimal] = operand.split('.');
    if (decimal == null) return INTEGER_FORMATTER.format(integer);
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
}

export default function Calculator(props) {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

    return (
        <>
            <div className="container px-0 justify-content-center border border-4 border-secondary rounded-1" style={{ maxWidth: '40rem' }}>
                <div className="col-12 p-2 bg-dark text-light text-end text-break">
                    <div className="text-muted h4" style={{ minHeight: '3rem' }}>{formatOperand(previousOperand)} {operation}</div>
                    <div className="h1 mb-0" style={{ minHeight: '3rem' }}>{formatOperand(currentOperand)}</div>
                </div>
                <button className="btn btn-lg rounded-0 btn-outline-secondary col-6"
                    onClick={() => (dispatch({ type: ACTIONS.CLEAR }))}>AC</button>
                <button className="btn btn-lg rounded-0 btn-outline-secondary col-3"
                    onClick={() => (dispatch({ type: ACTIONS.DELETE_DIGIT }))}>DEL</button>
                <OperationButton dispatch={dispatch} operation="/" />
                <DigitButton dispatch={dispatch} digit="1" />
                <DigitButton dispatch={dispatch} digit="2" />
                <DigitButton dispatch={dispatch} digit="3" />
                <OperationButton dispatch={dispatch} operation="*" />
                <DigitButton dispatch={dispatch} digit="4" />
                <DigitButton dispatch={dispatch} digit="5" />
                <DigitButton dispatch={dispatch} digit="6" />
                <OperationButton dispatch={dispatch} operation="+" />
                <DigitButton dispatch={dispatch} digit="7" />
                <DigitButton dispatch={dispatch} digit="8" />
                <DigitButton dispatch={dispatch} digit="9" />
                <OperationButton dispatch={dispatch} operation="-" />
                <DigitButton dispatch={dispatch} digit="." />
                <DigitButton dispatch={dispatch} digit="0" />
                <button className="btn btn-lg rounded-0 btn-outline-secondary col-6"
                    onClick={() => (dispatch({ type: ACTIONS.EVALUATE }))}>=</button>
            </div>

        </>
    )
}