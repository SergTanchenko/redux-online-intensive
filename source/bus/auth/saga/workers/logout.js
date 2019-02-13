import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST/api";

import { uiActions } from "../../../ui/actions";
import { authActions } from "../../actions";

export function* logout () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.logout);

        if (response.status !== 204) {
            const { data: message } = yield apply(response, response.json);

            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error, "logout worker"));
    } finally {
        yield put(uiActions.stopFetching());
        yield put(authActions.logout());
    }
}
