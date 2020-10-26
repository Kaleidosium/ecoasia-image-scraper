# ecoasia-image-scraper

Image scraping from Ecosia using puppeteer.

## Usage

### Installation

```bash
npm i ecoasia-image-scraper
```

### Usage Example

```js
const EcoasiaImageScraper = require("ecoasia-image-scraper");

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
```

## License

[MIT](./LICENSE) © Dania Rifki.
