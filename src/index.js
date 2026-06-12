import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store/store";

import CounterPage from "./pages/counter/CounterPage";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <Provider store={store}>
        <CounterPage />
    </Provider>
);