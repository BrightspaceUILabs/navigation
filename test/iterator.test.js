import '../components/d2l-navigation-iterator/d2l-navigation-iterator.js';
import '../components/d2l-navigation-iterator/d2l-navigation-iterator-item.js';
import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { runConstructor } from '@brightspace-ui/core/tools/constructor-test-helper.js';

describe('Iterators', () => {

	describe('d2l-navigation-iterator-item', () => {

		describe('accessibility', () => {

			it('previous', async() => {
				const el = await fixture(html`<d2l-navigation-iterator-item type="previous"></d2l-navigation-iterator-item>`);
				await expect(el).to.be.accessible();
			});

			it('next', async() => {
				const el = await fixture(html`<d2l-navigation-iterator-item type="next"></d2l-navigation-iterator-item>`);
				await expect(el).to.be.accessible();
			});

			it('hide-text', async() => {
				const el = await fixture(html`<d2l-navigation-iterator-item hide-text></d2l-navigation-iterator-item>`);
				await expect(el).to.be.accessible();
			});

			it('disabled', async() => {
				const el = await fixture(html`<d2l-navigation-iterator-item disabled></d2l-navigation-iterator-item>`);
				await expect(el).to.be.accessible();
			});

			it('custom-text', async() => {
				const el = await fixture(html`<d2l-navigation-iterator-item text="Prev"></d2l-navigation-iterator-item>`);
				await expect(el).to.be.accessible();
			});

		});

		describe('constructor', () => {
			it('should construct', () => {
				runConstructor('d2l-navigation-iterator-item');
			});
		});

	});

	describe('d2l-navigation-iterator', () => {

		const iteratorFixture = html`<d2l-navigation-iterator></d2l-navigation-iterator>`;

		describe('accessibility', () => {

			it('should pass all aXe tests', async() => {
				const el = await fixture(iteratorFixture);
				await expect(el).to.be.accessible();
			});

		});

		describe('constructor', () => {
			it('should construct', () => {
				runConstructor('d2l-navigation-iterator');
			});
		});

		describe('events', () => {

			it('should dispatch "previous-click" event when previous clicked', async() => {
				const el = await fixture(iteratorFixture);
				setTimeout(() => el.shadowRoot.querySelector('d2l-navigation-iterator-item[type="previous"]').click());
				await oneEvent(el, 'previous-click');
			});

			it('should dispatch "next-click" event when next clicked', async() => {
				const el = await fixture(iteratorFixture);
				setTimeout(() => el.shadowRoot.querySelector('d2l-navigation-iterator-item[type="next"]').click());
				await oneEvent(el, 'next-click');
			});

			it('should NOT dispatch "previous-click" event when disabled previous clicked', async() => {
				const el = await fixture(html`<d2l-navigation-iterator previous-disabled></d2l-navigation-iterator>`);
				el.addEventListener('previous-click', () => {
					throw new Error('previous-click dispatched on disabled item');
				});
				el.shadowRoot.querySelector('d2l-navigation-iterator-item[type="previous"]').click();
			});

			it('should NOT dispatch "next-click" event when disabled next clicked', async() => {
				const el = await fixture(html`<d2l-navigation-iterator next-disabled></d2l-navigation-iterator>`);
				el.addEventListener('next-click', () => {
					throw new Error('next-click dispatched on disabled item');
				});
				el.shadowRoot.querySelector('d2l-navigation-iterator-item[type="next"]').click();
			});

		});

	});

});
