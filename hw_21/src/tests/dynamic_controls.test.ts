import { SELECTORS } from '../data/selectors';
import { DYNAMIC_CONTROLS_TEXT } from '../data/messages';
import {
  clickOnCheckbox,
  waitForDisplayedAndClickable,
  validateTitles,
  waitForElementWithText,
} from '../data/functions';

describe('[UI] Delay in showing elements', () => {
  before(async function () {
    await browser.maximizeWindow();
  });

  beforeEach(async function () {
    await browser.url('https://the-internet.herokuapp.com/');
  });

  it('Wait for checkbox', async function () {
    await $(SELECTORS.dynamicControlsPage).click();
    await waitForDisplayedAndClickable(SELECTORS.removeCheckboxButton);
    await validateTitles();
    await clickOnCheckbox(SELECTORS.checkbox, true);
    await $(SELECTORS.removeCheckboxButton).click();
    await waitForDisplayedAndClickable(SELECTORS.checkbox, true);
    await waitForDisplayedAndClickable(SELECTORS.addButton);
    await waitForElementWithText(
      SELECTORS.itsgoneMessage,
      DYNAMIC_CONTROLS_TEXT.itsgoneMessage,
    );
    await $(SELECTORS.addButton).click();
    await waitForDisplayedAndClickable(SELECTORS.checkbox);
    await waitForElementWithText(
      SELECTORS.itsbackMessage,
      DYNAMIC_CONTROLS_TEXT.itsbackMessage,
    );
  });
});
