const EcoasiaImageScraper = require("./index.js");

const scraper = new EcoasiaImageScraper({
    keyword: "banana",
    puppeteer: {
        headless: false,
    },
});

(async () => {
    const results = await scraper.scrape();
    console.log("results: ", results);
})();
