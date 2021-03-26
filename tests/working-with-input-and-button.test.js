const puppeteer = require("puppeteer");

describe("Working With Input & Button", () => {
  it("Case 1", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      //   devtools: true,
    });

    const page = await browser.newPage();

    await page.goto("https://www.facebook.com/");
    await page.type("#email", '0766899363', {delay: 0});
    await page.type("#pass", "060898");
    await page.click("[data-testid='royal_login_button']", {clickCount: 1});
    await page.waitFor(5000)

    /**  Close browser */
    await browser.close();
  });
});
