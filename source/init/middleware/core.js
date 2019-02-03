import { compose, applyMiddleware } from "redux";
import { customThunk } from "./custom";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [customThunk];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

export { enhancers };
