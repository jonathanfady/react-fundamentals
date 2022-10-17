export default function Todo({ todo, dispatch }) {
    return (
        <li key={todo.id} className={"list-group-item " + (todo.complete ? 'list-group-item-success' : 'list-group-item-danger')}>
            <span className="mx-2">{todo.name}</span>
            <button className="btn btn-outline-dark mx-2" onClick={() => dispatch({ type: 'toggle-todo', payload: { id: todo.id } })}>
                Toggle
            </button>
            <button className="btn btn-outline-danger mx-2" onClick={() => dispatch({ type: 'delete-todo', payload: { id: todo.id } })}>
                Delete
            </button>
        </li>
    )
}