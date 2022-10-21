import { useReducer } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import TodoList from './TodoList';

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
            <DndProvider backend={HTML5Backend}>
                <div className="row mt-2">
                    <TodoList todos={todos.filter((todo) => todo.status === "to-do")} status="to-do" dispatch={dispatch} />
                    <TodoList todos={todos.filter((todo) => todo.status === "in-progress")} status="in-progress" dispatch={dispatch} />
                    <TodoList todos={todos.filter((todo) => todo.status === "done")} status="done" dispatch={dispatch} />
                </div>
            </DndProvider>
            {todos.map(todo => <EditTodo todo={todo} dispatch={dispatch} />)}
        </>
    )
}