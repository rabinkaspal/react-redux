import React from "react";
import { useState } from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onDeleteTodoItem, onMarkItemComplete }) => {
    const completedStyle = {
        backgroundColor: todo.isCompleted ? "rgb(159 255 171)" : "#eeeeee",
    };

    return (
        <div className="todo-item-container" style={completedStyle}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <div className="button-container">
                <button
                    onClick={() => onMarkItemComplete(todo)}
                    className="btn-completed"
                    disabled={todo.isCompleted}
                >
                    {todo.isCompleted ? "Completed" : "Mark completed"}
                </button>
                <button onClick={() => onDeleteTodoItem(todo)}>Delete</button>
            </div>
        </div>
    );
};

export default TodoListItem;
