import { put, apply, select } from "redux-saga/effects";

import { api } from "../../../../REST/api";

import { postActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* likePost ({ payload: id }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.like, [id]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        const liker = yield select((state) => {
            return state.profile.removeAll(["avatar", "token", "groupId"]);
        });

        yield put(postActions.likePost(liker, id));
    } catch (error) {
        yield put(uiActions.emitError(error, "likePost worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
