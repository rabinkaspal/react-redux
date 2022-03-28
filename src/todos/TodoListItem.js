import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
    background: #f1f1f1;
    margin-block: 20px;
    padding: 20px;
    border-radius: 6px;
    transition: all 0.6s ease-in-out;

    & h3 {
        font-weight: normal;
        text-transform: uppercase;
        letter-spacing: 0.3px;
    }

    & p,
    & h3 {
        margin: 0;
        margin-bottom: 10px;
    }
`;

const ButtonContainer = styled.div`
    text-align: right;
`;

const TodoButton = styled.button`
    padding: 5px 15px;
    border: none;
    background-color: red;
    color: white;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        box-shadow: 1px 2px 6px 1px #939393;
    }

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:disabled,
    &:disabled:hover {
        cursor: no-drop;
        background-color: rgb(176, 176, 176) !important;
        box-shadow: none;
    }
`;

const ButtonCompleted = styled(TodoButton)`
    background-color: green !important;
`;

const TodoListItem = ({ todo, onDeleteTodoItem, onMarkItemComplete }) => {
    const completedStyle = {
        backgroundColor: todo.isCompleted
            ? "rgb(159 255 171)"
            : "rgb(243 243 243)",
    };

    return (
        <TodoItemContainer style={completedStyle}>
            <h3>{todo.text}</h3>
            <p>{todo.createdAt}</p>
            <ButtonContainer>
                <ButtonCompleted
                    onClick={() => onMarkItemComplete(todo.id)}
                    disabled={todo.isCompleted}
                >
                    {todo.isCompleted ? "Completed" : "Mark completed"}
                </ButtonCompleted>
                <TodoButton onClick={() => onDeleteTodoItem(todo.id)}>
                    Delete
                </TodoButton>
            </ButtonContainer>
        </TodoItemContainer>
    );
};

export default TodoListItem;
