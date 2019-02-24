import { fromJS, List } from "immutable";

import { usersReducer } from "./../reducer";
import { usersActions } from "./../actions";

const initialState = List();

describe("test users reducer: ", () => {
    test("should return initialState by default", () => {
        expect(usersReducer(void 0, {})).toEqual(initialState);
    });
    test("should handle fillUsers action", () => {
        expect(usersReducer(void 0, usersActions.fillUsers(__.users))).toEqual(
            fromJS(__.users)
        );
    });
    test("should handle clearUsers action", () => {
        expect(usersReducer(void 0, usersActions.clearUsers())).toEqual(
            initialState
        );
    });
});
