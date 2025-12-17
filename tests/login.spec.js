import { test, expect } from '@playwright/test';

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

