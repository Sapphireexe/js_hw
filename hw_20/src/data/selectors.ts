import { ISelectors } from "./types"

export const SELECTORS_HEROKU: ISelectors = {
    formAuthentication: '[href="/login"]',
    usernameInput: '#username',
    passwordInput: '#password',
    loginButton: '.fa-sign-in',
    h2title: 'h2',
    successfulLoginMessage: '#flash',
    h4subheader: 'h4',
    logoutButton: '.icon-signout',
}

export const SELECTORS: ISelectors = {
    registerFormButton: '#registerOnLogin',
    usernameRegisterInput: '#userNameOnRegister',
    passwordRegisterInput: '#passwordOnRegister',
    registerButton: '#register',
    registerMessage: '#errorMessageOnRegister',
    usernameLoginInput: '#userName',
    passwordLoginInput: '#password',
    loginButton: '#submit',
    successfulLoginMessage: '#successMessage',
    loginErrorMessage: '#errorMessage',
}