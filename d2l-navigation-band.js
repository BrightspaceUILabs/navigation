import 'd2l-colors/d2l-colors.js';

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
/**
`d2l-navigation-band`
Polymer-based web component for a solid colour band that runs along the top of the navigational header

@demo demo/navigation-band.html
*/
class D2LNavigationBand extends PolymerElement {

	static get template() {
		const template = html`

		<style>
			:host {
				border-top-color: var(--d2l-branding-primary-color, var(--d2l-color-celestine));
				border-top-style: solid;
				border-top-width: 4px;
				display: block;
			}
		</style>

		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}
customElements.define('d2l-navigation-band', D2LNavigationBand);
