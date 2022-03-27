import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { markTodoCompleted, removeTodo } from "../redux/actions/TodoActions";
import { connect } from "react-redux";

function TodoList({ todos = [], deleteTodoItem, markTodoCompleted }) {
    return (
        <>
            {todos.map(todo => (
                <TodoListItem
                    key={todo.title}
                    todo={todo}
                    onDeleteTodoItem={deleteTodoItem}
                    onMarkItemComplete={markTodoCompleted}
                />
            ))}
        </>
    );
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    deleteTodoItem: todo => dispatch(removeTodo(todo)),
    markTodoCompleted: todo => dispatch(markTodoCompleted(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
