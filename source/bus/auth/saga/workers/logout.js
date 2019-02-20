import { put, apply } from "redux-saga/effects";
import { actions } from "react-redux-form";
import { replace } from "react-router-redux";

import { api } from "../../../../REST/api";
import { uiActions } from "../../../ui/actions";
import { authActions } from "../../actions";
import { postActions } from "../../../posts/actions";
import { profileActions } from "../../../profile/actions";
import { usersActions } from "../../../users/actions";
import { book } from "../../../../navigation/book";

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
        yield apply(localStorage, localStorage.removeItem, ["token"]);
        yield apply(localStorage, localStorage.removeItem, ["remember"]);
        yield put(postActions.clearPosts());
        yield put(profileActions.clearProfile());
        yield put(actions.reset("forms.user"));
        yield put(uiActions.stopFetching());
        yield put(usersActions.clearUsers());
        yield put(authActions.logout());
        yield put(replace(book.login));
    }
}
