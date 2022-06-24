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
				}
				a {
					align-items: center;
					color: var(--d2l-color-ferrite);
					display: inline-flex;
					height: 100%;
					min-height: 40px;
					position: relative;
					text-decoration: none;
					vertical-align: middle;
				}
				a:hover,
				a:focus {
					color: var(--d2l-color-celestine);
					--d2l-icon-fill-color: var(--d2l-color-celestine);
					outline: none;
				}
				a:hover .d2l-navigation-link-top-border,
				a:focus .d2l-navigation-link-top-border {
					@apply --d2l-navigation-highlight-border-hover-focus;
				}
				.d2l-navigation-link-top-border {
					@apply --d2l-navigation-highlight-border;
				}
				:host(:not([href])) .d2l-navigation-link-top-border {
					display: none;
				}
			</style>
			<a href$="[[href]]" title$="[[text]]">
				<span class="d2l-navigation-link-top-border"></span>
				<slot></slot>
			</a>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}

customElements.define('d2l-navigation-link', D2LNavigationLink);
