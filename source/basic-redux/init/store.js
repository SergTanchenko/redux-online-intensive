// Core
import { createStore, compose, applyMiddleware } from "redux";

// Reducer
import { rootReducer } from "./rootReducer";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware())
);
