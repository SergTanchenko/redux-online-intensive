import { profileReducer } from "./../reducer";
import { profileActions } from "./../actions";

describe("test profile reducer: ", () => {
    test("should return initialState by default", () => {
        expect(profileReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "groupId": "",
}
`);
    });

    test("should handle FILL_PROFILE action", () => {
        expect(
            profileReducer(void 0, profileActions.fillProfile(__.userProfile))
        ).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "groupId": "",
  "avatar": "TEST_AVATAR",
  "token": "TEST_TOKEN",
}
`);
    });

    test("should handle CLEAR_PROFILE action", () => {
        expect(
            profileReducer(void 0, profileActions.clearProfile())
        ).toMatchInlineSnapshot(`Immutable.Map {}`);
    });

    test("should handle UPDATE_AVATAR action", () => {
        expect(profileReducer(void 0, profileActions.updateAvatar(__.url)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "groupId": "",
  "avatar": "https://www.url.com",
}
`);
    });
});
