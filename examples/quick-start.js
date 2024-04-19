const puppeteer = require('puppeteer-core');

/**
 * This simple script takes a screenshot of a webpage
 */

const TOKEN = 'your-token';

(async () => {
    const browser = await puppeteer.connect({
        browserWSEndpoint: `https://cloud.gologin.com/connect?token=${TOKEN}`,
        ignoreHTTPSErrors: true,
    });

    console.info('Browser connected! Scraping...');

    const page = await browser.newPage();
    await page.goto('https://iphey.com');
    await page.screenshot({ path: 'screenshot.jpeg' });

    console.info('Screenshot taken!');
})();
