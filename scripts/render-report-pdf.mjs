/*
  Render public/report.html to public/report.pdf using a headless Chromium.
  Run: node scripts/render-report-pdf.mjs
*/

import fs from 'node:fs';
import path from 'node:path';

async function renderPdf() {
  const { default: puppeteer } = await import('puppeteer');

  const htmlPath = path.resolve('public', 'report.html');
  const pdfPath = path.resolve('public', 'report.pdf');

  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Missing HTML source at ${htmlPath}`);
  }

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' },
    });
    console.log(`PDF written to ${pdfPath}`);
  } finally {
    await browser.close();
  }
}

renderPdf().catch((err) => {
  console.error(err);
  process.exit(1);
});


