import { types } from "./types";
import { Map } from "immutable";

const initialState = Map({
    id:        "",
    firstName: "",
    lastName:  "",
    groupId:   "",
});

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_PROFILE:
            return state.merge(action.payload);
        case types.CLEAR_PROFILE:
            return state.clear();
        case types.UPDATE_AVATAR:
            return state.set("avatar", action.payload);

        default:
            return state;
    }
};
