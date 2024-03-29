import { put, apply } from "redux-saga/effects";

import { api } from "../../../../REST/api";

import { usersActions } from "../../actions";
import { uiActions } from "../../../ui/actions";

export function* fetchUsers () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.users.fetch);
        const { data: users, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(usersActions.fillUsers(users));
    } catch (error) {
        yield put(uiActions.emitError(error, "worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
