import { AQA_SELECTORS } from '../data/selectors';
import { credentials } from '../data/credentials';
import { AQA_LOGIN_MESSAGES } from '../data/messages';
import { noSpinnersDisplayed } from '../data/functions';

describe('[UI] AQA Course Project Site', () => {
  before(async function () {
    await browser.maximizeWindow();
  });

  it(`Login with valid credentials`, async function () {
    await browser.url(
      'https://anatoly-karpovich.github.io/aqa-course-project/#',
    );
    await $(AQA_SELECTORS.loginInput).setValue(credentials.login);
    await $(AQA_SELECTORS.passwordInput).setValue(credentials.password);
    await $(AQA_SELECTORS.loginButton).click();
    await $(AQA_SELECTORS.h1Title).waitForDisplayed();
    await noSpinnersDisplayed(AQA_SELECTORS.spinner);
    const actualUserLogin = await $(AQA_SELECTORS.sideUserText).getText();
    expect(actualUserLogin).toBe(AQA_LOGIN_MESSAGES.userLogin);
  });
});
