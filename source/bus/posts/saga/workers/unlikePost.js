import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST/api";

import { postActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* unlikePost ({ payload: id }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.like, [id]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(postActions.unlikePost(id));
    } catch (error) {
        yield put(uiActions.emitError(error, "unlikePost worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
