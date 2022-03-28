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
import {
    getTodoIsLoading,
    getCompletedTodos,
    getIncompleteTodos,
} from "../selector";

function TodoList({
    incompleteTodos,
    completedTodos,
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
            {incompleteTodos.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodoItem={deleteTodoItem}
                    onMarkItemComplete={markTodoCompleted}
                />
            ))}
            <h3>Completed Items</h3>
            <hr />
            {completedTodos.map(todo => (
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
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodoIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
    deleteTodoItem: id => dispatch(removeTodoRequest(id)),
    markTodoCompleted: todo => dispatch(todoCompletedRequest(todo)),
    loadTodos: () => dispatch(getAllTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
