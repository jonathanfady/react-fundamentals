export default function Todo({ todo, dispatch, nextTodo }) {
    return (
        <>
            <div className="col">
                <div className="card text-start" style={{ opacity: '95%' }}>
                    <div className="card-header d-flex justify-content-between">
                        <h5 className="card-title">{todo.name}</h5>
                        <button className="btn btn-close"
                            onClick={() => dispatch({ type: 'delete-todo', payload: { id: todo.id } })}>
                        </button>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{todo.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target={`#editTodoModal${todo.id}`}>
                                Edit
                            </button>
                            <button className="btn btn-outline-dark"
                                onClick={() => dispatch({ type: 'update-todo', payload: { id: todo.id, status: nextTodo } })}>
                                Update
                            </button>
                            <small>{new Date(todo.id).toDateString()}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}