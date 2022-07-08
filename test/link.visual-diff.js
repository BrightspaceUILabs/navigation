/* eslint-disable no-invalid-this */
/* global forceFocusVisible */
import puppeteer from 'puppeteer';
import { VisualDiff } from '@brightspace-ui/visual-diff';

describe('d2l-navigation-link', () => {
	const visualDiff = new VisualDiff('d2l-navigation-link', import.meta.url);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.goto(
			`${visualDiff.getBaseUrl()}/test/link.visual-diff.html`,
			{ waitUntil: ['networkidle0', 'load'] }
		);
		await page.bringToFront();
	});

	beforeEach(async() => {
		await visualDiff.resetFocus(page);
	});

	after(async() => await browser.close());

	[
		{ category: 'base', tests: ['normal', 'hover', 'focus'] },
		{ category: 'back', tests: ['normal', 'hover', 'focus'] },
		{ category: 'icon-text', tests: ['normal', 'hover', 'focus'] },
		{ category: 'icon-text-hidden', rectSelector: 'icon-text-hidden-container', tests: ['normal', 'hover', 'focus'] },
		{ category: 'image', tests: ['normal', 'hover', 'focus'] }
	].forEach((entry) => {
		describe(entry.category, () => {
			entry.tests.forEach((name) => {
				it(name, async function() {
					const selector = `#${entry.category}`;
					const rectSelector = entry.rectSelector ? `#${entry.rectSelector}` : selector;

					if (name === 'hover') {
						await page.hover(selector);
						if (entry.category === 'icon-text-hidden') {
							await new Promise(resolve => setTimeout(resolve, 350));
						}
					}
					else if (name === 'focus') await page.$eval(selector, (elem) => forceFocusVisible(elem));

					const rect = await visualDiff.getRect(page, rectSelector);
					await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
				});
			});
		});
	});

});
