const { chromium } = require('playwright');

(async () => {
  // Launch browser and create a new context
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  // Open the first page (tab)
  const page1 = await context.newPage();
  await page1.goto('https://example.com');
  console.log('First tab title:', await page1.title());

  // Open a new tab in the same context
  const page2 = await context.newPage();
  await page2.goto('https://playwright.dev');
  console.log('Second tab title:', await page2.title());

  // Switch between tabs and interact
  await page1.bringToFront();
  // Do something on page1...

  await page2.bringToFront();
  // Do something on page2...

  // Close browser
  await browser.close();
})();