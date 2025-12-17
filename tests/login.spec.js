import { test, expect } from '@playwright/test';

test("login", async ({ page }) => {
    //below code will be in home page
    await page.goto("https://demoblaze.com/");
    console.log("Web page is opened");
    await page.locator('#login2').click();
    
    //below code will be in login page
    console.log("Login page is opened");
    await expect(page.locator('#logInModalLabel')).toBeVisible();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator(`onclick=logIn`).click();
    
    
    console.log("Login succesfully ");
});

test('codegen test', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('admin');
    await page.locator('#loginusername').press('Tab');
    await page.locator('#loginpassword').fill('123456');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('button', { name: 'Log in' }).click();
});

test('Verify the list of mobiles', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    await expect(page.locator('#tbodyid')).toBeVisible();
    await page.waitForSelector('.card-title a');
    let noOfMobiles = await page.$$('h4.card-title a');
    for (const mobile of noOfMobiles) {
        const mobilefetched = await mobile.textContent();
        console.log(mobilefetched);
    }
})

test('Verify the [description] of mobiles', async ({ page }) => {
    await page.goto('https://demoblaze.com/');
    console.log("Web page is opened");
    await expect(page.locator('#tbodyid')).toBeVisible();
    await page.waitForSelector('div.card-block p#article');
    let mobilesDescription = await page.$$('div.card-block p#article');
    for (const singelMobileDescription of mobilesDescription) {

        const descriptionOfMobile = await singelMobileDescription.textContent();
        console.log("The mobiles details :" +descriptionOfMobile);
    }

})

