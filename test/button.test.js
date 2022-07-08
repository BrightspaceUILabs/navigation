import '../d2l-navigation-button.js';
import '../d2l-navigation-button-close.js';
import '../d2l-navigation-button-icon.js';
import '../d2l-navigation-button-notification-icon.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { getComposedActiveElement } from '@brightspace-ui/core/helpers/focus.js';
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

		describe('events', () => {
			it('should trigger click event', async() => {
				const el = await fixture(html`<d2l-navigation-button text="test"></d2l-navigation-button>`);
				setTimeout(() => el.shadowRoot.querySelector('button').click());
				await oneEvent(el, 'click');
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

	describe('d2l-navigation-button-icon', () => {

		describe('accessibility', () => {

			it('default', async() => {
				const el = await fixture(html`<d2l-navigation-button-icon icon="tier3:gear" text="test"></d2l-navigation-button-icon>`);
				await expect(el).to.be.accessible();
			});

			it('text hidden', async() => {
				const el = await fixture(html`<d2l-navigation-button-icon icon="tier3:gear" text="test" text-hidden></d2l-navigation-button-icon>`);
				await expect(el).to.be.accessible();
			});

			it('disabled', async() => {
				const el = await fixture(html`<d2l-navigation-button-icon icon="tier3:gear" text="test" disabled></d2l-navigation-button-icon>`);
				await expect(el).to.be.accessible();
			});

			it('focused', async() => {
				const el = await fixture(html`<d2l-navigation-button-icon icon="tier3:gear" text="test"></d2l-navigation-button-icon>`);
				el.focus();
				const activeElem = getComposedActiveElement();
				expect(activeElem).to.equal(el.shadowRoot.querySelector('button'));
				await expect(el).to.be.accessible();
			});

		});

		describe('constructor', () => {
			it('should construct', () => {
				runConstructor('d2l-navigation-button-icon');
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

});
