import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST/api";

import { postActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* createPost ({ payload: comment }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.create, [comment]);
        const { data: post, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postActions.createPost(post));
    } catch (error) {
        console.log(" -> createPost worker", error);
    } finally {
        yield put(uiActions.stopFetching());
    }
}
