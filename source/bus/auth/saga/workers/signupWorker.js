import { put, apply } from "redux-saga/effects";
import { delay } from "redux-saga";

import { api } from "../../../../REST/api";

import { uiActions } from "../../../ui/actions";
import { authActions } from "../../../auth/actions";

export function* signupWorker ({ payload: userInfo }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.signup, [userInfo]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        console.log("signupWorker -> profile: ", profile);

        yield put(authActions.authenticate());
    } catch (error) {
        console.log(error);
        yield put(uiActions.emitError(error, "signup worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
