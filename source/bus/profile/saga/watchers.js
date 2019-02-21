import { takeEvery, all, call } from "redux-saga/effects";
import { types } from "../types";
import { updateName, updateAvatar, updatePassword } from "./workers";

export function* watchUpdateName () {
    yield takeEvery(types.UPDATE_NAME_ASYNC, updateName);
}

export function* watchUpdateAvatar () {
    yield takeEvery(types.UPDATE_AVATAR_ASYNC, updateAvatar);
}

export function* watchUpdatePassword () {
    yield takeEvery(types.UPDATE_PASSWORD_ASYNC, updatePassword);
}

export function* watchProfile () {
    yield all([
        call(watchUpdateName),
        call(watchUpdateAvatar),
        call(watchUpdatePassword)
    ]);
}
