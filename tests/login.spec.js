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