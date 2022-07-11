import puppeteer from 'puppeteer';
import { VisualDiff } from '@brightspace-ui/visual-diff';

describe('d2l-navigation-iterator', () => {
	const visualDiff = new VisualDiff('d2l-navigation-iterator', import.meta.url);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.goto(
			`${visualDiff.getBaseUrl()}/test/iterator.visual-diff.html`,
			{ waitUntil: ['networkidle0', 'load'] }
		);
		await page.bringToFront();
	});

	after(async() => await browser.close());

	describe('iterator', () => {

		[
			'default',
			'hide-text',
			'disabled',
			'custom-text',
			'slot'
		].forEach((name) => {
			it(name, async function() {
				const rect = await visualDiff.getRect(page, `#iterator-${name}`);
				await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
			});
		});

	});

});
