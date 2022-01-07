/* eslint-disable no-invalid-this */
/* global forceFocusVisible */
import puppeteer from 'puppeteer';
import { VisualDiff } from '@brightspace-ui/visual-diff';

describe('d2l-navigation-button', function() {
	const visualDiff = new VisualDiff('d2l-navigation-button', import.meta.url);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.goto(
			`${visualDiff.getBaseUrl()}/test/button.visual-diff.html`,
			{waitUntil: ['networkidle0', 'load']}
		);
		await page.bringToFront();
	});

	beforeEach(async() => {
		await visualDiff.resetFocus(page);
	});

	after(async() => await browser.close());

	[
		{ category: 'button', tests: ['normal', 'hover', 'focus'] },
		{ category: 'button-close', tests: ['normal', 'hover', 'focus'] },
		{ category: 'button-notification-icon-off', tests: ['normal', 'hover', 'focus'] },
		{ category: 'button-notification-icon-on', tests: ['normal', 'hover', 'focus'] },
		{ category: 'link', tests: ['normal', 'hover', 'focus'] },
		{ category: 'link-back', tests: ['normal', 'hover', 'focus'] },
		{ category: 'link-image', tests: ['normal', 'hover', 'focus'] }
	].forEach((entry) => {
		describe(entry.category, () => {
			entry.tests.forEach((name) => {
				it(name, async function() {
					const selector = `#${entry.category}`;

					if (name === 'hover') await page.hover(selector);
					else if (name === 'focus') await page.$eval(selector, (elem) => forceFocusVisible(elem));

					const rect = await visualDiff.getRect(page, selector);
					await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
				});
			});
		});
	});

});
