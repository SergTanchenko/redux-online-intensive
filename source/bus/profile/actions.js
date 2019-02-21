import { types } from "./types";

export const profileActions = {
    // Sync
    fillProfile: (profile) => {
        return {
            type:    types.FILL_PROFILE,
            payload: profile,
        };
    },
    clearProfile: () => {
        return {
            type: types.CLEAR_PROFILE,
        };
    },
    updateAvatar: (avatarUrl) => {
        return {
            type:    types.UPDATE_AVATAR,
            payload: avatarUrl,
        };
    },

    // Async
    updateNameAsync: (newName) => {
        return {
            type:    types.UPDATE_NAME_ASYNC,
            payload: newName,
        };
    },
    updateAvatarAsync: (newAvatar) => {
        return {
            type:    types.UPDATE_AVATAR_ASYNC,
            payload: newAvatar,
        };
    },
    updatePasswordAsync: (passwordInfo) => {
        return {
            type:    types.UPDATE_PASSWORD_ASYNC,
            payload: passwordInfo,
        };
    },
};
