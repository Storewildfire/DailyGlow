import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
        page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
        page.on('response', res => {
            if (!res.ok()) console.log(`HTTP ${res.status()} on ${res.url()}`);
        });

        console.log('Navigating to live render site...');
        await page.goto('https://dailyglow-9ogj.onrender.com/privacy-policy', { waitUntil: 'networkidle0' });

        const html = await page.content();
        console.log('HTML snippet:', html.substring(0, 300));

        await browser.close();
    } catch (e) {
        console.error('TEST ERROR:', e);
    } finally {
        process.exit(0);
    }
})();
