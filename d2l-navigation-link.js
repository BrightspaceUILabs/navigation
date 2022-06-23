import '@brightspace-ui/polymer-behaviors/d2l-focusable-behavior.js';
import { highlightStyles } from './d2l-navigation-highlight-styles.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
/**
`d2l-navigation-link`
Polymer-based web component for buttons used in the navigational header.

@demo demo/d2l-navigation-button.html d2l-navigation-link
*/
class D2LNavigationLink extends mixinBehaviors([D2L.PolymerBehaviors.FocusableBehavior], PolymerElement) {

	static get properties() {
		return {
			href: {
				reflectToAttribute: true,
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
					display: inline-block;
					height: 100%;
					vertical-align: top;
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
			<div style="height: 100%;" class="d2l-focusable">
				<a href$="[[href]]" title$="[[text]]" style="display: flex; justify-content: space-around; height: 100%;">
					<template is="dom-if" if="[[href]]">
						<span class="d2l-navigation-link-top-border"></span>
					</template>
					<slot></slot>
				</a>
			</div>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}

customElements.define('d2l-navigation-link', D2LNavigationLink);
