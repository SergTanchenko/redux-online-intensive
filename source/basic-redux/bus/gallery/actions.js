// Types
import { SHOW_NEXT_PHOTO, SHOW_SELECTED_PHOTO, SHOW_PREV_PHOTO } from "./types";

export const showPrevPhoto = {
    type: SHOW_PREV_PHOTO,
};

export const showNextPhoto = {
    type: SHOW_NEXT_PHOTO,
};

export const showSelectedPhoto = (selectedPhotoIndex) => {
    return {
        type:    SHOW_SELECTED_PHOTO,
        payload: selectedPhotoIndex,
    };
};
