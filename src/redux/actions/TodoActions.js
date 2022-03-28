import { actionTypes as types } from "./actionTypes";

export const createTodo = todo => {
    return { type: types.CREATE_TODO_ITEM, payload: todo };
};

export const removeTodo = todo => {
    return { type: types.DELETE_TODO_ITEM, payload: todo };
};

export const markTodoCompleted = todo => {
    return { type: types.MARK_TODO_COMPLETED, payload: todo };
};

export const loadTodosInProgress = () => {
    return { type: types.LOAD_TODOS_IN_PROGRESS };
};

export const loadTodosSuccess = todos => ({
    type: types.LOAD_TODOS_SUCCESS,
    payload: todos,
});

export const loadTodosFailure = () => {
    return { type: types.LOAD_TODOS_FAILURE };
};
