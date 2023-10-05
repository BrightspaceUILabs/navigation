import '../../d2l-navigation-link.js';
import '../../d2l-navigation-link-back.js';
import '../../d2l-navigation-link-icon.js';
import '../../d2l-navigation-link-image.js';
import { expect, fixture, focusElem, hoverElem, html, oneEvent } from '@brightspace-ui/testing';

describe('d2l-navigation-link', () => {

	[
		{ name: 'base', template: html`<d2l-navigation-link href="https://www.d2l.com" text="D2L">D2L</d2l-navigation-link>` },
		{ name: 'back', template: html`<d2l-navigation-link-back href="https://www.d2l.com" text="D2L">D2L</d2l-navigation-link-back>` },
		{ name: 'icon-text', template: html`<d2l-navigation-link-icon href="https://www.example.org" icon="tier3:gear" text="Settings"></d2l-navigation-link-icon>` },
		{ name: 'icon-text-hidden', tooltip: true, template: html`<d2l-navigation-link-icon href="https://www.example.org" icon="tier3:gear" text="Settings" text-hidden></d2l-navigation-link-icon>` },
		{ name: 'image', tooltip: true, template: html`<d2l-navigation-link-image src="../demo/logo-image.png" href="https:/www.d2l.com" text="D2L"></d2l-navigation-link-image>` },
		{ name: 'image-no-href', template: html`<d2l-navigation-link-image src="../demo/logo-image.png" text="D2L"></d2l-navigation-link-image>`, noFocus: true }
	].forEach(({ name, noFocus, template, tooltip }) => {
		describe(name, () => {

			let elem;
			beforeEach(async() => elem = await fixture(template));

			it('normal', async() => {
				await expect(elem).to.be.golden();
			});

			it('hover', async() => {
				await hoverElem(elem);
				if (tooltip) await oneEvent(elem, 'd2l-tooltip-show');
				await expect(elem).to.be.golden();
			});

			if (!noFocus) {
				it('focus', async() => {
					await focusElem(elem);
					if (tooltip) await oneEvent(elem, 'd2l-tooltip-show');
					await expect(elem).to.be.golden();
				});
			}
		});
	});

});
