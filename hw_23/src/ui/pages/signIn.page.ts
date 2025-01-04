import { ICredentials } from "../../data/types/credentials.types";
import { SalesPortalPage } from "./salesPortal.page";

class SignInPage extends SalesPortalPage {
    readonly ['Title'] = 'p.lead';
    readonly ['Email input'] = '#emailinput';
    readonly ['Password input'] = '#passwordinput';
    readonly ['Login button'] = 'button[type="submit"]';

    async waitForPageOpened(): Promise<void> {
        await this.waitForDisplayed(this.Title);
        await this.waitForSpinnersToBeHidden('Sign in page');
    }

    async fillCredentials(credentials: ICredentials) {
        this.setValue(this["Email input"], credentials.email);
        this.setValue(this["Password input"], credentials.password);
    }

    async clickOnLoginButton() {
        await this.click(this["Login button"]);
    }

    async open() {
        await this.openPage("https://anatoly-karpovich.github.io/aqa-course-project/#");
        await this.waitForPageOpened();
    }
}

export default new SignInPage;