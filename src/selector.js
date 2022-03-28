import { createSelector } from "reselect";

export const getTodos = state => state.todos.data;
export const getTodoIsLoading = state => state.todos.isLoading;

export const getIncompleteTodos = createSelector(getTodos, todos =>
    todos.filter(todo => !todo.isCompleted)
);

export const getCompletedTodos = createSelector(getTodos, todos =>
    todos.filter(todo => todo.isCompleted)
);
