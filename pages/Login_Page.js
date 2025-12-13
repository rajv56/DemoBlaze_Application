import { expect } from '@playwright/test'

class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLabel = page.locator('#logInModalLabel');
        this.userName = page.locator('#loginusername');
        this.passWord = page.locator('#loginpassword');
        this.loginButton = page.locator(`onclick=logIn`);
    }

    async doLogin() {
        //write an assertion for login label to verify login window open
        expect(this.loginLabel).toBeVisible();
        await this.userName.fill('pavanol');
        await this.passWord.fill('test@123');
        await this.loginButton.click();

    }


}