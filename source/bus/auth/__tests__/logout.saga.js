import { apply } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { actions } from "react-redux-form";
import { replace } from "react-router-redux";

import { logout } from "../../auth/saga/workers";
import { api } from "../../../REST/api";
import { uiActions } from "../../ui/actions";
import { authActions } from "../actions";
import { postActions } from "../../posts/actions";
import { profileActions } from "../../profile/actions";
import { usersActions } from "../../users/actions";
import { book } from "../../../navigation/book";

describe("logout saga: ", () => {
    test("should complete 204 status response", async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([
                [apply(api, api.auth.logout), __.fetchResponseSuccess204]
            ])
            .apply(localStorage, localStorage.removeItem, ["token"])
            .apply(localStorage, localStorage.removeItem, ["remember"])
            .put(postActions.clearPosts())
            .put(profileActions.clearProfile())
            .put(actions.reset("forms.user"))
            .put(uiActions.stopFetching())
            .put(usersActions.clearUsers())
            .put(authActions.logout())
            .put(replace(book.login))

            .run();
    });

    test("should complete 400 status response scenario: ", async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.logout), __.fetchResponseFail400]])
            .put(uiActions.emitError(__.error, "logout worker"))
            .apply(localStorage, localStorage.removeItem, ["token"])
            .apply(localStorage, localStorage.removeItem, ["remember"])
            .put(postActions.clearPosts())
            .put(profileActions.clearProfile())
            .put(actions.reset("forms.user"))
            .put(uiActions.stopFetching())
            .put(usersActions.clearUsers())
            .put(authActions.logout())
            .put(replace(book.login))

            .run();
    });
});
