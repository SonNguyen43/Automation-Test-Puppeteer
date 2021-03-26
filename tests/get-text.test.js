const puppeteer = require("puppeteer");

describe("Get Text", () => {
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
    const text = await page.$eval('h1', element => element.textContent);

    console.log("Get text:", text);

    /**  Close browser */
    await browser.close();
  });
});
