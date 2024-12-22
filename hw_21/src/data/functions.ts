import { SELECTORS } from '../data/selectors';
import { DYNAMIC_CONTROLS_TITLES } from './messages';

async function clickOnCheckbox(checkboxSelector: string, toBeChecked: boolean) {
  const checkbox = $(checkboxSelector);
  const isCheckedBefore = await checkbox.isSelected();
  if (toBeChecked) {
    if (isCheckedBefore) return;
    await checkbox.click();
    return await checkbox.isSelected();
  } else {
    if (!isCheckedBefore) return;
    await checkbox.click();
    return !(await checkbox.isSelected());
  }
}

async function waitForDisplayedAndClickable(
  selector: string,
  reverse?: boolean,
) {
  return (
    (await $(selector).waitForDisplayed({
      timeout: 5000,
      reverse: reverse,
    })) &&
    $(selector).waitForClickable({
      timeout: 5000,
      reverse: reverse,
    })
  );
}

async function validateTitles() {
  const actualTitles: Record<string, string> = {
    h4Title: await $(SELECTORS.h4Title).getText(),
    h4SecondTitle: await $(SELECTORS.h4SecondTitle).getText(),
    h4ThirdTitle: await $(SELECTORS.h4ThirdTitle).getText(),
  };
  await expect(actualTitles).toMatchObject({ ...DYNAMIC_CONTROLS_TITLES });
}

async function waitForElementWithText(
  selector: string,
  text: string,
  timeout: number = 5000,
) {
  await browser.waitUntil(
    async () => {
      const isDisplayed = await $(selector).isDisplayed();
      const actualText = await $(selector).getText();
      const isHaveSameText = actualText === text;
      return isDisplayed && isHaveSameText;
    },
    {
      timeout,
      timeoutMsg: `Element ${selector} is not displayed during ${timeout} ms or should have text ${text}`,
    },
  );
}

export {
  clickOnCheckbox,
  waitForDisplayedAndClickable,
  validateTitles,
  waitForElementWithText,
};
