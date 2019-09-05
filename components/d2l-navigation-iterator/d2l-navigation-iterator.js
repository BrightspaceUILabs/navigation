import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import './d2l-navigation-iterator-item.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationIterator extends PolymerElement {
	static get is() { return 'd2l-navigation-iterator'; }

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
			previousDisabled: {
				type: Boolean,
				value: false
			},
			nextDisabled: {
				type: Boolean,
				value: false
			}
		};
	}

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
				disabled=[[previousDisabled]]
				on-click="_dispatchPreviousClicked"></d2l-navigation-iterator-item>
			<slot></slot>
			<d2l-navigation-iterator-item
				text=[[nextText]]
				type="next"
				hide-text=[[hideText]]
				disabled=[[nextDisabled]]
				on-click="_dispatchNextClicked"></d2l-navigation-iterator-item>
		`;
	}

	_dispatchPreviousClicked(e) {
		if (this.previousDisabled) {
			return;
		}

		e.stopPropagation();

		this.dispatchEvent(new CustomEvent('previous-click', {
			detail: {
				type: e.currentTarget.type
			}
		}));
	}

	_dispatchNextClicked(e) {
		if (this.nextDisabled) {
			return;
		}

		e.stopPropagation();

		this.dispatchEvent(new CustomEvent('next-click', {
			detail: {
				type: e.currentTarget.type
			}
		}));
	}
}

window.customElements.define('d2l-navigation-iterator', D2LNavigationIterator);
