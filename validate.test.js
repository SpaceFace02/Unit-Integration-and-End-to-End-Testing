const { expect } = require("@jest/globals");
const checkAndGenerate = require("./validate");
const puppeteer = require("puppeteer");

// Integration Test - functions are tested together
test("Check and generate", () => {
  const name = "John";
  const age = "20";
  expect(checkAndGenerate(name, age)).toBe("John is 20 years old");
  expect(checkAndGenerate("", age)).toBeFalsy();
});

// End to End test
jest.setTimeout(30000);

test("end to end test", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 20,
    args: ["--window-size=1920,1080"],
  });

  const page = await browser.newPage();

  page.on("dialog", async (dialog) => {
    const msg = dialog.message();
    await dialog.accept();
    expect(msg).toBe("Mr. Chirag, has booked 1 tickets from Pune to Manipal");
    page.close();
  });

  // Once you go to the page, you can only refer to the page's dom, hence call page.on() before so as to capture the dialog event.
  await page.goto("http://127.0.0.1:5500/ostl_form.html");

  await page.click("#name");
  await page.type("#name", "Chirag");

  await page.click("#age");
  await page.type("#age", "30");

  await page.click("#male");
  await page.click("#source");
  await page.type("#source", "Pune");

  await page.click("#destination");
  await page.type("#destination", "Manipal");

  await page.click("#submit_btn");
});
