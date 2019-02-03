import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [thunk];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

export { enhancers };
