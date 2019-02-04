import { types } from "./types";
import { api } from "../../REST/api";

export const postActions = {
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },

    fetchPostsAsync: () => async (dispatch) => {
        dispatch({
            type: types.FETCH_POSTS_ASYNC,
        });

        const response = await api.posts.fetch();
        const result = await response.json();

        dispatch(postActions.fillPosts(result.data));
    },

    createPost: (post) => {
        return {
            type:    types.CREATE_POST,
            payload: post,
        };
    },

    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
};
