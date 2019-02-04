import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST/api";

import { uiActions } from "../../../ui/actions";
import { postActions } from "../../../posts/actions";

export function* fetchPosts () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data: post, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postActions.fillPosts(post));
    } catch (error) {
        yield put(uiActions.emitError(error, "fetchPosts watcher"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
