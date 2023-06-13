import { focusWithKeyboard, VisualDiff } from '@brightspace-ui/visual-diff';
import puppeteer from 'puppeteer';

async function initTest(page, name) {
	await page.$eval(`#${name}`, (template) => {
		const clone = template.content.cloneNode(true);
		document.body.insertBefore(clone, document.body.firstChild);
	});
	await page.waitForTimeout(100);
}

async function reset(page) {
	await page.evaluate(() => {
		const elem = document.querySelector('d2l-navigation-immersive');
		elem.parentNode.removeChild(elem);
	});
}

describe('d2l-navigation-immersive', () => {
	const visualDiff = new VisualDiff('d2l-navigation-immersive', import.meta.url);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.goto(
			`${visualDiff.getBaseUrl()}/test/immersive.visual-diff.html`,
			{ waitUntil: ['networkidle0', 'load'] }
		);
		await page.bringToFront();
	});

	after(async() => await browser.close());

	[
		'normal',
		'fullscreen',
		'both-slots',
		'no-right-slot',
		'no-middle-slot'
	].forEach((name) => {

		describe(name, () => {

			before(async() => await initTest(page, name));

			after(async() => await reset(page));

			[1500, 929, 767].forEach((width) => {
				it(`${width}`, async function() {
					await page.setViewport({
						height: 200,
						width: width,
						deviceScaleFactor: 2
					});
					await visualDiff.screenshotAndCompare(page, this.test.fullTitle());
				});
			});

		});

	});

	describe('focus', () => {

		before(async() => {
			await page.setViewport({
				height: 200,
				width: 1000,
				deviceScaleFactor: 2
			});
		});

		afterEach(async() => reset(page));

		it('back-button', async function() {
			await initTest(page, 'normal');
			await focusWithKeyboard(page, ['d2l-navigation-immersive', 'd2l-navigation-link-back']);
			await visualDiff.screenshotAndCompare(page, this.test.fullTitle());
		});

	});

	describe('new-slots', () => {

		before(async() => {
			await page.setViewport({
				height: 200,
				width: 1000,
				deviceScaleFactor: 2
			});
		});

		afterEach(async() => reset(page));

		['right', 'middle'].forEach((slot) => {
			it(`${slot}`, async function() {
				await initTest(page, `no-${slot}-slot`);
				await page.evaluate((slot) => {
					const newContent = document.createElement('div');
					newContent.setAttribute('slot', slot);
					newContent.innerHTML = 'New Content';
					document.querySelector('d2l-navigation-immersive').appendChild(newContent);
				}, slot);
				await page.waitForTimeout(100);
				await visualDiff.screenshotAndCompare(page, this.test.fullTitle());
			});
		});

	});

});
