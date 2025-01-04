import { SalesPortalPage } from "../salesPortal.page";

class ProductsPage extends SalesPortalPage {
  readonly ["Add New Product"] = "button.page-title-button";
  readonly Title = '//h2[.="Products List "]';
  readonly ["Table row"] = (productName: string) => `//tr/td[1][.="${productName}"]`;
  readonly ["Product name in table"] = (productName: string) => `${this["Table row"](productName)}`;
  readonly ["Product price in table"] = (productName: string) => `${this["Table row"](productName)}/../td[2]`;
  readonly ["Product manufacturer in table"] = (productName: string) => `${this["Table row"](productName)}/../td[3]`;
  readonly ["Product created data in table"] = (productName: string) => `${this["Table row"](productName)}/../td[4]`;
  readonly ["Product details button in table"] = (productName: string) => `${this["Table row"](productName)}/..//button[@title='Details']`;
  readonly ["Product edit button in table"] = (productName: string) => `${this["Table row"](productName)}/..//button[@title='Edit']`;
  readonly ["Product delete button in table"] = (productName: string) => `${this["Table row"](productName)}/..//button[@title='Delete']`;
  readonly ["Search input"] = 'input[type="search"]';
  readonly ["Search button"] = '#search-products';
  readonly ["Search result by Product name"] = '//tbody/tr[1]/td[1]';

  async clickOnAddNewProduct() {
    await this.waitForPageOpened();
    await this.click(this["Add New Product"]);
  }

  async waitForPageOpened(): Promise<void> {
    await this.waitForDisplayed(this.Title);
    await this.waitForSpinnersToBeHidden("Products");
  }

  async getProductFromTable(productName: string) {
    const [name, price, manufacturer] = await Promise.all([this.getText(this["Product name in table"](productName)), this.getText(this["Product price in table"](productName)), this.getText(this["Product manufacturer in table"](productName))]);
    return {
      name,
      price: +price.replace("$", ""),
      manufacturer,
    };
  }

  async clickOnDeleteProductButton(productName: string) {
    await this.click(this["Product delete button in table"](productName));
  }

  async getSearchResults(productParameterValue: string) {
    await this.setValue(this["Search input"], productParameterValue);
    await this.click(this["Search button"]);
    await this.waitForSpinnersToBeHidden("Products page");
  }
}

export default new ProductsPage();
