import React from "react";
import { useState } from "react";
import "./TodoListItem.css";

const TodoListItem = props => {
    const [todo, setTodo] = useState(props.todo);
    const completedStyle = {
        backgroundColor: todo.isCompleted ? "rgb(159 255 171)" : "#eeeeee",
    };

    function handleClick() {
        setTodo(prev => {
            return {
                ...prev,
                isCompleted: true,
            };
        });
    }

    return (
        <div className="todo-item-container" style={completedStyle}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <div className="button-container">
                <button
                    onClick={handleClick}
                    className="btn-completed"
                    disabled={todo.completed}
                >
                    {todo.isCompleted ? "Completed" : "Mark completed"}
                </button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default TodoListItem;
