import React, { useState } from "react";
import "./App.css";
import TodoList from "./todos/TodoList";
import TodoForm from "./todos/TodoForm";

const App = () => {
    const [showForm, setShowForm] = useState(false);

    function handleClick() {
        setShowForm(true);
    }

    return (
        <div className="todo-container">
            <TodoForm setShowForm={setShowForm} className="df" />
            <div className="todo-list">
                <h2>My Todo List</h2>
                {/* <button onClick={handleClick} className="btn-add">
                    + Add New
                </button> */}
                <TodoList />
            </div>
        </div>
    );
};

export default App;
