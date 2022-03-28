import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { markTodoCompleted } from "../redux/actions/TodoActions";
import { connect } from "react-redux";
import {
    getAllTodos,
    removeTodoRequest,
    todoCompletedRequest,
} from "../redux/thunks/todoThunks";

function TodoList({
    todos = [],
    deleteTodoItem,
    markTodoCompleted,
    isLoading,
    loadTodos,
}) {
    useEffect(() => {
        loadTodos();
    }, []);

    const loadingMessage = <div>Loading todos .... </div>;
    const content = (
        <>
            {todos.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodoItem={deleteTodoItem}
                    onMarkItemComplete={markTodoCompleted}
                />
            ))}
        </>
    );

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    deleteTodoItem: id => dispatch(removeTodoRequest(id)),
    markTodoCompleted: todo => dispatch(todoCompletedRequest(todo)),
    loadTodos: () => dispatch(getAllTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
