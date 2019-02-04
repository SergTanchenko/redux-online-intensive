import { types } from "./types";
import { initialFieldState } from "react-redux-form";

const initialState = {};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TYPE:
            return state;

        default:
            return state;
    }
};
