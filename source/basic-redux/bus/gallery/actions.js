// Types
import { SHOW_NEXT_PHOTO, SHOW_SELECTED_PHOTO } from "./types";

export const showNextPhoto = {
    type: SHOW_NEXT_PHOTO,
};

export const showSelectedPhoto = (selectedPhotoIndex) => {
    return {
        type:    SHOW_SELECTED_PHOTO,
        payload: selectedPhotoIndex,
    };
};
