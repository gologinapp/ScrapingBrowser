const puppeteer = require('puppeteer-core');

/**
 * This simple script extracts current country
 */

const TOKEN = 'your-token';

const COUNTRY_SELECTOR = '#content-2 > .user-block.user-block-hr > .user-data';

(async () => {
    const browserWSEndpoint = new URL('https://cloud.gologin.com/connect');
    browserWSEndpoint.searchParams.append('token', TOKEN);
    browserWSEndpoint.searchParams.append('geolocation', 'dataCenter:DE');

    const browser = await puppeteer.connect({
        browserWSEndpoint: browserWSEndpoint.toString(),
        ignoreHTTPSErrors: true,
    });

    console.info('Browser connected! Scraping...');

    const page = await browser.newPage();
    await page.goto('https://iphey.com');
    await page.waitForSelector(COUNTRY_SELECTOR);

    const countryElement = await page.$(COUNTRY_SELECTOR);
    const countryInnerText = await countryElement.getProperty('innerText');
    const countryText = await countryInnerText.jsonValue();

    console.info('Current country:', countryText);
})();
