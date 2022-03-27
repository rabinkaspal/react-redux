import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { removeTodo } from "../redux/actions/TodoActions";
import { connect } from "react-redux";

function TodoList({ todos }) {
    return (
        <div className="list-wrapper">
            {todos.map(todo => (
                <TodoListItem key={todo.title} todo={todo} />
            ))}
        </div>
    );
}

// const mapStateToProps = state => ({
//     todos: state.todos,
// });

// const mapDispatchToProps = dispatch => ({
//     deleteTodoItem: todo => dispatch(removeTodo(todo)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;
