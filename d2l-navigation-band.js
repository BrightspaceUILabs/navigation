import 'd2l-colors/d2l-colors.js';
import './d2l-navigation-shared-styles';

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { navigationSharedStyle } from './d2l-navigation-shared-styles';
/**
`d2l-navigation-band`
Polymer-based web component for a solid colour band that runs along the top of the navigational header

@demo demo/navigation-band.html
*/
class D2LNavigationBand extends PolymerElement {

	static get template() {
		const template = html`
		${navigationSharedStyle}
		<style>
			:host {
				background: var(--d2l-branding-primary-color, var(--d2l-color-celestine));
				min-height: 4px;
				display: block;
			}
		</style>
		<div class="d2l-navigation-centerer">
			<div class="d2l-navigation-gutters">
				<slot></slot>
			</div>
		</div>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}
customElements.define('d2l-navigation-band', D2LNavigationBand);
