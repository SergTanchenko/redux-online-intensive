// Core
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducer
import { rootReducer } from "./rootReducer";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [thunk];

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);
