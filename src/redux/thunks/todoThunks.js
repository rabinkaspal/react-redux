import { async } from "regenerator-runtime";
import {
    createTodo,
    loadTodosFailure,
    loadTodosInProgress,
    loadTodosSuccess,
    removeTodo,
    markTodoCompleted,
} from "../actions/TodoActions";

export function displayAlert(msg) {
    return function (dispatch) {
        alert(msg);
        console.error(msg);
    };
}

export const getAllTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const res = await fetch("http://localhost:8080/todos");
        const todos = await res.json();

        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
};

export const addTodoRequest = text => async dispatch => {
    try {
        const todoText = JSON.stringify({ text });
        const response = await fetch("http://localhost:8080/todos", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "post",
            body: todoText,
        });

        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
};

export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: "delete",
        });

        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
};

export const todoCompletedRequest = id => async (dispatch, getState) => {
    try {
        const res = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: "post",
        });
        const completedTodo = await res.json();

        dispatch(markTodoCompleted(completedTodo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
};
