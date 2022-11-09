import React, { useContext, useState } from "react";

const TodoContext = React.createContext()
const TodoUpdateContext = React.createContext()

export function useCurrentTodo() {
    return useContext(TodoContext)
}

export function useCurrentTodoUpdate() {
    return useContext(TodoUpdateContext)
}

export function TodoProvider({ children }) {
    const [currentTodo, setCurrentTodo] = useState({})

    return (
        <TodoContext.Provider value={currentTodo}>
            <TodoUpdateContext.Provider value={setCurrentTodo}>
                {children}
            </TodoUpdateContext.Provider>
        </TodoContext.Provider>
    )
}