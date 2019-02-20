import { combineForms } from "react-redux-form";

export const formsReducer = combineForms(
    {
        users: {
            profile: {
                firstName: "",
                lastName:  "",
                avatar:    [],
            },
        },
    },
    "forms"
);
