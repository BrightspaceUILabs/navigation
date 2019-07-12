import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-link/d2l-link-behavior.js';
import { highlightStyles } from './d2l-navigation-highlight-styles.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
/**
`d2l-navigation-link`
Polymer-based web component for buttons used in the navigational header.

@demo demo/d2l-navigation-button.html d2l-navigation-link
*/
class D2LNavigationLink extends mixinBehaviors([D2L.PolymerBehaviors.Link.Behavior,
	D2L.PolymerBehaviors.FocusableBehavior], PolymerElement) {

	static get properties() {
		return {
			href: {
				type: String
			},
			text: {
				type: String
			}
		};
	}
	static get template() {
		const template = html`
			${highlightStyles}
			<style is="custom-style">
				:host {
					display: flex;
					height: 100%;
				}
				a {
					@apply --d2l-navigation-highlight-base;
					font-family: inherit;
					outline: none; /* Needed for Edge, outline setting from css mixin is not being applied in Polymer 2 & 3 */
				}
				:host(:not([href])) a {
					cursor: default;
				}
				a:hover,
				a:focus {
					@apply --d2l-navigation-highlight-base-hover-focus;
				}
				a:hover .d2l-navigation-link-top-border,
				a:focus .d2l-navigation-link-top-border {
					@apply --d2l-navigation-highlight-border-hover-focus;
				}
				.d2l-navigation-link-top-border {
					@apply --d2l-navigation-highlight-border;
				}
			</style>
			<a class="d2l-focusable" href$="[[href]]" title$="[[text]]">
				<template is="dom-if" if="[[href]]">
					<span class="d2l-navigation-link-top-border"></span>
				</template>
				<slot></slot>
			</a>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}

customElements.define('d2l-navigation-link', D2LNavigationLink);
