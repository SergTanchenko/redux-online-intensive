import { compose, applyMiddleware } from "redux";

import { createBrowserHistory } from "history";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";

import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { customThunk } from "./custom";

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => "#139BFE",
        prevState: () => "#1C5FAF",
        action:    () => "#149945",
        nextState: () => "#A47104",
        error:     () => "#ff0005",
    },
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware, customThunk];

if (__DEV__) {
    middleware.push(logger);
}

const enhancers = composeEnhancers(applyMiddleware(...middleware));

export { enhancers, sagaMiddleware, history };
