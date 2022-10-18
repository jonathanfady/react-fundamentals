import { useRef } from 'react';

export default function AddTodo({ dispatch }) {
    const name = useRef();
    const description = useRef();
    const status = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        if ((name.current.value === "") || (description.current.value === "")) {
            return;
        }

        dispatch({
            type: 'add-todo',
            payload: {
                name: name.current.value,
                description: description.current.value,
                status: status.current.value
            }
        });

        name.current.value = null;
        description.current.value = null;
        status.current.value = "to-do";
    }

    return (
        <>
            <form className="container border border-primary border-3 rounded border-opacity-25 p-2 w-50"
                onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse" data-bs-target="#addTodoCollapse">
                    <h4 className="text-primary"><i className="bi bi-check2"></i> Add Todo</h4>
                    <button type="button" className="btn btn-close btn-lg"></button>
                </div>
                <div className="collapse show" id="addTodoCollapse">
                    <div className="col-4 form-floating mb-3">
                        <input type="text" id="addTodoName" ref={name}
                            className="form-control" placeholder="Todo Name"
                            required />
                        <label htmlFor="addTodoName">Name</label>
                    </div>
                    <div className="col-10 form-floating mb-3">
                        <textarea id="addTodoDescription" ref={description}
                            className="form-control" placeholder="Todo Description"
                            style={{ minHeight: '7rem' }}
                            required></textarea>
                        <label htmlFor="addTodoDescription">Description</label>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="col-5 form-floating">
                            <select id="addTodoStatus" ref={status}
                                className="form-select" aria-label="Todo Status" defaultValue="to-do"
                                required>
                                <option value="to-do">To Do</option>
                                <option value="in-progress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                            <label htmlFor="addTodoStatus">Status</label>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn btn-lg btn-primary">Add Todo</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}