// Mocks
import { LocalStorage } from "./mocks/localStorage";
import { fetch } from "./mocks/fetch";

const successMessage = "TEST_SUCCESS_MESSAGE.";
const errorMessage = "TEST_ERROR_MESSAGE.";
const token = "TEST_TOKEN";
const error = new Error(errorMessage);

const meta = {
    prop1: "value1",
};

const newName = {
    firstName: "Jimmy",
    lastName:  "Garry",
};

const newAvatar = ["avatar"];
const newPassword = {
    oldPassword: 12345,
    newPassword: 123456,
};

const userProfile = {
    id:        "TEST_ID",
    avatar:    "TEST_AVATAR",
    firstName: "Walter",
    lastName:  "White",
    token,
};

const users = [
    {
        id:        "111",
        firstName: "Vincenzo",
        lastName:  "Smith",
        avatar:    "some.jpg",
    },
    {
        id:        "222",
        firstName: "Danika",
        lastName:  "Volkman",
        avatar:    "some.jpg",
    }
];

const credentials = {
    email:    "test@email.com",
    password: "1111",
    remember: true,
};

const responseDataSuccess = {
    data:    userProfile,
    message: successMessage,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = "https://www.url.com";

global.__ = {
    userProfile,
    users,
    errorMessage,
    token,
    error,
    meta,
    responseDataSuccess,
    fetchResponseSuccess204,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    newName,
    newAvatar,
    newPassword,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
