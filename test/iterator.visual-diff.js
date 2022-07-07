/* eslint-disable no-invalid-this */
/* global forceFocusVisible */
import { oneEvent, VisualDiff } from '@brightspace-ui/visual-diff';
import puppeteer from 'puppeteer';

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

	beforeEach(async() => {
		await visualDiff.resetFocus(page);
	});

	after(async() => await browser.close());

	describe('item', () => {

		[
			{ category: 'default', tests: ['normal', 'hover', 'focus'] },
			{ category: 'previous', tests: ['normal'] },
			{ category: 'next', tests: ['normal'] },
			{ category: 'hide-text', tests: ['normal', 'hover', 'focus'] },
			{ category: 'disabled', tests: ['normal', 'hover', 'focus'] },
			{ category: 'custom-text', tests: ['normal'] }
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
						// without captureBeyondViewport: false, screenshotAndCompare() triggers a resize event
						// which hides the tooltips
						await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { captureBeyondViewport: false, clip: rect });
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
