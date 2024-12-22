import { SELECTORS } from '../data/selectors';
import {
  VALID_REGISTRATION_DATA,
  INVALID_REGISTRATION_DATA,
  VALID_LOGIN_DATA,
  INVALID_LOGIN_DATA,
} from '../data/testdata';

describe('[UI] Registering', () => {
  before(async function () {
    await browser.maximizeWindow();
  });

  beforeEach(async function () {
    await browser.url('https://anatoly-karpovich.github.io/demo-login-form/');
    const registrationFormButton = $(SELECTORS.registerFormButton);
    await registrationFormButton.click();
  });

  afterEach(async function () {
    await browser.execute(() => {
      localStorage.clear();
    });
  });

  context('Positive scenarios', async function () {
    VALID_REGISTRATION_DATA.forEach((data) => {
      it(`${data.testName}`, async function () {
        await $(SELECTORS.usernameRegisterInput).setValue(data.login);
        await $(SELECTORS.passwordRegisterInput).setValue(data.password);
        const registerButton = $(SELECTORS.registerButton);
        await registerButton.click();
        const actualMessage = await $(SELECTORS.registerMessage).getText();
        expect(actualMessage).toEqual(data.message);
      });
    });
  });

  context('Negative scenarios', async function () {
    INVALID_REGISTRATION_DATA.forEach((data) => {
      if (
        data.testName !==
          'Should not register with login that has already taken' &&
        !data.testName.includes('with length above maximum')
      ) {
        it(`${data.testName}`, async function () {
          await $(SELECTORS.usernameRegisterInput).setValue(data.login);
          await $(SELECTORS.passwordRegisterInput).setValue(data.password);
          const registerButton = $(SELECTORS.registerButton);
          await registerButton.click();
          const actualMessage = await $(SELECTORS.registerMessage).getText();
          expect(actualMessage).toEqual(data.message);
        });
      } else if (
        data.testName ===
        'Should not register with login that has already taken'
      ) {
        it(`${data.testName}`, async function () {
          await $(SELECTORS.usernameRegisterInput).setValue(data.login);
          await $(SELECTORS.passwordRegisterInput).setValue(data.password);
          const registerButton = $(SELECTORS.registerButton);
          await registerButton.click();
          await $(SELECTORS.usernameRegisterInput).setValue(data.login);
          await $(SELECTORS.passwordRegisterInput).setValue(data.password);
          await registerButton.click();
          const actualMessage = await $(SELECTORS.registerMessage).getText();
          expect(actualMessage).toEqual(data.message);
        });
      } else if (data.testName.includes('with length above maximum')) {
        it(`${data.testName}`, async function () {
          await browser.execute(async function () {
            const username = document.getElementById('userNameOnRegister');
            username?.removeAttribute('maxlength');
            const password = document.getElementById('passwordOnRegister');
            password?.removeAttribute('maxlength');
          });
          await $(SELECTORS.usernameRegisterInput).setValue(data.login);
          await $(SELECTORS.passwordRegisterInput).setValue(data.password);
          const registerButton = $(SELECTORS.registerButton);
          await registerButton.click();
          const actualMessage = await $(SELECTORS.registerMessage).getText();
          expect(actualMessage).toEqual(data.message);
        });
      }
    });
  });
});

describe('[UI] Login', () => {
  before(async function () {
    await browser.maximizeWindow();
  });

  beforeEach(async function () {
    await browser.url('https://anatoly-karpovich.github.io/demo-login-form/');
    VALID_LOGIN_DATA.forEach(async (data) => {
      await browser.execute((data) => {
        localStorage.setItem(
          `${data.login}`,
          JSON.stringify({ name: data.login, password: data.password }),
        );
      }, data);
    });
  });

  afterEach(async function () {
    await browser.execute(() => {
      localStorage.clear();
    });
  });

  context('Positive scenarios', async function () {
    VALID_LOGIN_DATA.forEach((data) => {
      it(`${data.testName}`, async function () {
        await $(SELECTORS.usernameLoginInput).setValue(data.login);
        await $(SELECTORS.passwordLoginInput).setValue(data.password);
        const loginButton = $(SELECTORS.loginButton);
        await loginButton.click();
        const actualMessage = await $(
          SELECTORS.successfulLoginMessage,
        ).getText();
        expect(actualMessage).toEqual(data.message + data.login + '!');
      });
    });
  });

  context('Negative scenarios', async function () {
    INVALID_LOGIN_DATA.forEach((data) => {
      it(`${data.testName}`, async function () {
        await $(SELECTORS.usernameLoginInput).setValue(data.login);
        await $(SELECTORS.passwordLoginInput).setValue(data.password);
        const loginButton = $(SELECTORS.loginButton);
        await loginButton.click();
        const actualMessage = await $(SELECTORS.loginErrorMessage).getText();
        expect(actualMessage).toEqual(data.message);
      });
    });
  });
});
