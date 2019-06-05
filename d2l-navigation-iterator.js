import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier3-icons.js';
import 'd2l-tooltip/d2l-tooltip.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationIterator extends PolymerElement {
	static get template() {
		return html`
			<style>
				a {
					text-decoration: none;
				}
				.d2l-navigation-iterator {
					display: flex;
					justify-content: space-between;
					padding: 0 1.5rem 0 1.2rem;
				}
				.d2l-navigation-previous-link-text {
					padding: 0 0 0 0.6rem;
				}
				.d2l-navigation-next-link-text {
					padding: 0 0.6rem 0 0;
				}
            </style>
			<div class="d2l-navigation-iterator">
				<a href="[[previousLink]]"><d2l-icon icon="d2l-tier3:chevron-left-circle"></d2l-icon><span class="d2l-navigation-previous-link-text">Previous</span></a>
				<a href="[[nextLink]]"><span class="d2l-navigation-next-link-text">Next</span><d2l-icon icon="d2l-tier3:chevron-right-circle"></d2l-icon></a>
			</div>
		`;
	}

	static get properties() {
		return {
			nextLink: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			previousLink: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			nextTitle: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			previousTitle: {
				type: String,
				value: '',
				reflectToAttribute: true
			}
		};
	}

	static get is() { return 'd2l-navigation-iterator'; }

}

window.customElements.define('d2l-navigation-iterator', D2LNavigationIterator);
