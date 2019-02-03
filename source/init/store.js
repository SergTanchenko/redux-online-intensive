// Core
import { createStore } from "redux";
import thunk from "redux-thunk";

// Reducer
import { rootReducer } from "./rootReducer";
import { enhancers } from "./middleware/core";

export const store = createStore(rootReducer, enhancers);
