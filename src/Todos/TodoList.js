import { useMemo } from 'react';
import { useDrop } from 'react-dnd';
import Todo from './Todo';
import './TodoList.css';

export default function TodoList({ todos, status, dispatch }) {
    const [color, title] = useMemo(() => {
        return (status === "to-do") ?
            ["danger", <><i className="bi bi-list-ol"></i> To Do</>]
            : (status === "in-progress") ?
                ["warning", <><i className="bi bi-hourglass-split"></i> In Progress</>]
                : (status === "done") ?
                    ["success", <><i className="bi bi-check2-all"></i> Done</>]
                    : ["light", <>Unknown</>]
    }, [status])

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: 'todo',
            drop: (item) => {
                if (item.status !== status)
                    dispatch({ type: 'update-todo', payload: { id: item.id, status: status } })
            },
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            })
        }), []);

    return (
        <div ref={drop} className={`col opacity-75 bg-${color} ${isOver ? "border-move" : ""}`} style={{ minHeight: '30rem' }}>
            <h2 className={`m-1 p-1 bg-light text-center text-${color}`}>{title}</h2>
            <div className="row row-cols-1 g-2 m-1">
                {todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
            </div>
        </div>
    )
}