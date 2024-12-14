import { IMessages } from './types';

const REGISTER_MESSAGES: IMessages = {
  successfulRegistration:
    'Successfully registered! Please, click Back to return on login page',
  prefixSpaceInLoginError:
    'Prefix and postfix spaces are not allowed is username',
  postfixSpaceInLoginError:
    'Prefix and postfix spaces are not allowed is username',
  spacesOnlyInLoginError:
    'Prefix and postfix spaces are not allowed is username',
  emptyLoginError: 'Username is required',
  lengthBelowMinimumLoginError: 'Username should contain at least 3 characters',
  lengthAboveMaximumLoginError: "Username can't exceed 40 characters",
  alreadyRegisteredLogin: 'Username is in use',
  noLowerCasePasswordError:
    'Password should contain at least one character in lower case',
  noUpperCasePasswordError:
    'Password should contain at least one character in upper case',
  spacesOnlyInPasswordError: 'Password is required',
  emptyPasswordError: 'Password is required',
  lengthBelowMinimumPasswordError:
    'Password should contain at least 8 characters',
  lengthAboveMaximumPasswordError: "Password can't exceed 20 characters",
  emptyLoginAndPasswordError: 'Please, provide valid data',
};

const LOGIN_MESSAGES: IMessages = {
  successfulLogin: 'Hello, ',
  emptyLoginError: 'Username is required',
  nonExistentUserError: 'Invalid credentials',
  caseSensitiveLoginError: 'Invalid credentials',
  emptyPasswordError: 'Password is required',
  invalidPasswordError: 'Invalid credentials',
  caseSensitivePasswordError: 'Invalid credentials',
  emptyLoginAndPasswordError: 'Credentials are required',
  userWithPasswordFromAnotherUserError: 'Invalid credentials',
};

const AQA_LOGIN_MESSAGES: IMessages = {
  userLogin: 'AQA User',
};

export { REGISTER_MESSAGES, LOGIN_MESSAGES, AQA_LOGIN_MESSAGES };
