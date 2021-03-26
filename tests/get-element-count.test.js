const puppeteer = require("puppeteer");

describe("Working With Element", () => {
  it("Case 1", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      // slowMo: 100,
      // devtools: true,
    });

    const page = await browser.newPage();

    await page.setViewport({
      width: 1920,
      height: 1080,
    });

    await page.goto("http://example.com");
    const count = await page.$$eval('p', element => element.length);

    console.log("Get element count:", count);

    /**  Close browser */
    await browser.close();
  });
});
