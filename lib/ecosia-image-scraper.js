const puppeteer = require("puppeteer");

module.exports = class Scraper {
    constructor({
        keyword,
        userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/67.0.3372.0 Safari/537.36",
        puppeteer = {},
    }) {
        if (keyword === undefined) {
            throw new Error("No keyword provided");
        }

        this.keyword = keyword;
        this.userAgent = userAgent;
        this.puppeteerOptions = puppeteer;
        this.url = `https://www.ecosia.org/images?q=${keyword}`;
    }

    async scrape() {
        try {
            const browser = await puppeteer.launch({
                ...this.puppeteerOptions,
            });
            const page = await browser.newPage();
            page.setUserAgent(this.userAgent);

            await page.goto(this.url);
            await page.setViewport({
                width: 1920,
                height: 1080,
            });

            // Target the images
            await page.waitForSelector("a.image-result");
            await autoScroll(page);
            const images = await page.$$("a.image-result");

            // Return images with unique names
            const results = [];
            for (let i = 0; i < images.length; i++) {
                const url = await page.evaluate(({ href }) => href, images[i]);
                results.push(url);
            }

            await browser.close();
            return results;
        } catch (error) {
            console.log(error);
        }
    }
};

// Scroll the page to load additional images
const autoScroll = async page => {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
};
