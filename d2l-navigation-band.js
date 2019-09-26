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

	static get properties() {
		return {
			customScroll: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			}
		};
	}
	static get template() {
		const template = html`
		${navigationSharedStyle}
		<style>
			:host {
				background-color: var(--d2l-branding-primary-color, var(--d2l-color-celestine));
				display: block;
				min-height: 4px;

				overflow-x: auto;
				overflow-y: hidden;
			}

			:host([custom-scroll]) {
				 /* Firefox Styles */
				 scrollbar-color: var(--d2l-color-galena) var(--d2l-color-sylvite);
				 scrollbar-width: thin;

				 /* IE Styles */
				 scrollbar-face-color:var(--d2l-color-galena);
				 scrollbar-arrow-color: var(--d2l-color-sylvite);
				 scrollbar-track-color: var(--d2l-color-sylvite);
				 scrollbar-shadow-color: var(--d2l-color-sylvite);
			 }
			/* Webkit Styles */
			:host([custom-scroll])::-webkit-scrollbar {
				background-color: var(--d2l-color-sylvite);
				height: 9px;
			}
			:host([custom-scroll])::-webkit-scrollbar-thumb {
				background-color: var(--d2l-color-galena);
				border-radius: 8px;
				border-bottom: 1px solid var(--d2l-color-sylvite);
				border-top: 1px solid var(--d2l-color-sylvite);
			}
			/* Styles to ensure the right padding is respected when scrolling */
			.d2l-navigation-centerer {
				line-height: 0;
			}
			.d2l-navigation-gutters {
				display: inline-block;
				line-height: 0;
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
	ready() {
		super.ready();
		const userAgent = navigator.userAgent.toLowerCase();
		if (userAgent.indexOf('win') > -1 && userAgent.indexOf('mobile') === -1) {
			this.customScroll = true;
		}
	}
}
customElements.define('d2l-navigation-band', D2LNavigationBand);
