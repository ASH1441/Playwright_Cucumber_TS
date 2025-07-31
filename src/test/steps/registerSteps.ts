import { Given, When, Then } from "@cucumber/cucumber";
import RegisterPage from "../../pages/registerPage";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";

let registerPage: RegisterPage;


Given('User is on the registration page', {timeout: 10000}, async () => {
    registerPage = new RegisterPage(fixture.page!);
    await registerPage.navigateToRegisterPage();
})

When('User fills in the registration form with username {string} and password {string} and repeatPassword {string}', {timeout: 10000}, async (username: string, password: string, repeatPassword: string) => {
    registerPage = new RegisterPage(fixture.page!); 
    await fixture.page.waitForLoadState();
    await registerPage.fillForm(username,password,repeatPassword);
})
    
Then('User should see a confirmation message indicating successful registration',{timeout: 10000}, async () => {
    registerPage = new RegisterPage(fixture.page!); 
    await fixture.page.waitForLoadState();      
    await registerPage.confirmMessage();
    fixture.logger.info('User should see a confirmation message indicating successful registration');
});
