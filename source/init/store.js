// Core
import { createStore } from "redux";

// Reducer
import { rootReducer } from "./rootReducer";
import { enhancers, sagaMiddleware } from "./middleware/core";
import { rootSaga } from "./rootSaga";

export const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);
