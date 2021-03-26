const puppeteer = require("puppeteer");

describe("Working With Title & Url", () => {
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
    const title = await page.title();
    const url = await page.url();

    console.log("Get title:", title);
    console.log("Get url:", url);

    /**  Close browser */
    await browser.close();
  });
});
