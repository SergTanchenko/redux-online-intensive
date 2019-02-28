import { uiActions } from "./../actions";

describe("ui actions: ", () => {
    test("startFetching", () => {
        expect(uiActions.startFetching()).toMatchSnapshot();
    });
    test("stopFetching", () => {
        expect(uiActions.stopFetching()).toMatchSnapshot();
    });
    test("emitError with meta", () => {
        expect(uiActions.emitError(__.error, __.meta)).toMatchSnapshot();
    });
    test("emitError without meta", () => {
        expect(uiActions.emitError(__.error)).toMatchSnapshot();
    });
    test("setOnlineState", () => {
        expect(uiActions.setOnlineState()).toMatchSnapshot();
    });
    test("setOfflineState", () => {
        expect(uiActions.setOfflineState()).toMatchSnapshot();
    });
});
