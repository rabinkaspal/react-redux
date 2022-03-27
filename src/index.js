import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "./redux/store";

ReactDOM.render(
    <ReduxProvider store={configureStore()}>
        <App />
    </ReduxProvider>,
    document.getElementById("root")
);
