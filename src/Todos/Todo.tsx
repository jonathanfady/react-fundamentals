import { useDrag } from "react-dnd"
import { useCurrentTodoUpdate } from "./TodoContext";

export default function Todo({ todo, dispatch }) {
    const setCurrentTodo = useCurrentTodoUpdate()

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'todo',
        item: { id: todo.id, status: todo.status },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }), [todo]);

    return (
        <>
            <div className="col">
                <div ref={drag} className="card" style={{ opacity: isDragging ? 0.5 : 0.95, }}>
                    <div className="card-header d-flex justify-content-between">
                        <h5 className="card-title">{todo.name}</h5>
                        <button className="btn btn-close"
                            onClick={() => dispatch({ type: 'delete-todo', payload: { id: todo.id } })}>
                        </button>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{todo.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editTodoModal" onClick={() => setCurrentTodo(todo)}>
                                <i className="bi bi-pencil-square"></i> Edit
                            </button>
                            <small>Created on : <strong>{new Date(todo.id).toDateString()}</strong></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}