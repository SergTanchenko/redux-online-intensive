import { profileActions } from "./../actions";

describe("profile actions: ", () => {
    test("fillProfile", () => {
        expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot();
    });

    test("clearProfile", () => {
        expect(profileActions.clearProfile()).toMatchSnapshot();
    });
    test("updateAvatar", () => {
        expect(profileActions.updateAvatar(__.url)).toMatchSnapshot();
    });
    test("updateNameAsync", () => {
        expect(profileActions.updateNameAsync("NEW_NAME")).toMatchSnapshot();
    });
    test("updateAvatarAsync", () => {
        expect(
            profileActions.updateAvatarAsync(__.newAvatar)
        ).toMatchSnapshot();
    });
    test("updatePasswordAsync", () => {
        expect(
            profileActions.updatePasswordAsync(__.newPassword)
        ).toMatchSnapshot();
    });
});
