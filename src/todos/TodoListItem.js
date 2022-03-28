import React from "react";
import { useState } from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onDeleteTodoItem, onMarkItemComplete }) => {
    const completedStyle = {
        backgroundColor: todo.isCompleted
            ? "rgb(159 255 171)"
            : "rgb(243 243 243)",
    };

    return (
        <div className="todo-item-container" style={completedStyle}>
            <h3>{todo.text}</h3>
            <p>{todo.createdAt}</p>
            <div className="button-container">
                <button
                    onClick={() => onMarkItemComplete(todo.id)}
                    className="btn-completed"
                    disabled={todo.isCompleted}
                >
                    {todo.isCompleted ? "Completed" : "Mark completed"}
                </button>
                <button onClick={() => onDeleteTodoItem(todo.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoListItem;
