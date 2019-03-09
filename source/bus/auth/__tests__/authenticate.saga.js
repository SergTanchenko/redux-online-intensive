import { apply } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { actions } from "react-redux-form";

import { api } from "../../../REST/api";

import { authenticate } from "../../auth/saga/workers";
import { uiActions } from "../../ui/actions";
import { authActions } from "../../auth/actions";
import { profileActions } from "../../profile/actions";

describe("authenticate saga: ", () => {
    test("should handle a 200 status response: ", async () => {
        await expectSaga(authenticate)
            .put(uiActions.startFetching())
            .provide([
                [apply(api, api.auth.authenticate), __.fetchResponseSuccess]
            ])
            .put(profileActions.fillProfile(__.userProfile))
            .put(
                actions.change(
                    "forms.user.profile.firstName",
                    __.userProfile.firstName
                )
            )
            .put(
                actions.change(
                    "forms.user.profile.lastName",
                    __.userProfile.lastName
                )
            )
            .put(authActions.authenticate())
            .put(uiActions.stopFetching())
            .put(authActions.initialize())
            .run();
    });
});
