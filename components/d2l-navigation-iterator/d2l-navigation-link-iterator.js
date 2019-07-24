import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import './d2l-navigation-iterator.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationLinkIterator extends PolymerElement {
	static get is() { return 'd2l-navigation-link-iterator'; }

	static get properties() {
		return {
			previousHref: {
				type: String
			},
			nextHref: {
				type: String
			},
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

	static get template() {
		return html`
			<d2l-navigation-iterator
				previous-text=[[previousText]]
				next-text=[[nextText]]
				hide-text=[[hideText]]
				no-previous=[[noPrevious]]
				no-next=[[noNext]]
				on-d2l-navigation-iterator-button-clicked="_onNavigationIteratorButtonClicked"
			>
			<slot></slot>
			</d2l-navigation-iterator>
		`;
	}

	_onNavigationIteratorButtonClicked(evt) {
		if (evt.detail.type === 'previous') {
			window.location.href = this.previousHref;
		} else {
			window.location.href = this.nextHref;
		}
	}
}

window.customElements.define('d2l-navigation-link-iterator', D2LNavigationLinkIterator);
