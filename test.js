import express from 'express';
import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(3002, async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
        page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));

        await page.goto('http://localhost:3002/privacy-policy', { waitUntil: 'networkidle0' });

        const html = await page.content();
        console.log('RENDERED HTML:', html);

        await browser.close();
    } catch (e) {
        console.error('TEST ERROR:', e);
    } finally {
        server.close();
        process.exit(0);
    }
});
