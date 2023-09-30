const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  try {
    const page = await browser.newPage();
    await main(page);
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();

async function main(page) {
  await page.goto('http://127.0.0.1:5500/src');
  await page.waitForTimeout(500);
  await page.pdf({
    path: 'get-pdf/AlekseiFedorenkoCV.pdf',
  });
}
