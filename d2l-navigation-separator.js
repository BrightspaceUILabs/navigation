import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/icons/icon.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/**
`d2l-navigation-separator`
Polymer-based web component for a separator component to be used between buttons in a navigational element

@demo demo/navigation-separator.html
*/
class D2LNavigationSeparator extends PolymerElement {

	static get template() {
		const template = html`
		<style>
			:host {
				display: inline-block;
				margin: 0 9px;
			}
			d2l-icon {
				color: var(--d2l-color-mica);
			}
		</style>
		<d2l-icon icon="tier2:divider-big"></d2l-icon>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}
customElements.define('d2l-navigation-separator', D2LNavigationSeparator);
