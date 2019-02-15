import { takeEvery, all, call } from "redux-saga/effects";
import { types } from "../types";
import { createPost } from "./workers/createPost";
import { removePost } from "./workers/removePost";
import { likePost } from "./workers/likePost";
import { fetchPosts } from "./workers/fetchPosts";

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchRemovePost () {
    yield takeEvery(types.REMOVE_POST_ASYNC, removePost);
}

export function* watchLikePost () {
    yield takeEvery(types.LIKE_POST_ASYNC, likePost);
}

export function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchPosts () {
    yield all([
        call(watchCreatePost),
        call(watchRemovePost),
        call(watchLikePost),
        call(watchFetchPosts)
    ]);
}
