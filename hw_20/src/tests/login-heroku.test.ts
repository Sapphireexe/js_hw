import { SELECTORS_HEROKU as SELECTORS } from "../data/selectors";
import { VALID_CREDENTIALS, LOGGED_PAGE_ELEMENTS } from "../data/testdata";
import { ILoggedPageObject } from "../data/types";

describe("[UI] Login", () => {

  before(async function () {
    await browser.maximizeWindow();
  });

  beforeEach(async function () {
    await browser.url('https://the-internet.herokuapp.com/');
    const formAuthenticationLink = $(SELECTORS.formAuthentication);
    await formAuthenticationLink.click();
  });

  it("Should have valid login page layout", async function () {
    await $(SELECTORS.usernameInput).setValue(VALID_CREDENTIALS.username);
    await $(SELECTORS.passwordInput).setValue(VALID_CREDENTIALS.password);
    const loginButton = $(SELECTORS.loginButton);
    await loginButton.click();

    const actualData: ILoggedPageObject = {
        title: (await $(SELECTORS.h2title).getText()).trim(),
        message: (await $(SELECTORS.successfulLoginMessage).getText()).replaceAll('\n','').slice(0, -1),
        subheader: await $(SELECTORS.h4subheader).getText(),
        logoutButton: (await $(SELECTORS.logoutButton).getText()).trim(),
    }
    expect(actualData).toMatchObject({...LOGGED_PAGE_ELEMENTS});
  });
});