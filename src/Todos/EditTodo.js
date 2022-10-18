import { useState } from 'react';

export default function EditTodo({ todo, dispatch }) {
    const [name, setName] = useState(todo.name);
    const [description, setDescription] = useState(todo.description);
    const [status, setStatus] = useState(todo.status);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleStatusChange(e) {
        setStatus(e.target.value);
    }

    function handleClick() {
        if ((name === "") || (description === "")) {
            return false;
        }

        dispatch({
            type: 'edit-todo',
            payload: { id: todo.id, name, description, status }
        });
    }

    return (
        <div className="modal fade" id={"editTodoModal" + todo.id} tabIndex="-1" aria-labelledby="editTodoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary"><i className="bi bi-check2"></i> Edit Todo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="col-4 form-floating mb-3">
                            <input type="text" id="editTodoName"
                                value={name}
                                onChange={handleNameChange}
                                className="form-control" placeholder="Todo Name" />
                            <label htmlFor="editTodoName">Name</label>
                        </div>
                        <div className="col-10 form-floating mb-3">
                            <textarea id="editTodoDescription"
                                value={description}
                                onChange={handleDescriptionChange}
                                className="form-control" placeholder="Todo Description"
                                style={{ minHeight: '7rem' }}></textarea>
                            <label htmlFor="editTodoDescription">Description</label>
                        </div>
                        <div className="col-5 form-floating">
                            <select id="editTodoStatus"
                                value={status}
                                onChange={handleStatusChange}
                                className="form-select" aria-label="Todo Status">
                                <option value="to-do">To Do</option>
                                <option value="in-progress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                            <label htmlFor="editTodoStatus">Status</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}