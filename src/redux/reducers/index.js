import todos from "./TodoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos,
});

export default rootReducer;
