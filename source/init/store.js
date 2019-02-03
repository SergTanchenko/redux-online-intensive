// Core
import { createStore } from "redux";

// Reducer
import { rootReducer } from "./rootReducer";
import { enhancers } from "./middleware/core";

export const store = createStore(rootReducer, enhancers);
