import { ISelectors } from './types';

export const SELECTORS: ISelectors = {
  dynamicControlsPage: '//a[@href="/dynamic_controls"]',
  removeCheckboxButton: '//button[@onclick="swapCheckbox()"]',
  h4Title: '//h4[1]',
  h4SecondTitle: '//h4[2]',
  h4ThirdTitle: '//h4[3]',
  checkbox: '//input[@type="checkbox"]',
  addButton: '//button[@onclick="swapCheckbox()"]',
  itsgoneMessage: '//p[@id="message"]',
  itsbackMessage: '//p[@id="message"]',
};
