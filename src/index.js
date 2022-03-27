import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "./redux/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
            <App />
        </PersistGate>
    </ReduxProvider>,
    document.getElementById("root")
);
