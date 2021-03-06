import { takeEvery, all, call } from "redux-saga/effects";
import { types } from "../types";
import { signup } from "./workers/signup";
import { login } from "./workers/login";
import { logout } from "./workers/logout";
import { authenticate } from "./workers/authenticate";
import { initialize } from "./workers/initialize";

export function* watchSignup () {
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

export function* watchLogin () {
    yield takeEvery(types.LOGIN_ASYNC, login);
}

export function* watchLogout () {
    yield takeEvery(types.LOGOUT_ASYNC, logout);
}

export function* watchAuthenticate () {
    yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate);
}

export function* watchInitialize () {
    yield takeEvery(types.INITIALIZE_ASYNC, initialize);
}

export function* watchAuth () {
    yield all([
        call(watchSignup),
        call(watchLogin),
        call(watchLogout),
        call(watchAuthenticate),
        call(watchInitialize)
    ]);
}
