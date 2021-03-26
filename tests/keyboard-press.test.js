const { expect } = require("chai");
const puppeteer = require("puppeteer");

describe("Assertions", () => {
  it("Case 1", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      // slowMo: 100,
      // devtools: true,
    });

    const page = await browser.newPage();

    await page.setDefaultTimeout(10000)
    await page.setDefaultNavigationTimeout(20000)

    await page.setViewport({
      width: 1920,
      height: 1080,
    });

    await page.goto("https://www.youtube.com/");
    await page.waitForSelector("#search");
    await page.type("#search", "Puppeteer");
    await page.keyboard.press('Enter', {delay: 10})

    /**  Close browser */
    await browser.close();
  });
});
