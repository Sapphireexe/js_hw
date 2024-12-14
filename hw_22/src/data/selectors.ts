import { ISelectors } from './types';

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
};

export const AQA_SELECTORS: ISelectors = {
  loginInput: '#emailinput',
  passwordInput: '#passwordinput',
  loginButton: 'button[type="submit"]',
  h1Title: '//h1',
  sideUserText: '#dropdownUser1 > strong',
  spinner: '.spinner-border',
};
