import 'd2l-colors/d2l-colors.js';
import { navigationSharedSytle } from './d2l-navigation-shared-styles.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/**
`d2l-navigation-main-footer`
Polymer-based web component for the smaller, lower section of the navigational element

@demo demo/navigation-main-footer.html
*/
class D2LNavigationMainFooter extends PolymerElement {
	static get is() {
		return 'd2l-navigation-main-footer';
	}
	static get template() {
		return html`
			${navigationSharedSytle}
			<style>
				:host {
					border-top: 1px solid rgba(124,134,149,0.18);
					border-bottom: 1px solid rgba(124,134,149,0.18);
					display: block;
				}
			</style>
			<div class="d2l-navigation-centerer d2l-visible-on-ancestor-target">
				<div class="d2l-navigation-gutters">
					<slot name="main"></slot>
				</div>
			</div>
		`;
	}
}
window.customElements.define(D2LNavigationMainFooter.is, D2LNavigationMainFooter);
