import { useState, useReducer } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

function reducer(todos, { type, payload }) {
    switch (type) {
        case 'add-todo':
            return [...todos, addTodo(payload)];
        case 'edit-todo':
            return todos.map(todo => {
                if (todo.id === payload.id) {
                    return { ...todo, name: payload.name, description: payload.description, status: payload.status };
                }
                return todo;
            });
        case 'update-todo':
            return todos.map(todo => {
                if (todo.id === payload.id) {
                    return { ...todo, status: payload.status };
                }
                return todo;
            });
        case 'delete-todo':
            return todos.filter(todo => todo.id !== payload.id);
        default:
            return todos;
    }
}

function addTodo(payload) {
    return { id: Date.now(), name: payload.name, description: payload.description, status: payload.status }
}

export default function Todos(props) {
    const [todos, dispatch] = useReducer(reducer, []);

    return (
        <>
            <AddTodo dispatch={dispatch} />
            <div className="row m-2 g-2 text-center" style={{ minHeight: '30rem' }}>
                <div className="col bg-danger opacity-75">
                    <h2 className="m-1 p-1 bg-light text-danger"><i className="bi bi-list-ol"></i> Todo</h2>
                    <div className="row row-cols-1 g-2 m-1">
                        {todos.map(todo => {
                            if (todo.status === "to-do")
                                return <Todo todo={todo} dispatch={dispatch} nextTodo="in-progress" />
                        })}
                    </div>
                </div>
                <div className="col bg-warning opacity-75">
                    <h2 className="m-1 p-1 bg-light text-warning"><i className="bi bi-hourglass-split"></i> In Progress</h2>
                    <div className="row row-cols-1 g-2 m-1">
                        {todos.map(todo => {
                            if (todo.status === "in-progress")
                                return <Todo todo={todo} dispatch={dispatch} nextTodo="done" />
                        })}
                    </div>
                </div>
                <div className="col bg-success opacity-75">
                    <h2 className="m-1 p-1 bg-light text-success"><i className="bi bi-check2-all"></i> Done</h2>
                    <div className="row row-cols-1 g-2 m-1">
                        {todos.map(todo => {
                            if (todo.status === "done")
                                return <Todo todo={todo} dispatch={dispatch} nextTodo="to-do" />
                        })}
                    </div>
                </div>
            </div>
            {todos.map(todo => { return <EditTodo todo={todo} dispatch={dispatch} /> })}
        </>
    )
}