import puppeteer from "puppeteer";

const TIMEOUT = 30000;
const RESTAURANT_NAME = "Jack in the Box";
const RESTAURANT_ADDRESS =
  "Jack in the Box, 39017 Cedar Boulevard, Newark, CA, USA";

describe(
  "should be able to search and show restaurant",
  () => {
    let browser, page;

    beforeAll(async () => {
      browser = await puppeteer.launch({ args: ["--no-sandbox"] });
      page = await browser.newPage();
      await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
      page.setViewport({ width: 1920, height: 1080 });
    });

    // Find the search-box in the view, and type an address into it
    // Enter should trigger the search
    it("should be able to search", async () => {
      await page.focus("#search-box");
      await page.keyboard.type(RESTAURANT_ADDRESS);
      await page.keyboard.press("Enter");
    });

    // Then we wait for the restaurant name to appear in the list view
    it(
      "should show the name in #list-view",
      async () => {
        // This might help the debugging
        // await page.screenshot({ path: '/tmp/x.png' });
        await page.waitForFunction(
          name =>
            document.querySelector("#list-view").innerHTML.indexOf(name) !== -1,
          {},
          RESTAURANT_NAME
        );
      },
      TIMEOUT
    );

    // Then we wait for the name to appear somewhere on the map
    // To pass this test, make sure not to remove the popup containing
    // the restaurant name even though it's not showing
    it(
      "should show the name in #map-view",
      async () => {
        await page.waitForFunction(
          name =>
            document.querySelector("#map-view").innerHTML.indexOf(name) !== -1,
          {},
          RESTAURANT_NAME
        );
      },
      TIMEOUT
    );

    afterAll(async () => {
      await browser.close();
    });
  },

  TIMEOUT
);
