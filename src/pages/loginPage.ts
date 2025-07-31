import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

/**
 * Represents the login page of the application.
 */

export default class LoginPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        usernameInput: "Username",
        passwordInput: "Password",
        loginBtn: "button:has-text('Login')",
        errorMessage: "alert"
    }

    async navigateToLoginPage() {
        await this.base.goto("/login");
        await expect(this.page).toHaveTitle("coffee");
    }

  
    async login(username: string, password: string) {
    try {
     await this.page.locator("#login-username").fill(username);
    } catch (error) {
      throw error;
    }
    
    try {
     await this.page.locator("#login-password").fill(password); 
    } catch (error) {
      throw error;
    }
    }
}   
    
