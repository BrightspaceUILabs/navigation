/* eslint-disable no-invalid-this */
import puppeteer from 'puppeteer';
import { VisualDiff } from '@brightspace-ui/visual-diff';

describe('d2l-navigation', () => {
	const visualDiff = new VisualDiff('d2l-navigation', import.meta.url);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.goto(
			`${visualDiff.getBaseUrl()}/test/navigation.visual-diff.html`,
			{ waitUntil: ['networkidle0', 'load'] }
		);
		await page.bringToFront();
	});

	beforeEach(async() => {
		await visualDiff.resetFocus(page);
	});

	after(async() => await browser.close());

	[
		'band-default',
		'band-custom-color',
		'separator',
		'main-footer',
		'navigation-default',
		'navigation-header-footer',
		'navigation-header-only',
	].forEach((name) => {
		it(name, async function() {
			const rect = await visualDiff.getRect(page, `#${name}`);
			await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
		});
	});

	it('skip-nav', async function() {
		await page.$eval('#navigation-default', (elem) => {
			const skipNav = elem.shadowRoot.querySelector('d2l-navigation-skip');
			skipNav.shadowRoot.querySelector('a').focus();
		});
		// otherwise lang term is sometimes not loaded
		await page.evaluate(() => {
			return new Promise(resolve => requestAnimationFrame(resolve));
		});
		const rect = await visualDiff.getRect(page, '#navigation-default');
		await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
	});

	[
		800, 767, 615
	].forEach((width) => {
		it(`main-header-${width}`, async function() {
			await page.setViewport({
				height: 800,
				width: width,
				deviceScaleFactor: 2
			});
			const rect = await visualDiff.getRect(page, '#main-header');
			await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
		});
	});

});
