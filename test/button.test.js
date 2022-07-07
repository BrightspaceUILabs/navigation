import '../d2l-navigation-button.js';
import '../d2l-navigation-button-close.js';
import '../d2l-navigation-button-notification-icon.js';
import '../d2l-navigation-link.js';
import '../d2l-navigation-link-back.js';
import '../d2l-navigation-link-image.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { runConstructor } from '@brightspace-ui/core/tools/constructor-test-helper.js';

describe('Buttons', () => {

	describe('d2l-navigation-button', () => {

		describe('accessibility', () => {

			it('default', async() => {
				const el = await fixture(html`<d2l-navigation-button text="test"></d2l-navigation-button>`);
				await expect(el).to.be.accessible();
			});

			it('disabled', async() => {
				const el = await fixture(html`<d2l-navigation-button text="test" disabled></d2l-navigation-button>`);
				await expect(el).to.be.accessible();
			});

			it('focused', async() => {
				const el = await fixture(html`<d2l-navigation-button text="test"></d2l-navigation-button>`);
				setTimeout(() => el.shadowRoot.querySelector('button').focus());
				await oneEvent(el, 'focus');
				await expect(el).to.be.accessible();
			});

		});

		describe('constructor', () => {
			it('should construct', () => {
				runConstructor('d2l-navigation-button');
			});
		});

	});

	describe('d2l-navigation-button-close', () => {

		describe('accessibility', () => {
			it('should pass all aXe tests', async() => {
				const el = await fixture(html`<d2l-navigation-button-close></d2l-navigation-button-close>`);
				await expect(el).to.be.accessible();
			});
		});

		describe('constructor', () => {
			it('should construct', () => {
				runConstructor('d2l-navigation-button-close');
			});
		});

	});

	describe('d2l-navigation-notification-icon', () => {

		describe('accessibility', () => {
			it('should pass all aXe tests', async() => {
				const el = await fixture(html`<d2l-navigation-notification-icon icon="tier3:notification-bell" text="test"></d2l-navigation-notification-icon>`);
				await expect(el).to.be.accessible();
			});
		});

		describe('constructor', () => {
			it('should construct', () => {
				runConstructor('d2l-navigation-notification-icon');
			});
		});

	});

	describe('d2l-navigation-link', () => {

		describe('accessibility', () => {

			it('default', async() => {
				const el = await fixture(html`<d2l-navigation-link href="https://www.d2l.com" text="D2L">D2L</d2l-navigation-link>`);
				await expect(el).to.be.accessible();
			});

			it('focused', async() => {
				const el = await fixture(html`<d2l-navigation-link href="https://www.d2l.com" text="D2L">D2L</d2l-navigation-link>`);
				setTimeout(() => el.shadowRoot.querySelector('a').focus());
				await oneEvent(el, 'focus');
				await expect(el).to.be.accessible();
			});

		});

		describe('constructor', () => {
			it('should construct', () => {
				runConstructor('d2l-navigation-link');
			});
		});

	});

	describe('d2l-navigation-link-back', () => {

		describe('accessibility', () => {
			it('should pass all aXe tests', async() => {
				const el = await fixture(html`<d2l-navigation-link-back href="https://www.d2l.com" text="D2L">D2L</d2l-navigation-link-back>`);
				await expect(el).to.be.accessible();
			});
		});

		describe('constructor', () => {
			it('should construct', () => {
				runConstructor('d2l-navigation-link-back');
			});
		});

	});

	describe('d2l-navigation-link-image', () => {

		describe('accessibility', () => {
			it('should pass all aXe tests', async() => {
				const el = await fixture(html`<d2l-navigation-link-image src="../demo/logo-image.png" href="https:/www.d2l.com" text="D2L"></d2l-navigation-link-image>`);
				await expect(el).to.be.accessible();
			});
		});

		describe('constructor', () => {
			it('should construct', () => {
				runConstructor('d2l-navigation-link-image');
			});
		});

	});

});
