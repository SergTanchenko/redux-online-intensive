import { types } from "./types";

export const authActions = {
    signupAsync: (userData) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
};
