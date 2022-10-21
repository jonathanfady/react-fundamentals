import { useEffect, useRef } from 'react';

export default function EditTodo({ todo, dispatch }) {
    const name = useRef(todo.name)
    const description = useRef(todo.description)
    const status = useRef(todo.status)

    useEffect(() => {
        name.current.value = todo.name;
        description.current.value = todo.description;
        status.current.value = todo.status;
    }, [todo]);

    function handleClick() {
        if ((name.current.value === "") || (description.current.value === "")) {
            return false;
        }

        dispatch({
            type: 'edit-todo',
            payload: {
                id: todo.id,
                name: name.current.value,
                description: description.current.value,
                status: status.current.value
            }
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
                                ref={name}
                                className="form-control" placeholder="Todo Name" />
                            <label htmlFor="editTodoName">Name</label>
                        </div>
                        <div className="col-10 form-floating mb-3">
                            <textarea id="editTodoDescription"
                                ref={description}
                                className="form-control" placeholder="Todo Description"
                                style={{ minHeight: '7rem' }}></textarea>
                            <label htmlFor="editTodoDescription">Description</label>
                        </div>
                        <div className="col-5 form-floating">
                            <select id="editTodoStatus"
                                ref={status}
                                className="form-select pb-1" aria-label="Todo Status">
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