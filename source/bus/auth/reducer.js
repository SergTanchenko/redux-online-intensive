import { types } from "./types";
import { Map } from "immutable";

const initialState = Map({
    isAuthenticated: false,
    isInitialized:   false,
});

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return state.set("isAuthenticated", true);
        case types.INITIALIZE:
            return state.set("isInitialized", true);
        default:
            return state;
    }
};
