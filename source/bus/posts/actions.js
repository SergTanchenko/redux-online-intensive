import { FILL_POSTS, FETCH_POSTS_ASYNC } from "./types";

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS_ASYNC,
    };
};

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};
