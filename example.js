const Scraper = require("./index.js");
/*
const yahoo = new Scraper.Yahoo({
    keyword: "banana",
    puppeteer: {
        headless: false,
    },
});

(async () => {
    const results = await yahoo.scrape();
    console.log("results: ", results);
})();
*/
const ecosia = new Scraper.Ecosia({
    keyword: "banana",
    puppeteer: {
        headless: false,
    },
});

(async () => {
    const results = await ecosia.scrape();
    console.log("results: ", results);
})();
