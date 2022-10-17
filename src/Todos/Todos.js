import { useState, useReducer } from 'react';
import Todo from './Todo';

function reducer(todos, action) {
    switch (action.type) {
        case 'add-todo':
            return [...todos, addTodo(action.payload.name)];
        case 'toggle-todo':
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case 'delete-todo':
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

function addTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

export default function Todos(props) {
    const [name, setName] = useState('');
    const [todos, dispatch] = useReducer(reducer, []);

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: 'add-todo', payload: { name: name } });
        setName('');
    }

    console.log(todos);

    return (
        <>
            <form className="my-2" onSubmit={handleSubmit}>
                <input type="text" className='form-control' value={name} onChange={e => setName(e.target.value)} />
            </form>
            <ul className='list-group'>
                {todos.map(todo => <Todo todo={todo} dispatch={dispatch} />)}
            </ul>
        </>
    )
}