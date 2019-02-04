import { compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

export { enhancers, sagaMiddleware };
