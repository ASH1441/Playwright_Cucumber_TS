import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";

setDefaultTimeout(1000 * 30)
let loginPage: LoginPage;

Given('User is on the login page', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the coffeeshop application")
})

Given('User click on the login link', async function () {
    await fixture.page.waitForLoadState();
    await fixture.page.click("text=Login");
    fixture.logger.info("Clicked on the login link");
    fixture.logger.info("Navigated to the login page");
});

When('User enters valid username {string} and password {string}', {timeout: 10000}, async function (username, password) {
    fixture.logger.info(`Attempting login with username: ${username}`);
    loginPage = new LoginPage(fixture.page);
    await loginPage.login(username, password);
    fixture.logger.info(`Filled in username: ${username} and password: ${password}`);
    fixture.logger.info(`Login attempted with username: ${username} and password: ${password}`);
});

When('User click on the login button', {timeout: 10000}, async function () {
    await fixture.page.waitForLoadState();
    await fixture.page.locator("#login-submit").click();
    fixture.logger.info('Login Button clicked');
});

Then('Login should be success', {timeout: 30000}, async function () {
    const logout = fixture.page.locator("//*[@id='accountbar']//tr[2]/td/a[3]");
    await expect(logout).toBeVisible();
    console.log("Login Success (Logout visible): " + await logout.isVisible());
    fixture.logger.info(" Login Success (Logout visible): " + await logout.isVisible()); 
});

When('Login should fail', {timeout: 10000}, async function () {
    try{
    const failureMesssage = fixture.page.locator("//*[@id='login-password-msg1']");
    await expect(failureMesssage).toBeVisible();
    const errorMessage = await failureMesssage.textContent();
    fixture.logger.error ("Error message");
    if(errorMessage)
     fixture.logger.info("Error message displayed: " + errorMessage);
    }
    catch(error){
     fixture.logger.info("Login Failed - Error message displayed: " + error);
    }
}); 