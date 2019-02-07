import { takeEvery, all, call } from "redux-saga/effects";
import { types } from "../types";
import { signupWorker } from "./workers/signupWorker";
import { loginWorker } from "./workers/loginWorker";

export function* watchSignupWorker () {
    yield takeEvery(types.SIGNUP_ASYNC, signupWorker);
}

export function* watchLoginWorker () {
    yield takeEvery(types.LOGIN, loginWorker);
}

export function* watchSignup () {
    yield all([call(watchSignupWorker), call(watchLoginWorker)]);
}
