import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";

import { api } from "../../../REST/api";

import { uiActions } from "../../ui/actions";
import { authActions } from "../actions";
import { profileActions } from "../../profile/actions";
import { signup } from "../saga/workers";

const signupAction = authActions.signupAsync(__.userProfile);

const saga = cloneableGenerator(signup)(signupAction);
let clone = null;

describe("signup saga: ", () => {
    describe("should pass until response received: ", () => {
        test("should dispatch 'startFetching' action", () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });
        test("should call a fetch request", () => {
            expect(saga.next().value).toEqual(
                apply(api, api.auth.signup, [__.userProfile])
            );
            clone = saga.clone();
        });
    });

    describe("should handle a 400 status response: ", () => {
        test("a fetch request should return a 400 status response", () => {
            expect(clone.next(__.fetchResponseFail400).value).toEqual(
                apply(__.fetchResponseFail400, __.fetchResponseFail400.json)
            );
        });
        test("should contain a response data object", () => {
            expect(clone.next(__.responseDataFail).value)
                .toMatchInlineSnapshot(`
Object {
  "@@redux-saga/IO": true,
  "PUT": Object {
    "action": Object {
      "error": true,
      "meta": "signup worker",
      "payload": [Error: TEST_ERROR_MESSAGE.],
      "type": "EMIT_ERROR",
    },
    "channel": null,
  },
}
`);
        });
        test("should dispatch 'stopFetching' action", () => {
            expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
        });
        test("should finish", () => {
            expect(clone.next().done).toBe(true);
        });
    });

    describe("should handle a 200 status response: ", () => {
        test("a fetch request should return a 200 status response", () => {
            expect(saga.next(__.fetchResponseSuccess).value).toEqual(
                apply(__.fetchResponseSuccess, __.fetchResponseSuccess.json)
            );
        });
        test("should dispatch 'fillProfile' action", () => {
            expect(saga.next(__.responseDataSuccess).value).toEqual(
                put(profileActions.fillProfile(__.userProfile))
            );
        });
        test("should dispatch 'authenticate' action", () => {
            expect(saga.next().value).toEqual(put(authActions.authenticate()));
        });
        test("should dispatch 'stopFetching' action", () => {
            expect(saga.next().value).toEqual(put(uiActions.stopFetching()));
        });
        test("should finish", () => {
            expect(saga.next().done).toBe(true);
        });
    });
});
