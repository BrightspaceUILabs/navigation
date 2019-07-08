
import '@polymer/polymer/polymer-legacy.js';

import './d2l-navigation-band.js';
import { navigationSharedSytle } from './d2l-navigation-shared-styles.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/**
`d2l-navigation`
Polymer-based web component for the all encompasing navigation wrapper component

@demo demo/navigation.html
*/
class D2LNavigation extends PolymerElement {
	static get is() {
		return 'd2l-navigation';
	}
	static get template() {
		const template = html`
		${navigationSharedSytle}
		<style>
			:host {
				display: block;
				position: relative;
			}
			.d2l-navigation-shadow-drop-border {
				background-color: rgba(0,0,0,0.02);
				bottom: -4px;
				height: 4px;
				pointer-events: none;
				position: absolute;
				width: 100%;
			}
		</style>
		<d2l-navigation-band></d2l-navigation-band>
		<slot></slot>
		<div class="d2l-navigation-shadow-drop-border"></div>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}
customElements.define(D2LNavigation.is, D2LNavigation);
