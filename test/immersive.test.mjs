import '../d2l-navigation-immersive.js';
import { expect, fixture, html } from '@open-wc/testing';
import { runConstructor } from '@brightspace-ui/core/tools/constructor-test-helper.js';

describe('d2l-navigation-immersive', () => {

	describe('accessibility', () => {

		it('should pass all aXe tests', async() => {
			const el = await fixture(html`<d2l-navigation-immersive width-type="normal" back-link-href="https://www.d2l.com"></d2l-navigation-immersive>`);
			await expect(el).to.be.accessible();
		});

	});

	describe('constructor', () => {
		it('should construct', () => {
			runConstructor('d2l-navigation-immersive');
		});
	});

});
