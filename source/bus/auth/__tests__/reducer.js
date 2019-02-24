import { authActions } from "./../actions";
import { authReducer } from "./../reducer";
import { Map } from "immutable";

const initialState = Map({
    isAuthenticated: false,
    isInitialized:   false,
});

describe("test auth reducer: ", () => {
    test("should return initialState by default", () => {
        expect(authReducer(undefined, {})).toEqual(initialState);
    });

    test("should handle AUTHENTICATE action", () => {
        expect(authReducer(undefined, authActions.authenticate())).toEqual(
            initialState.set("isAuthenticated", true)
        );
    });

    test("should handle INITIALIZE action", () => {
        expect(authReducer(undefined, authActions.initialize())).toEqual(
            initialState.set("isInitialized", true)
        );
    });

    test("should handle LOGOUT action", () => {
        expect(authReducer(undefined, authActions.logout())).toEqual(
            initialState.set("isAuthenticated", false)
        );
    });
});
