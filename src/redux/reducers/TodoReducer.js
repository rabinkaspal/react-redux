import { actionTypes as types } from "../actions/actionTypes";

const todos = (state = [], action) => {
    const { type, payload } = action;
    const todo = payload;
    switch (type) {
        case types.CREATE_TODO_ITEM:
            return state.concat(payload);
            break;

        case types.DELETE_TODO_ITEM:
            return state.filter(item => item.title !== todo.title);
            break;

        case types.MARK_TODO_COMPLETED:
            return state.map(item => {
                return item.title === todo.title
                    ? { ...item, isCompleted: true }
                    : item;
            });

            break;

        default:
            return state;
    }
};

export default todos;
