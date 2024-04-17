import puppeteer from 'puppeteer-core';

const TOKEN = 'your-token';

/**
 * This simple script takes a screenshot of a webpage
 * API params required - just an API token!
 */

(async () => {
    const browser = await puppeteer.connect({
        browserWSEndpoint: `https://debug.cloud.gologin.com/connect?token=${TOKEN}`,
        ignoreHTTPSErrors: true ,
    });

    console.info('Browser connected! Scraping...');

    const page = await browser.newPage();
    await page.goto('https://iphey.com');
    await page.screenshot({ path: 'screenshot.jpeg' })

    console.info('Screenshot taken!')
})();
