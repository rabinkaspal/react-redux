import { actionTypes as types } from "../actions/actionTypes";

const initialState = {
    data: [],
    isLoading: false,
};

const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.CREATE_TODO_ITEM:
            const todo = payload;
            return { ...state, data: state.data.concat(todo) };

        case types.DELETE_TODO_ITEM:
            const todoItem = payload;
            return {
                ...state,
                data: state.data.filter(item => item.id !== todoItem.id),
            };

        case types.MARK_TODO_COMPLETED:
            const updatedTodo = payload;
            console.log(updatedTodo);
            return {
                ...state,
                data: state.data.map(item => {
                    return item.id === updatedTodo.id ? updatedTodo : item;
                }),
            };

        case types.LOAD_TODOS_SUCCESS:
            const todos = payload;
            return { ...state, isLoading: false, data: todos };

        case types.LOAD_TODOS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            };

        case types.LOAD_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default todos;
