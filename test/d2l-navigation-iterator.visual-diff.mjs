/* eslint-disable no-invalid-this */
/* global forceFocusVisible */
import puppeteer from 'puppeteer';
import { oneEvent, VisualDiff } from '@brightspace-ui/visual-diff';

describe('d2l-navigation-iterator', function() {
	const visualDiff = new VisualDiff('d2l-navigation-iterator', import.meta.url);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.goto(
			`${visualDiff.getBaseUrl()}/test/d2l-navigation-iterator.visual-diff.html`,
			{waitUntil: ['networkidle0', 'load']}
		);
		await page.bringToFront();
	});

	beforeEach(async() => {
		await visualDiff.resetFocus(page);
	});

	after(async() => await browser.close());

	describe('item', () => {

		[
			{ category: 'previous', tests: ['normal', 'hover', 'focus'] },
			{ category: 'next', tests: ['normal', 'hover', 'focus'] },
			{ category: 'hide-text', tests: ['normal', 'hover', 'focus'] },
			{ category: 'disabled', tests: ['normal', 'hover', 'focus'] },
			{ category: 'custom-text', tests: ['normal', 'hover', 'focus'] }
		].forEach((entry) => {
			describe(entry.category, () => {
				entry.tests.forEach((name) => {
					it(name, async function() {
						const selector = `#item-${entry.category}`;
						const hoverSelector = `#item-${entry.category} > *`;

						if (name === 'hover' || name === 'focus') {
							if (entry.category.indexOf('disabled') > -1) {
								if (name === 'hover') await page.hover(hoverSelector);
								else if (name === 'focus') await page.$eval(selector, (elem) => forceFocusVisible(elem));
							} else {
								setTimeout(() => {
									if (name === 'hover') page.hover(hoverSelector);
									else if (name === 'focus') page.$eval(selector, (elem) => forceFocusVisible(elem));
								});
								await oneEvent(page, selector, 'd2l-tooltip-show');
							}
						}

						const rect = await visualDiff.getRect(page, selector);
						await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
					});
				});
			});
		});

	});

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
