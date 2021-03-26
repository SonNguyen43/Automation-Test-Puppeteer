const puppeteer = require("puppeteer");

describe("Pause Test", () => {
  it("Case 1", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      //   devtools: true,
    });

    const page = await browser.newPage();

    await page.goto("http://example.com/");
    await page.waitForSelector("h1");

    /** Pause the Test */
    await page.waitFor(5000);

    /**  Close browser */
    await browser.close();
  });
});

/** Go to domain link */
// await page.goto("http://example.com/");


/** Reload browser */
// await page.reload()