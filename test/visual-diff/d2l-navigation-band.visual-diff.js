/* eslint-disable no-invalid-this */
/* eslint-env node, es6 */
'use strict';

const puppeteer = require('puppeteer');
const VisualDiff = require('./visual-diff');

describe('d2l-navigation-band', function() {
	const visualDiff = new VisualDiff('d2l-navigation-band', __dirname);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.setViewport({width: 800, height: 800, deviceScaleFactor: 2});
		await page.goto(
			`${visualDiff.getBaseUrl()}/test/visual-diff/d2l-navigation-band.visual-diff.html`,
			{waitUntil: ['networkidle0', 'load']}
		);
		await page.bringToFront();
	});
	after(() => browser.close());

	[
		'base'
	].forEach((testName) => {
		it(testName, async function() {
			const rect = await visualDiff.getRect(page, `#${testName}`);
			await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
		});
	});
});
