# alt-image-scraper

Image scraping from Yahoo and Ecosia using puppeteer.

## Usage

### Installation

```bash
npm i alt-image-scraper
```

### Usage Example

```js
const Scraper = require("./index.js");

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
```

## License

[MIT](./LICENSE) © Dania Rifki.
