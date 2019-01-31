import { FILL_POSTS } from "./types";
import { fromJS, List } from "immutable";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload);

        default:
            return state;
    }
};
