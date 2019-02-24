// Core
import { createStore, combineReducers } from "redux";
import { routerReducer as router } from "react-router-redux";

//Reducers
import { authReducer as auth } from "../../bus/auth/reducer";
import { postsReducer as posts } from "../../bus/posts/reducer";
import { profileReducer as profile } from "../../bus/profile/reducer";
import { usersReducer as users } from "../../bus/users/reducer";
import { uiReducer as ui } from "../../bus/ui/reducer";
import { formsReducer as forms } from "../../bus/forms/reducer";

import { store } from "../store";

const referenceReducer = combineReducers({
    auth,
    posts,
    profile,
    users,
    ui,
    forms,
    router,
});

const referenceStore = createStore(referenceReducer);

describe("store: ", () => {
    test("should have valid state shape", () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
