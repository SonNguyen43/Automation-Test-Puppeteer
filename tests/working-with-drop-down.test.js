const puppeteer = require("puppeteer");

describe("Working With DropDown", () => {
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

    await page.goto("https://pre.drivalink.com/login");
    await page.type("[autoid='LoginPage_TxtField_UserName']", "global_tma");
    await page.type("[autoid='LoginPage_TxtField_Password']", "agitm@Prod");
    await page.click("[autoid='LoginPage_Btn_Login']", { clickCount: 1 });
    await page.waitForNavigation();
    // await page.waitFor(10000);

    await page.click("[autoid='HomePage_MenuBtn_Reports']", { clickCount: 1 });
    await page.click("[autoid='HomePage_Report_Fatigue']", { clickCount: 1 });
    await page.waitForNavigation();
    // await page.waitFor(5000);

    /** Select */
    // await page.select("#myId", " User ");
    const [timezone] = await page.$x(
      "/html/body/app-root/ng-component/mat-drawer-container/mat-drawer-content/div/app-reports/app-fatigue/div/div[1]/form/div[2]/mat-form-field/div/div[1]"
    );

    if (timezone) {
      await timezone.click();
      // await page.click("#mat-option-647", { clickCount: 1 });

      const [user] = await page.$x(
        "/html/body/div[3]/div[2]/div/div/div/mat-option[2]/span"
      );

      if (user) {
        await user.click();
      }
    }

    /**  Close browser */
    await browser.close();
  });
});
