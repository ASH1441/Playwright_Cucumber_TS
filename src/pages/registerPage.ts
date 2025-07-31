import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class RegisterPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
    registerLink: this.page.locator('#reglink'),
    usernameInput: this.page.locator('#register-username'),
    passwordInput: this.page.locator('#register-pw'),
    repeatPasswordInput: this.page.locator('#register-pwrep'),
    roleSelect: this.page.locator('#register-role'),
    checkBox: this.page.locator('#register-check'),
    registerButton: this.page.locator('[type="submit"]'),
    confirmmessage: this.page.locator('//*[@id="overlaysubmit"]/h2')
    }

    async navigateToRegisterPage() {
        await this.base.goto("http://10.40.226.38/Coffeeshop/register.php")
    }

    async fillForm(usernameInput: string, passwordInput: string, repeatPasswordInput: string) {
    try {
        await this.page.locator("//*[@id='register-username']").fill(usernameInput);
        await this.page.locator("//*[@id='register-pw']").fill(passwordInput); 
        await this.page.locator("//*[@id='register-pwrep']").fill(repeatPasswordInput);
        await this.page.locator("//*[@id='register-check']").check();
        await this.registerButtonClick();
    }catch(error)
    {
     throw error;
    }
    }

    async registerButtonClick() {
          await this.page.locator("//*[@type=submit]").click();
    }

    async confirmMessage() {
        await this.page.locator("//*[@id='overlaysubmit']/h2").isVisible();
    }

}

