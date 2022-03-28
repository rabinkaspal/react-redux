import React, { useState } from "react";
import TodoList from "./todos/TodoList";
import TodoForm from "./todos/TodoForm";
import styled from "styled-components";
import "./App.css";

const TodoContainer = styled.div`
    max-width: 90%;
    display: flex;
    gap: 20px;
    margin: 0 auto;
    overflow: hidden;
    overflow: auto;

    @media (max-width: 610px) {
        .todo-container {
            flex-direction: column;
        }
    }
`;

const TodoListContainer = styled.div`
    flex-grow: 1;
    overflow: hidden;
    overflow-y: scroll;
`;

const App = () => {
    const [showForm, setShowForm] = useState(false);

    function handleClick() {
        setShowForm(true);
    }

    return (
        <TodoContainer>
            <TodoForm setShowForm={setShowForm} />
            <TodoListContainer>
                <h2>My Todo List</h2>
                <TodoList />
            </TodoListContainer>
        </TodoContainer>
    );
};

export default App;
