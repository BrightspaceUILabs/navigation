import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier3-icons.js';
import 'd2l-tooltip/d2l-tooltip.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import '../../d2l-navigation-link.js';
import './d2l-navigation-iterator-item.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationIterator extends PolymerElement {
	static get template() {
		return html`
			<style>
				:host {
					@apply --d2l-body-compact-text;
					align-items: center;
					display: flex;
					justify-content: space-between;
					height: 3.3rem;
					max-width: 20rem;
				}
				@media (max-width: 30.75rem) {
					.d2l-navigation-iterator {
						height: 3rem;
					}
				}
			</style>
			<d2l-navigation-iterator-item 
				text=[[previousText]] 
				type="previous" 
				hide-text=[[hideText]] 
				hidden=[[noPrevious]]
				on-click="_dispatchButtonClicked"></d2l-navigation-iterator-item>
			<slot></slot>
			<d2l-navigation-iterator-item 
				text=[[nextText]] 
				type="next" 
				hide-text=[[hideText]] 
				hidden=[[noNext]]
				on-click="_dispatchButtonClicked"></d2l-navigation-iterator-item>
		`;
	}

	static get properties() {
		return {
			previousText: {
				type: String
			},
			nextText: {
				type: String
			},
			hideText: {
				type: Boolean,
				value: false
			},
			noPrevious: {
				type: Boolean,
				value: false
			},
			noNext: {
				type: Boolean,
				value: false
			}
		};
	}

	static get is() { return 'd2l-navigation-iterator'; }

	_dispatchButtonClicked(e) {
		this.dispatchEvent(new CustomEvent('d2l-navigation-iterator-button-clicked', {
			detail: {
				type: e.currentTarget.type
			},
			bubbles: true,
			composed: true
		}));
	}
}

window.customElements.define('d2l-navigation-iterator', D2LNavigationIterator);
