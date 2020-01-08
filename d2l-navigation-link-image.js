import './d2l-navigation-link.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
/**
`d2l-navigation-link-image`
Polymer-based web component for the image link used in the navigational header.

@demo demo/d2l-navigation-button.html d2l-navigation-link-image
*/
class D2LNavigationLinkImage extends PolymerElement {

	static get properties() {
		return {
			src: {
				type: String
			},
			href: {
				type: String
			},
			slim: {
				reflectToAttribute: true,
				type: Boolean,
				value: false
			},
			text: {
				type: String,
				value: ''
			}
		};
	}
	static get template() {
		const template = html`
			<style>
			:host {
				display: inline-block;
				height: 100%;
			}
			img {
				vertical-align: middle;
				border: none; /* needed for IE10 */
				max-height: 60px;
				max-width: 260px;
			}
			:host([slim]) img {
				max-height: 40px;
				max-width: 173px;
			}
			.d2l-navigation-link-image-container {
				height: 100%;
				vertical-align: middle;
				align-items: center;
				display: inline-flex;
			}
		</style>
		<d2l-navigation-link href="[[href]]" text="[[text]]">
			<span class="d2l-navigation-link-image-container"><img src="[[src]]" alt$="[[text]]"></span>
		</d2l-navigation-link>`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}
customElements.define('d2l-navigation-link-image', D2LNavigationLinkImage);
