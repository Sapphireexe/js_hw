import { SalesPortalPage } from "../salesPortal.page";

class DeleteProductModalWindow extends SalesPortalPage {
    readonly ["Delete Product Title"] = "//h5";
    readonly ["Delete Product Button"] = "button[onclick^='deleteProduct']";

    async waitForPageOpened(): Promise<void> {
        await this.waitForDisplayed(this["Delete Product Title"]);
    }

    async clickOnDeleteButton() {
        await this.waitForPageOpened();
        await this.click(this["Delete Product Button"]);
        await this.waitForSpinnersToBeHidden("Delete modal window");
    }
}

export default new DeleteProductModalWindow;