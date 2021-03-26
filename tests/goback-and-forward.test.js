const puppeteer = require("puppeteer");

describe("Go Back And Forward", () => {
  it("Case 1", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      //   devtools: true,
    });

    const page = await browser.newPage();

    // Go to link 1
    await page.goto("http://example.com/");
    await page.waitForSelector("h1");

    // Go to link 2 and back link 1 ( goBack() )
    await page.goto("https://www.youtube.com/");
    await page.waitForSelector("#text");
    await page.goBack();

    // Go to link 2 ( goForward() )
    await page.waitForSelector("h1");
    await page.goForward();
    await page.waitForSelector("#text");

    /**  Close browser */
    await browser.close();
  });
});
