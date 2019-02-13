// Core
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";

// Instruments
import { history } from "../source/init/middleware/core";
import "./theme/init";

// Intro
import App from "./navigation/App";
import { store } from "./init/store";

render(
    <Provider store = { store }>
        <Router history = { history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById("app")
);
