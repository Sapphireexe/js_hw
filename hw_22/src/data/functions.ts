export async function noSpinnersDisplayed(selector: string, timeout = 5000) {
  await browser.waitUntil(
    async () => {
      const arrayOfSpinners = await $$(selector).getElements();
      const isNotVisible = await arrayOfSpinners.every(
        async (spinner) => !(await spinner.isDisplayed()),
      );
      return isNotVisible;
    },
    {
      timeout,
      timeoutMsg: `Some of spinners "${selector}" still displayed after ${timeout} sec.`,
    },
  );
  return true;
}
