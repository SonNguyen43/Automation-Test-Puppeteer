const puppeteer = require("puppeteer");

describe("Reload Page", () => {
  it("Case 1", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      //   devtools: true,
    });

    const page = await browser.newPage();

    await page.goto("http://example.com/");
    await page.waitForSelector("h1");

    /** Reload browser */
    await page.reload()

    /**  Close browser */
    await browser.close();
  });
});