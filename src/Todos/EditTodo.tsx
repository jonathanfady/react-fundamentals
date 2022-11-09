import { useLayoutEffect, useRef } from 'react';
import { useCurrentTodo } from './TodoContext';

export default function EditTodo({ dispatch }) {
    const todo = useCurrentTodo()
    const name = useRef()
    const description = useRef()
    const status = useRef()
    const closeButton = useRef()

    useLayoutEffect(() => {
        name.current.value = todo.name;
        description.current.value = todo.description;
        status.current.value = todo.status;
    }, [todo]);

    function handleClick() {
        name.current.classList.remove("is-invalid");
        description.current.classList.remove("is-invalid");

        if ((name.current.value === "") || (description.current.value === "")) {
            if (name.current.value === "") name.current.classList.add("is-invalid");
            if (description.current.value === "") description.current.classList.add("is-invalid");
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
        closeButton.current.click()
    }

    return (
        <div className="modal fade" id="editTodoModal" tabIndex="-1" aria-labelledby="editTodoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary"><i className="bi bi-check2"></i> Edit Todo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="col-8 form-floating mb-3">
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
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                        <button ref={closeButton} type="button" className="d-none" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}