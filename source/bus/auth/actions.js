import { types } from "./types";

export const authActions = {
    signupAsync: (userData) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
    login: (credentials) => {
        return {
            type:    types.LOGIN,
            payload: credentials,
        };
    },
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
};
