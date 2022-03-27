import React, { useState } from "react";
import "./App.css";
import TodoList from "./todos/TodoList";
import TodoForm from "./todos/TodoForm";

const App = () => {
    const todosArray = [
        {
            title: "Make Bed",
            description: "2021-03-21 12:34:45 AEDT",
            isCompleted: false,
        },
        {
            title: "Clean Room",
            description: "2021-03-21 12:34:45 AEDT",
            isCompleted: true,
        },
    ];

    const [todos, setTodos] = useState(todosArray);
    const [showForm, setShowForm] = useState(false);

    function handleClick() {
        setShowForm(true);
    }

    function addNewTodoItem(item) {
        setTodos(prevTodos => {
            return [...prevTodos, item];
        });
    }

    return (
        <div>
            {showForm ? (
                <TodoForm
                    addNewItem={addNewTodoItem}
                    setShowForm={setShowForm}
                />
            ) : (
                <>
                    <h2>Todo List</h2>
                    <button onClick={handleClick}>+ Add New</button>
                    <TodoList todos={todos} />
                </>
            )}
        </div>
    );
};

export default App;
