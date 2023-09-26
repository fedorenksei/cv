const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });
    await main(page);
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();

async function main(page) {
  await page.goto('http://127.0.0.1:5500/src');
  await page.pdf({
    path: 'get-pdf/result.pdf',
    format: 'A4',
    margin: { top: 1, right: 1, bottom: 1, left: 1 },
  });
}
