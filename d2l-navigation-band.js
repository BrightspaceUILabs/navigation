import 'd2l-colors/d2l-colors.js';

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
/**
`d2l-navigation-band`
Polymer-based web component for a solid colour band that runs along the top of the navigational header

@demo demo/navigation-band.html
*/
class D2LNavigationBand extends PolymerElement {

	static get is() {
		return 'd2l-navigation-band';
	}

	static get template() {
		return html`

		<style>
			:host {
				border-top-color: var(--d2l-branding-primary-color, var(--d2l-color-celestine));
				border-top-style: solid;
				border-top-width: 4px;
				display: block;
			}
		</style>

		`;
	}
}
window.customElements.define(D2LNavigationBand.is, D2LNavigationBand);
