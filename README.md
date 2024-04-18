# Scraping Browser

Enhance your web scraping experience with cloud-driven headful browsers, ensuring stealthy automation and efficient unblocking.

## Quick start

### 1. Get an API token

*Haven't got a Gologin account?* 👉 We got you covered! Follow [this quick Tango](https://app.tango.us/app/workflow/Register-a-Gologin-account-and-configure-a-dev-token-00ff53ba1f0345d8820f182d10b60004) to sign up and configure an API token.

*Already got an account* 👉 Go straight to [Gologin API Documentation page](https://app.gologin.com/#/personalArea/TokenApi) and copy an API token.

### 2. Install `puppeteer-core`

```bash
npm i puppeteer-core
```
or
```bash
yarn add puppeteer-core
```
> `puppeteer-core` is a lightweight version of Puppeteer that doesn't come with a Chromium browser in it (you don't need a local browser in this case).

### 3. Set the `TOKEN` variable to your API token from **Step 2** in [the example script](./examples/quick-start.js)

```javascript
const puppeteer = require('puppeteer-core');

const TOKEN = 'your-token'; // 👈 change this

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
```

### 4. Run the script
```bash
node ./examples/quick-start.js
```
You should now see the logs and the screenshot saved in the root directory
```console
Browser connected! Scraping...
Screenshot taken!
```

Done!

## API parameters

- `token={TOKEN}` **(required)** - API token from your [Gologin account](https://app.gologin.com/#/personalArea/TokenApi).

- `profile={profile_id}` *(optional)* - ID of a specific profile you want to run. If this parameter is specified, a new profile is not auto generated.

- `geolocation={type}:{country_code}` *(optional)* - Gologin geoproxy (floppydata). This parameter adds a specified proxy to an auto generated profile. If the `profile` parameter is included, the `geolocation` parameter has no effect.

### Examples
✅ `/connect?token=${TOKEN}&profile={profile_id}` - run a profile with `profile_id`

✅ `/connect?token=${TOKEN}` - generate a new profile and run it

✅ `/connect?token=${TOKEN}&geolocation=dataCenter:DE` - generate a new profile with a German geolocation and run it

❌ `/connect?profile={profile_id}` - oops! You need to set the `token` parameter for authorization

### 🎉 Happy scraping! 🎉
