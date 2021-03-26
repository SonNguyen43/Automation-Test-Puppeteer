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

    await page.setViewport({
      width: 1920,
      height: 1080,
    });

    await page.goto("http://example.com");
    const title = await  page.title()
    const url = await page.url();
    const text = await page.$eval("p", (element) => element.textContent);
    const textCount = await page.$$eval("p", (element) => element.length);
    

    expect(title).to.be.a("string", "Example Domain");
    expect(url).to.include("example.com");
    expect(text).to.be.a("string", "Example Domain");
    expect(textCount).to.equal(2);

    /**  Close browser */
    await browser.close();
  });
});
