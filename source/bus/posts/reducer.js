import { types } from "./types";
import { fromJS, List } from "immutable";

const initialState = List();

const postIdEqualsTo = (postId) => {
    return (post) => post.get("id") === postId;
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload);
        case types.CLEAR_POSTS:
            return state.clear();
        case types.CREATE_POST:
            return state.unshift(fromJS(action.payload));
        case types.REMOVE_POST:
            return state.filter((post) => post.get("id") !== action.payload);
        case types.LIKE_POST:
            return state.updateIn(
                [
                    state.findIndex(postIdEqualsTo(action.payload.postId)),
                    "likes"
                ],
                (likes) => likes.unshift(action.payload.liker)
            );
        case types.UNLIKE_POST:
            return state.updateIn(
                [
                    state.findIndex(postIdEqualsTo(action.payload.postId)),
                    "likes"
                ],
                (likes) => likes.shift()
            );

        default:
            return state;
    }
};
