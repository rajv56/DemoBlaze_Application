

import { test } from '@playwright/test';
 

test("login", async ({ page }) => {



//Hover
await page.hover('#menuId'); // Hovers over an element
Upload
const filePath = 'path/to/file.txt';
await page.setInputFiles('#fileInput', filePath); // Uploads a file
Download
const [ download ] = await Promise.all([
  page.waitForEvent('download'),
  page.click('#downloadButton') // Triggers the download
]);
const path = await download.path();
console.log('Downloaded file path:', path);
});