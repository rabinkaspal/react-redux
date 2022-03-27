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
            const s = state.map(item => {
                return item.title === todo.title
                    ? { ...item, isCompleted: true }
                    : item;
            });

            const sorter = (a, b) => {
                if (a.isCompleted) {
                    return 1;
                }
                if (b.isCompleted) {
                    return -1;
                }
                return a.isCompleted > b.isCompleted ? -1 : 1;
            };
            s.sort(sorter);

            return s;

            break;

        default:
            return state;
    }
};

export default todos;
