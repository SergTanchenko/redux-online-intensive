import { all, call } from "redux-saga/effects";

import { watchPosts } from "../bus/posts/saga/watchers";
import { watchSignup } from "../bus/auth/saga/watchers";

export function* rootSaga () {
    yield all([call(watchPosts), call(watchSignup)]);
}
