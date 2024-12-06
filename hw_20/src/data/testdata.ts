import { ILoggedPageObject } from "./types";
import { ITestData } from "./types";
import { REGISTER_MESSAGES, LOGIN_MESSAGES } from "./messages";

const VALID_CREDENTIALS = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
}

const LOGGED_PAGE_ELEMENTS: ILoggedPageObject = {
    title: 'Secure Area',
    message: 'You logged into a secure area!',
    subheader: 'Welcome to the Secure Area. When you are done click logout below.',
    logoutButton: 'Logout',
}

const VALID_REGISTRATION_DATA: ITestData[] = [
    {
        testName: 'Should register with min length',
        login: 'tom',
        password: 'Password',
        message: REGISTER_MESSAGES.successfulRegistration,
    },
    {
        testName: 'Should register with middle length',
        login: 'Benedict Cumberbatch 1',
        password: ' P@$$w0rd 123 ',
        message: REGISTER_MESSAGES.successfulRegistration,
    },
    {
        testName: 'Should register with max length',
        login: 'L0g1n 1try-_everyth1ng.,()ABC #$% weird!',
        password: 'l0nG p@ssword0  -#$%',
        message: REGISTER_MESSAGES.successfulRegistration,
    }
];

const INVALID_REGISTRATION_DATA: ITestData[] = [
    {
        testName: "Should not register with prefix space in login",
        login: " test",
        password: VALID_REGISTRATION_DATA[0].password,
        message: REGISTER_MESSAGES.prefixSpaceInLoginError,
    },
    {
        testName: "Should not register with spaces only in login",
        login: "     ",
        password: VALID_REGISTRATION_DATA[0].password,
        message: REGISTER_MESSAGES.spacesOnlyInLoginError,
    },
    {
        testName: "Should not register with login with length below minimal",
        login: "Ab",
        password: VALID_REGISTRATION_DATA[0].password,
        message: REGISTER_MESSAGES.lengthBelowMinimumLoginError,
    },
    {
        testName: "Should not register with login that has already taken",
        login: "takenLogin",
        password: VALID_REGISTRATION_DATA[0].password,
        message: REGISTER_MESSAGES.alreadyRegisteredLogin,
    },
    {
        testName: "Should not register with password with no lower cases",
        login: VALID_REGISTRATION_DATA[0].login,
        password: "PASSWORD123",
        message: REGISTER_MESSAGES.noLowerCasePasswordError,
    },
    {
        testName: "Should not register with password with no upper cases",
        login: VALID_REGISTRATION_DATA[0].login,
        password: "password123",
        message: REGISTER_MESSAGES.noUpperCasePasswordError,
    },
    {
        testName: "Should not register with spaces only in password",
        login: VALID_REGISTRATION_DATA[0].login,
        password: "            ",
        message: REGISTER_MESSAGES.spacesOnlyInPasswordError,
    },
    {
        testName: "Should not register with password with length below minimal",
        login: VALID_REGISTRATION_DATA[0].login,
        password: "Passwor",
        message: REGISTER_MESSAGES.lengthBelowMinimumPasswordError,
    },
    {
        testName: "Should not register with empty data",
        login: "",
        password: "",
        message: REGISTER_MESSAGES.emptyLoginAndPasswordError,
    }
];

const VALID_LOGIN_DATA: ITestData[] = [
    {
        testName: 'Should login with min length',
        login: 'tom',
        password: 'Password',
        message: LOGIN_MESSAGES.successfulLogin,
    },
    {
        testName: 'Should login with middle length',
        login: 'Benedict Cumberbatch 1',
        password: ' P@$$w0rd 123 ',
        message: LOGIN_MESSAGES.successfulLogin,
    },
    {
        testName: 'Should login with max length',
        login: 'L0g1n 1try-_everyth1ng.,()ABC #$% weird!',
        password: 'l0nG p@ssword0  -#$%',
        message: LOGIN_MESSAGES.successfulLogin,
    }
];

const INVALID_LOGIN_DATA: ITestData[] = [
    {
        testName: "Should not login with nonexistent login",
        login: VALID_LOGIN_DATA[0].login + 123,
        password: VALID_LOGIN_DATA[0].password,
        message: LOGIN_MESSAGES.nonExistentUserError,
    },
    {
        testName: "Should not login with invalid password",
        login: VALID_LOGIN_DATA[0].login,
        password: VALID_LOGIN_DATA[0].password + 123,
        message: LOGIN_MESSAGES.invalidPasswordError,
    },
    {
        testName: "Should not login with case sensitive password",
        login: VALID_LOGIN_DATA[0].login,
        password: VALID_LOGIN_DATA[0].password.charAt(0).toLowerCase() + VALID_LOGIN_DATA[0].password.slice(1).toUpperCase(),
        message: LOGIN_MESSAGES.caseSensitivePasswordError,
    },
    {
        testName: "Should not login with empty data",
        login: "",
        password: "",
        message: LOGIN_MESSAGES.emptyLoginAndPasswordError,
    },
    {
        testName: "Should not login with password from one user and username from another user",
        login: VALID_LOGIN_DATA[0].login,
        password: VALID_LOGIN_DATA[1].password,
        message: LOGIN_MESSAGES.userWithPasswordFromAnotherUserError,
    }
];

export {VALID_CREDENTIALS, LOGGED_PAGE_ELEMENTS, VALID_REGISTRATION_DATA, INVALID_REGISTRATION_DATA, VALID_LOGIN_DATA, INVALID_LOGIN_DATA}