const { loadTitle } = require("../helpers/util.js");
const puppeteer = require("puppeteer");

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

test("Should print uppercase text", () => {
  return loadTitle()
    .then((title) => {
      expect(title).toBe("QUI EST ESSE");
    })
    .catch((err) => {
      console.log(err);
    });
});

// End-to-end testing of the async function
test("API async test", async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    slowMo: 30,
    args: ["--window-size=1920,1080"],
  });

  const page = await browser.newPage();

  // Once you go to the page, you can only refer to the page's dom, hence call page.on() before so as to capture the dialog event.
  await page.goto("http://127.0.0.1:5500/async.html");

  await page.click("#btn");
  setTimeout(async () => {
    const element = await page.waitForSelector("#title");
    const value = await element.evaluate((el) => el.textContent);
    expect(value).toBe("QUI EST ESSE");
  }, 4000);
});
