import todos, { isLoading } from "./TodoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos,
    isLoading,
});

export default rootReducer;
