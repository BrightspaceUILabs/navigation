/* eslint-disable no-invalid-this */
/* global forceFocusVisible */
import puppeteer from 'puppeteer';
import { VisualDiff } from '@brightspace-ui/visual-diff';

describe('d2l-navigation-button', () => {
	const visualDiff = new VisualDiff('d2l-navigation-button', import.meta.url);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.goto(
			`${visualDiff.getBaseUrl()}/test/button.visual-diff.html`,
			{ waitUntil: ['networkidle0', 'load'] }
		);
		await page.bringToFront();
	});

	beforeEach(async() => {
		await visualDiff.resetFocus(page);
	});

	after(async() => await browser.close());

	[
		{ category: 'icon-text', tests: ['normal', 'hover', 'focus'] },
		{ category: 'icon-text-disabled', tests: ['normal', 'hover', 'focus'] },
		{ category: 'icon-text-flip', tests: ['normal', 'hover', 'focus'] },
		{ category: 'icon-text-hidden', tooltip: true, rectSelector: 'icon-text-hidden-container', tests: ['normal', 'hover', 'focus'] },
		{ category: 'icon-text-hidden-disabled', tests: ['normal', 'hover', 'focus'] },
		{ category: 'dropdown-icon-off', tooltip: true,  rectSelector: 'dropdown-icon-off-container', tests: ['normal', 'hover', 'focus'] },
		{ category: 'dropdown-icon-on', tooltip: true,  rectSelector: 'dropdown-icon-on-container', tests: ['normal', 'hover', 'focus'] },
		{ category: 'dropdown-icon-disabled', tooltip: true,  rectSelector: 'dropdown-icon-disabled-container', tests: ['normal', 'hover', 'focus'] },
		{ category: 'dropdown-custom', tests: ['normal', 'hover', 'focus'] }
	].forEach((entry) => {
		describe(entry.category, () => {
			entry.tests.forEach((name) => {
				it(name, async function() {
					const selector = `#${entry.category}`;
					const rectSelector = entry.rectSelector ? `#${entry.rectSelector}` : selector;

					if (name === 'hover') {
						await page.hover(selector);
						if (entry.tooltip) {
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
