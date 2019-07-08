import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier2-icons.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/**
`d2l-navigation-separator`
Polymer-based web component for a separator component to be used between buttons in a navigational element

@demo demo/navigation-separator.html
*/
class D2LNavigationSeparator extends PolymerElement {
	static get is() {
		return 'd2l-navigation-separator';
	}
	static get template() {
		return html`
		<style>
			:host {
				display: inline-block;
				margin: 0 9px;
			}
			d2l-icon {
				color: var(--d2l-color-mica);
			}
		</style>
		<d2l-icon icon="d2l-tier2:divider-big"></d2l-icon>
		`;
	}
}
window.customElements.define(D2LNavigationSeparator.is, D2LNavigationSeparator);
