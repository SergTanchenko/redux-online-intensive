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
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        };
    },
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        };
    },
    initializeAsync: () => {
        return {
            type: types.INITIALIZE_ASYNC,
        };
    },
};
