import { takeEvery, all, call } from "redux-saga/effects";
import { types } from "../types";
import { signupWorker } from "./workers/signupWorker";

export function* watchSignupWorker () {
    yield takeEvery(types.SIGNUP_ASYNC, signupWorker);
}

export function* watchSignup () {
    yield all([call(watchSignupWorker)]);
}
