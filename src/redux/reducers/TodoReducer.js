import { actionTypes as types } from "../actions/actionTypes";

export const isLoading = (state = false, action) => {
    switch (action.type) {
        case types.LOAD_TODOS_IN_PROGRESS:
            return true;

        case types.LOAD_TODOS_FAILURE:
        case types.LOAD_TODOS_SUCCESS:
            return false;

        default:
            return state;
    }
};

const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case types.CREATE_TODO_ITEM:
            const todo = payload;
            return state.concat(todo);

        case types.DELETE_TODO_ITEM:
            const todoItem = payload;
            return state.filter(item => item.id !== todoItem.id);

        case types.MARK_TODO_COMPLETED:
            const updatedTodo = payload;
            console.log(updatedTodo);
            return state.map(item => {
                return item.id === updatedTodo.id ? updatedTodo : item;
            });

        // const sorter = (a, b) => {
        //     if (a.isCompleted) {
        //         return 1;
        //     }
        //     if (b.isCompleted) {
        //         return -1;
        //     }
        //     return a.isCompleted > b.isCompleted ? -1 : 1;
        // };
        // s.sort(sorter);

        // return s;

        case types.LOAD_TODOS_SUCCESS:
            const todos = payload;
            return todos;

        default:
            return state;
    }
};

export default todos;
