import 'd2l-colors/d2l-colors.js';
import { navigationSharedStyle } from './d2l-navigation-shared-styles.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/**
`d2l-navigation-main-footer`
Polymer-based web component for the smaller, lower section of the navigational element

@demo demo/navigation-main-footer.html
*/
class D2LNavigationMainFooter extends PolymerElement {

	static get template() {
		const template = html`
			${navigationSharedStyle}
			<style>
				:host {
					border-top: 1px solid rgba(124,134,149,0.18);
					border-bottom: 1px solid rgba(124,134,149,0.18);
					display: block;
				}
			</style>
			<div class="d2l-navigation-centerer">
				<div class="d2l-navigation-gutters">
					<slot name="main"></slot>
				</div>
			</div>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}
customElements.define('d2l-navigation-main-footer', D2LNavigationMainFooter);
